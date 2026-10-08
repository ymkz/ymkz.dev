import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import { renderHtml } from "@formepdf/html";

const output = new URL("../dist/", import.meta.url);
const revision = "6ce172f74aa355ea43eb964fa4a91570a4d3064d";
await mkdir(new URL("fonts/", output), { recursive: true });

async function downloadFontFile(filename) {
	const response = await fetch(
		`https://raw.githubusercontent.com/google/fonts/${revision}/ofl/bizudpgothic/${filename}`,
		{ signal: AbortSignal.timeout(60_000) },
	);
	if (!response.ok) {
		throw new Error(
			`Font download failed: HTTP ${response.status} (${filename})`,
		);
	}
	const data = new Uint8Array(await response.arrayBuffer());
	await writeFile(new URL(`fonts/${filename}`, output), data);
	return data;
}

const fonts = await Promise.all(
	["Regular", "Bold"].map(async (weight) => {
		const filename = `BIZUDPGothic-${weight}.ttf`;
		const data = await downloadFontFile(filename);
		return {
			family: "BIZ UDPGothic",
			data,
			weight: weight === "Bold" ? 700 : 400,
		};
	}),
);
await downloadFontFile("OFL.txt");

for (const name of ["resume", "career"]) {
	const htmlPath = new URL(`${name}.html`, output);
	const html = await readFile(htmlPath, "utf8");
	const { pdf, warnings } = renderHtml(html, { fonts, auditContent: true });
	if (warnings.length) {
		throw new Error(`${name}.pdf: ${warnings.join("\n")}`);
	}
	await writeFile(new URL(`${name}.pdf`, output), pdf);
	await unlink(htmlPath);
	console.log(`Generated ${name}.pdf`);
}
