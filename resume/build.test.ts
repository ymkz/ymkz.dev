import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { PDFDict, PDFDocument, PDFName, PDFRawStream } from "@pdfme/pdf-lib";

for (const [filename, pages, title] of [
	["resume.pdf", 1, "履歴書"],
	["career.pdf", 2, "職務経歴書"],
] as const) {
	test(`${filename} has ${pages} A4 pages with embedded, Unicode-mapped fonts`, async () => {
		const bytes = await readFile(
			new URL(`../public/${filename}`, import.meta.url),
		);
		const pdf = await PDFDocument.load(bytes);
		assert.equal(pdf.getPageCount(), pages);
		assert.ok(pdf.getTitle()?.startsWith(title));

		for (const page of pdf.getPages()) {
			assert.ok(Math.abs(page.getWidth() - 595.28) < 0.1, "A4 width");
			assert.ok(Math.abs(page.getHeight() - 841.89) < 0.1, "A4 height");
			assert.ok(page.node.Contents(), "page must have content");
			const fonts = page.node.Resources()?.lookup(PDFName.of("Font"), PDFDict);
			assert.ok(fonts && fonts.keys().length >= 2, "regular and bold fonts");
			for (const key of fonts.keys()) {
				const font: PDFDict = fonts.lookup(key, PDFDict);
				const unicode: unknown = font.lookup(PDFName.of("ToUnicode"));
				assert.ok(unicode instanceof PDFRawStream, "Unicode character mapping");
				assert.ok(
					unicode.getContents().length > 0,
					"Japanese text must be copyable",
				);
			}
		}

		const embeddedFonts = pdf.context
			.enumerateIndirectObjects()
			.filter(
				([, object]) =>
					object instanceof PDFDict && object.has(PDFName.of("FontFile2")),
			);
		assert.ok(
			embeddedFonts.length >= 2,
			"fonts must be embedded for portable rendering",
		);
	});
}
