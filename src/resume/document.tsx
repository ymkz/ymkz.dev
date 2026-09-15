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

export const author = "山下和也";
const selfPR =
	"運用から始まり、開発、設計やSREまで幅広く業務をこなしてきました。キャリアのなかで長く主担当をしている安全対策では将来を見据えた言語スイッチやデプロイ環境のモダン化を推進しました。また業務システムという役割からCSなど社内のユーザーと綿密にコミュニケーションをとり課題の解決、生産性の向上といった日々の改善に努めています。";

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

function Paper({ children }: { children: PdfJsxChild }) {
	return (
		<Document size="A4" margin={{ x: 15, top: 15, bottom: 15 }} font="regular">
			<Footer>
				<Row>
					<Text size={8} flex={1}>
						{author}
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

export function Resume() {
	return (
		<Paper>
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
								{author}
							</Text>
							<RuledTable
								head={["項目", "内容"]}
								showHead={false}
								columnWeights={[25, 117]}
								rows={[
									["生年月日", "1996/03/20"],
									["現住所", "東京都北区"],
									["Web", "https://ymkz.dev"],
									["職種", "ソフトウェアエンジニア"],
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
							[
								"2014",
								"04",
								"島根大学 総合理工学部 数理・情報システム学科 入学",
							],
							[
								"2018",
								"03",
								"島根大学 総合理工学部 数理・情報システム学科 卒業",
							],
							["2018", "04", "島根大学大学院 自然科学研究科 理工学専攻 入学"],
							[
								"2020",
								"03",
								"島根大学大学院 自然科学研究科 理工学専攻 修士課程修了（修士（工学））",
							],
							["", "", "職歴"],
							["2020", "04", "LINEヤフー株式会社（旧ヤフー株式会社） 入社"],
							[
								"",
								"",
								"2020/04 ～ 現在（正社員）\nソフトウェアエンジニアとして勤務",
							],
							["", "", "現在に至る（詳細は別紙職務経歴書に記載）"],
							["", "", "以上"],
						]}
					/>
					<RuledTable head={["免許・資格"]} rows={[["基本情報技術者"]]} />
					<RuledTable head={["自己PR"]} rows={[[selfPR]]} />
					<RuledTable
						head={["受賞歴"]}
						rows={[
							[
								"2016/08　第4回学生スマートフォンアプリコンテストにてインプリメンテーション賞受賞（BLEを用いたiOSアプリ開発）",
							],
						]}
					/>
				</Stack>
			</Page>
		</Paper>
	);
}

function CareerTable({ rows }: { rows: string[][] }) {
	return (
		<RuledTable
			head={["期間", "業務内容"]}
			columnWeights={[35, 145]}
			fontSize={10.5}
			bodyStyles={{ padding: { x: 3, y: 3.5 }, lineHeight: 1.55 }}
			rows={rows}
		/>
	);
}

export function CareerHistory() {
	return (
		<Paper>
			<Page>
				<Stack gap={6}>
					<Row alignItems="center">
						<Text size={20} font="bold" flex={1}>
							職務経歴書
						</Text>
						<Text size={11} align="right" width={45}>
							{author}
						</Text>
					</Row>
					<Section title="職務要約">
						<Paragraph>
							約6年間にわたり、LINEヤフー株式会社にてソフトウェアエンジニアとして勤務。Yahoo!ショッピングの運用開発に従事。カート・注文のようなバックエンドシステムからLPを構築・表示するCMSシステムまで幅広く携わる。また安全対策システムの運用開発に従事し、機械化の推進をしたり、SREとして事故対応の訓練の実施などの活動も行った。
						</Paragraph>
						<Paragraph>
							在学時に約3年間、リモートでベンチャー企業のWebサービス開発にフロントエンドエンジニアとして参画。React/Reduxによる新機能の開発や開発環境の刷新、ライブラリの更新、コード品質向上のためのESLint導入などの業務を経験。
						</Paragraph>
					</Section>
					<Section title="活かせる経験・知識・技術">
						<Paragraph>
							言語・ランタイム：Node.js / TypeScript / Java / HTML/CSS
						</Paragraph>
						<Paragraph>
							フレームワーク：React / Next.js / Hono / Spring Boot
						</Paragraph>
					</Section>
					<Section title="職務経歴">
						<Text size={12} font="bold">
							LINEヤフー株式会社（旧ヤフー株式会社）
						</Text>
						<Paragraph>
							{
								"2020/04 ～ 現在（正社員） / ソフトウェアエンジニア\nハイブリッド勤務（2025/03までフルリモート勤務）"
							}
						</Paragraph>
						{/* Start the second page with the 2023 modernization work. */}
						<CareerTable
							rows={[
								[
									"2020/04 ～",
									"新卒で入社。ヤフーショッピングのカートシステムの運用チームへ配属。\nカートの運用・安全対策の運用、負荷試験の準備・実施。",
								],
								[
									"2020/12 ～",
									"SHPカートの刷新・言語スイッチの開発へ参画。\nNode.jsでBFF（GraphQL）の開発。",
								],
								[
									"2022/02 ～",
									"SHP安全対策システムの基盤移行を担当。物理サーバからPaaSへの移行。",
								],
								[
									"2022/10 ～",
									"カートチームからSREチームへ異動。組織内のリリース予定を可視化するツールなどの開発を行う。\n引き続き安全対策システムの運用・開発を担当。",
								],
							]}
						/>
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
							{author}
						</Text>
					</Row>
					<Section title="職務経歴（続き）">
						<Text size={12} font="bold">
							LINEヤフー株式会社（旧ヤフー株式会社）
						</Text>
						<CareerTable
							rows={[
								[
									"2023/04 ～",
									"SHP安全対策システムの刷新・言語スイッチを計画・推進。複数のコンポーネントの刷新開発をリード。",
								],
								[
									"2024/10 ～",
									"システム基盤・コードベースのモダン化をここまででほぼ完了。安全対策の課題解決のため機械学習を用いた判定システムの導入案件へ主担当として参画。\n大規模障害へ備えるための組織全体での訓練を計画・実施するWGへ参画・活動。",
								],
								[
									"2025/04 ～ 2025/09",
									"SHP安全対策システムの運用・開発。注文システムのビジネス開発チームに異動。\n事故対策委員としてプロダクションの事故対策や横展開を担当。",
								],
								[
									"2025/10 ～",
									"プロモーションディビジョンへ異動。引き続き安全対策システムの運用開発は行いつつ、LPシステムの運用改善やお気に入りシステムのビジネス開発に参画。\nコスト削減のためログの整理・見直しやコンポーネントの整理等を実施。",
								],
							]}
						/>
					</Section>
					<Section title="就職前の活動">
						<Paragraph>在学中（約3年間）</Paragraph>
						<Paragraph>
							知人からの紹介でベンチャー企業と業務委託契約を結び、ウェブサービスのフロントエンド開発に参画。React/Reduxを中心としたWebアプリケーション開発を行い、機能開発だけでなくFluxからReduxへのアーキテクチャ移行やESLint整備などを実施。
						</Paragraph>
					</Section>
					<Section title="自己PR">
						<Paragraph>{selfPR}</Paragraph>
					</Section>
				</Stack>
			</Page>
		</Paper>
	);
}
