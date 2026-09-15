import {
	Document,
	Footer,
	Page,
	type PdfJsxChild,
	Row,
	Stack,
	Table,
	type TableProps,
	Text,
} from "@pdfme/jsx";
import type { resume } from "./data.ts";

function RuledTable({ bodyStyles, ...props }: TableProps) {
	return (
		<Table
			fontSize={9.5}
			tableStyles={{ borderColor: "#000000", borderWidth: 0.2 }}
			headStyles={{
				fontName: "bold",
				fontColor: "#000000",
				backgroundColor: "#F2F2F2",
				borderColor: "#000000",
				borderWidth: 0.2,
				padding: { x: 2, y: 2 },
				alignment: "center",
			}}
			bodyStyles={{
				fontColor: "#000000",
				backgroundColor: "#FFFFFF",
				alternateBackgroundColor: "#FFFFFF",
				borderColor: "#000000",
				borderWidth: 0.2,
				padding: { x: 2, y: 2 },
				lineHeight: 1.4,
				...bodyStyles,
			}}
			{...props}
		/>
	);
}

function Section({
	title,
	children,
}: {
	title: string;
	children: PdfJsxChild;
}) {
	return (
		<Stack gap={3}>
			<Text
				size={11}
				font="bold"
				borderColor="#000000"
				borderWidth={{ bottom: 0.25 }}
				padding={{ bottom: 1.5 }}
			>
				{title}
			</Text>
			{children}
		</Stack>
	);
}

function Paragraph({ children }: { children: PdfJsxChild }) {
	return (
		<Text size={10.5} lineHeight={1.65}>
			{children}
		</Text>
	);
}

function Paper({ name, children }: { name: string; children: PdfJsxChild }) {
	return (
		<Document size="A4" margin={{ x: 15, top: 15, bottom: 15 }} font="regular">
			<Footer>
				<Row>
					<Text size={8} flex={1}>
						{name}
					</Text>
					<Text size={8} align="right" width={25}>
						{"{currentPage} / {totalPages}"}
					</Text>
				</Row>
			</Footer>
			{children}
		</Document>
	);
}

export function Resume({ data }: { data: typeof resume }) {
	return (
		<Paper name={data.name}>
			<Page>
				<Stack gap={6}>
					<Text size={22} font="bold" spacing={5}>
						履歴書
					</Text>
					<Row gap={8}>
						<Stack width={142} gap={0}>
							<Text
								size={9}
								borderColor="#000000"
								borderWidth={{ top: 0.2, left: 0.2, right: 0.2 }}
								padding={{ x: 3, top: 2 }}
							>
								氏名
							</Text>
							<Text
								size={20}
								font="bold"
								borderColor="#000000"
								borderWidth={{ left: 0.2, right: 0.2 }}
								padding={{ x: 3, top: 2, bottom: 4 }}
							>
								{data.name}
							</Text>
							<RuledTable
								head={["項目", "内容"]}
								showHead={false}
								columnWeights={[25, 117]}
								rows={[
									["生年月日", data.birthday],
									["現住所", data.location],
									["Web", data.website],
									["職種", data.role],
								]}
							/>
						</Stack>
						<Text
							width={30}
							height={40}
							size={8}
							align="center"
							valign="middle"
							borderWidth={0.2}
							borderColor="#000000"
							lineHeight={1.6}
						>
							{"写真\n\n縦40mm × 横30mm"}
						</Text>
					</Row>
					<RuledTable
						head={["年", "月", "学歴・職歴"]}
						columnWeights={[18, 12, 150]}
						rows={[
							["", "", "学歴"],
							...data.education.map((item) => [
								...item.period.split("/"),
								item.description,
							]),
							["", "", "職歴"],
							[
								...data.employment.split(" ")[0].split("/"),
								`${data.company} 入社`,
							],
							["", "", `${data.employment}\n${data.role}として勤務`],
							["", "", "現在に至る（詳細は別紙職務経歴書に記載）"],
							["", "", "以上"],
						]}
					/>
					<RuledTable
						head={["免許・資格"]}
						rows={data.qualifications.map((qualification) => [qualification])}
					/>
					<RuledTable head={["自己PR"]} rows={[[data.strengths]]} />
					<RuledTable head={["受賞歴"]} rows={[[data.award]]} />
				</Stack>
			</Page>
		</Paper>
	);
}

function CareerTable({ items }: { items: typeof resume.experience }) {
	return (
		<RuledTable
			head={["期間", "業務内容"]}
			columnWeights={[35, 145]}
			fontSize={10.5}
			bodyStyles={{ padding: { x: 3, y: 3.5 }, lineHeight: 1.55 }}
			rows={items.map((item) => [item.period, item.description.join("\n")])}
		/>
	);
}

export function CareerHistory({ data }: { data: typeof resume }) {
	return (
		<Paper name={data.name}>
			<Page>
				<Stack gap={6}>
					<Row alignItems="center">
						<Text size={20} font="bold" flex={1}>
							職務経歴書
						</Text>
						<Text size={11} align="right" width={45}>
							{data.name}
						</Text>
					</Row>
					<Section title="職務要約">
						{data.summary.map((paragraph) => (
							<Paragraph>{paragraph}</Paragraph>
						))}
					</Section>
					<Section title="活かせる経験・知識・技術">
						{data.skills.map((skill) => (
							<Paragraph>{`${skill.label}：${skill.values.join(" / ")}`}</Paragraph>
						))}
					</Section>
					<Section title="職務経歴">
						<Text size={12} font="bold">
							{data.company}
						</Text>
						<Paragraph>{`${data.employment} / ${data.role}\n${data.workplace}`}</Paragraph>
						{/* Start the second page with the 2023 modernization work. */}
						<CareerTable items={data.experience.slice(0, 4)} />
					</Section>
				</Stack>
			</Page>
			<Page>
				<Stack gap={6}>
					<Row alignItems="center">
						<Text size={16} font="bold" flex={1}>
							職務経歴書（続き）
						</Text>
						<Text size={11} align="right" width={45}>
							{data.name}
						</Text>
					</Row>
					<Section title="職務経歴（続き）">
						<Text size={12} font="bold">
							{data.company}
						</Text>
						<CareerTable items={data.experience.slice(4)} />
					</Section>
					<Section title="就職前の活動">
						<Paragraph>{data.earlyCareer.period}</Paragraph>
						<Paragraph>{data.earlyCareer.description}</Paragraph>
					</Section>
					<Section title="自己PR">
						<Paragraph>{data.strengths}</Paragraph>
					</Section>
				</Stack>
			</Page>
		</Paper>
	);
}
