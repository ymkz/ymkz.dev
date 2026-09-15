import { mkdir, readFile, writeFile } from "node:fs/promises";
import type { Font } from "@pdfme/common";
import { generate } from "@pdfme/generator";
import { renderToTemplate } from "@pdfme/jsx";
import { table, text } from "@pdfme/schemas";
import { resume } from "./data.ts";
import { CareerHistory, Resume } from "./document.tsx";

const font: Font = {
	regular: {
		data: await readFile(
			new URL("./fonts/BIZUDPGothic-Regular.ttf", import.meta.url),
		),
		fallback: true,
	},
	bold: {
		data: await readFile(
			new URL("./fonts/BIZUDPGothic-Bold.ttf", import.meta.url),
		),
	},
};

const documents = [
	{
		filename: "resume.pdf",
		title: "履歴書",
		content: <Resume data={resume} />,
	},
	{
		filename: "career.pdf",
		title: "職務経歴書",
		content: <CareerHistory data={resume} />,
	},
];

await mkdir(new URL("../public/", import.meta.url), { recursive: true });
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
			title: `${document.title} | ${resume.name}`,
			author: resume.name,
		},
	});
	const output = new URL(`../public/${document.filename}`, import.meta.url);
	await writeFile(output, pdf);
	console.log(`Generated ${output.pathname} (${pdf.byteLength} bytes)`);
}
