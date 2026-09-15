import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../../", import.meta.url));
const version = "0.15.1";
const arch = { x64: "x86_64", arm64: "aarch64" }[process.arch];
const platform = {
	linux: "unknown-linux-musl",
	darwin: "apple-darwin",
}[process.platform];
if (!arch || !platform) {
	throw new Error("Build on Linux (including WSL) or macOS with x64/arm64.");
}
const target = `typst-${arch}-${platform}`;
const cache = join(root, ".wrangler", "typst", version);
const compiler = join(cache, target, "typst");
const data = JSON.parse(
	await readFile(
		process.env.RESUME_DATA
			? resolve(process.env.RESUME_DATA)
			: join(root, "src/resume/data.json"),
		"utf8",
	),
);

async function download(url, destination) {
	const response = await fetch(url, { signal: AbortSignal.timeout(60_000) });
	if (!response.ok) {
		throw new Error(`Download failed: HTTP ${response.status} (${url})`);
	}
	await writeFile(destination, new Uint8Array(await response.arrayBuffer()));
}

const temporary = await mkdtemp(join(tmpdir(), "ymkz-resume-"));
try {
	if (!existsSync(compiler)) {
		const archive = join(temporary, "typst.tar.xz");
		await download(
			`https://github.com/typst/typst/releases/download/v${version}/${target}.tar.xz`,
			archive,
		);
		await mkdir(cache, { recursive: true });
		execFileSync("tar", ["-xJf", archive, "-C", cache], { stdio: "inherit" });
	}
	await Promise.all(
		["Regular", "Bold"].map((weight) =>
			download(
				`https://raw.githubusercontent.com/google/fonts/6ce172f74aa355ea43eb964fa4a91570a4d3064d/ofl/bizudpgothic/BIZUDPGothic-${weight}.ttf`,
				join(temporary, `${weight}.ttf`),
			),
		),
	);
	await mkdir(join(root, "public"), { recursive: true });
	for (const name of ["resume", "career"]) {
		const output = join(root, "public", `${name}.pdf`);
		execFileSync(
			compiler,
			[
				"compile",
				"--root",
				root,
				"--font-path",
				temporary,
				"--ignore-system-fonts",
				"--input",
				`data=${JSON.stringify(data)}`,
				join(root, "src/resume", `${name}.typ`),
				output,
			],
			{ stdio: "inherit" },
		);
		console.log(`Generated ${output}`);
	}
} finally {
	await rm(temporary, { recursive: true, force: true });
}
