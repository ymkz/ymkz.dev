import { readFile } from "node:fs/promises";
import bundledData from "./data.json" with { type: "json" };

export const data = process.env.RESUME_DATA
	? JSON.parse(await readFile(process.env.RESUME_DATA, "utf8"))
	: bundledData;
