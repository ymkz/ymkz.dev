import { mkdir, writeFile } from "node:fs/promises";
import type { Font } from "@pdfme/common";
import { generate } from "@pdfme/generator";
import { renderToTemplate } from "@pdfme/jsx";
import { table, text } from "@pdfme/schemas";
import { author, CareerHistory, Resume } from "./document.tsx";

async function loadFont(weight: "Regular" | "Bold") {
	const response = await fetch(
		`https://raw.githubusercontent.com/google/fonts/6ce172f74aa355ea43eb964fa4a91570a4d3064d/ofl/bizudpgothic/BIZUDPGothic-${weight}.ttf`,
		{ signal: AbortSignal.timeout(30_000) },
	);
	if (!response.ok) {
		throw new Error(
			`Failed to download ${weight} font: HTTP ${response.status}`,
		);
	}
	return response.arrayBuffer();
}

const [regular, bold] = await Promise.all([
	loadFont("Regular"),
	loadFont("Bold"),
]);
const font: Font = {
	regular: {
		data: regular,
		fallback: true,
	},
	bold: {
		data: bold,
	},
};

const documents = [
	{
		filename: "resume.pdf",
		title: "履歴書",
		content: <Resume />,
	},
	{
		filename: "career.pdf",
		title: "職務経歴書",
		content: <CareerHistory />,
	},
];

await mkdir(new URL("../../public/", import.meta.url), { recursive: true });
for (const document of documents) {
	const { template, inputs } = await renderToTemplate(document.content, {
		font,
	});
	const pdf = await generate({
		template,
		inputs,
		plugins: { table, text },
		options: {
			font,
			lang: "ja",
			title: `${document.title} | ${author}`,
			author,
		},
	});
	const output = new URL(`../../public/${document.filename}`, import.meta.url);
	await writeFile(output, pdf);
	console.log(`Generated ${output.pathname} (${pdf.byteLength} bytes)`);
}
