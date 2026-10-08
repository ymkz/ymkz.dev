import { readFile, writeFile } from "node:fs/promises";
import { renderHtml } from "@formepdf/html";
import { career, resume } from "../src/resume/templates.mjs";

const data = JSON.parse(
	await readFile(
		process.env.RESUME_DATA ||
			new URL("../src/resume/data.json", import.meta.url),
		"utf8",
	),
);
const css = await readFile(
	new URL("../src/resume/style.css", import.meta.url),
	"utf8",
);
const revision = "6ce172f74aa355ea43eb964fa4a91570a4d3064d";

const fonts = await Promise.all(
	["Regular", "Bold"].map(async (weight) => {
		const filename = `BIZUDPGothic-${weight}.ttf`;
		const response = await fetch(
			`https://raw.githubusercontent.com/google/fonts/${revision}/ofl/bizudpgothic/${filename}`,
			{ signal: AbortSignal.timeout(60_000) },
		);
		if (!response.ok) {
			throw new Error(
				`Font download failed: HTTP ${response.status} (${filename})`,
			);
		}
		return {
			family: "BIZ UDPGothic",
			data: new Uint8Array(await response.arrayBuffer()),
			weight: weight === "Bold" ? 700 : 400,
		};
	}),
);

for (const [name, render] of [
	["resume", resume],
	["career", career],
]) {
	const html = `<!doctype html><html lang="ja"><head><meta charset="utf-8"></head><body>${render(data)}</body></html>`;
	const { pdf, warnings } = renderHtml(html, {
		css,
		fonts,
		auditContent: true,
	});
	if (warnings.length) {
		throw new Error(`${name}.pdf: ${warnings.join("\n")}`);
	}
	await writeFile(new URL(`../public/${name}.pdf`, import.meta.url), pdf);
	console.log(`Generated ${name}.pdf`);
}
