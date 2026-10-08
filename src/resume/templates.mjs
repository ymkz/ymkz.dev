const entities = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
};
const escapeHtml = (value) =>
	String(value).replace(/[&<>"']/g, (char) => entities[char]);
const paragraphs = (items) =>
	items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");

// Fixed-width rows avoid Forme's automatic CJK table sizing.
function experience(items) {
	return `<div class="experience" role="table" aria-label="職務経歴">
		<div class="experience-row experience-header" role="row">
			<div class="experience-period" role="columnheader">期間</div>
			<div class="experience-description" role="columnheader">業務内容</div>
		</div>
		${items
			.map(
				(item) => `<div class="experience-row" role="row">
			<div class="experience-period" role="cell">${escapeHtml(item.period)}</div>
			<div class="experience-description" role="cell">${paragraphs(item.description)}</div>
		</div>`,
			)
			.join("")}
	</div>`;
}

export function resume(data) {
	const [year, month] = data.employment.split(" ")[0].split("/");
	return `<main>
		<h1>履歴書</h1>
		<div class="identity">
			<div class="details">
				<div class="name"><p>氏名</p><strong>${escapeHtml(data.name)}</strong></div>
				<table><tbody>
					${[
						["生年月日", data.birthday],
						["現住所", data.location],
						["Web", data.website],
						["職種", data.role],
					]
						.map(
							([label, value]) =>
								`<tr><td class="label">${label}</td><td>${escapeHtml(value)}</td></tr>`,
						)
						.join("")}
				</tbody></table>
			</div>
			<div class="photo"><p>写真<br>縦40mm<br>横30mm</p></div>
		</div>
		<table>
			<thead><tr><th class="year">年</th><th class="month">月</th><th>学歴・職歴</th></tr></thead>
			<tbody>
				<tr><td></td><td></td><td>学歴</td></tr>
				${data.education.map((item) => `<tr><td>${escapeHtml(item.period.split("/")[0])}</td><td>${escapeHtml(item.period.split("/")[1])}</td><td>${escapeHtml(item.description)}</td></tr>`).join("")}
				<tr><td></td><td></td><td>職歴</td></tr>
				<tr><td>${escapeHtml(year)}</td><td>${escapeHtml(month)}</td><td>${escapeHtml(data.company)} 入社</td></tr>
				<tr><td></td><td></td><td>${escapeHtml(data.employment)}<br>${escapeHtml(data.role)}として勤務</td></tr>
				<tr><td></td><td></td><td>現在に至る（詳細は別紙職務経歴書に記載）</td></tr>
				<tr><td></td><td></td><td>以上</td></tr>
			</tbody>
		</table>
		<table><thead><tr><th>免許・資格</th></tr></thead><tbody>
			${data.qualifications.map((item) => `<tr><td>${escapeHtml(item)}</td></tr>`).join("")}
		</tbody></table>
		<section class="frame"><h2>自己PR</h2><p>${escapeHtml(data.strengths)}</p></section>
		<section class="frame"><h2>受賞歴</h2><p>${escapeHtml(data.award)}</p></section>
	</main>`;
}

export function career(data) {
	return `<main class="career">
		<div class="career-title"><h1>職務経歴書</h1><p>${escapeHtml(data.name)}</p></div>
		<h2>職務要約</h2>${paragraphs(data.summary)}
		<h2>活かせる経験・知識・技術</h2>
		${paragraphs(data.skills.map((skill) => `${skill.label}：${skill.values.join(" / ")}`))}
		<h2>職務経歴</h2><h3>${escapeHtml(data.company)}</h3>
		<p>${escapeHtml(data.employment)} / ${escapeHtml(data.role)}<br>${escapeHtml(data.workplace)}</p>
		${experience(data.experience.slice(0, 4))}
		<section class="continued">
			<div class="career-title"><h1>職務経歴書（続き）</h1><p>${escapeHtml(data.name)}</p></div>
			${data.experience.length > 4 ? `<h2>職務経歴（続き）</h2><h3>${escapeHtml(data.company)}</h3>${experience(data.experience.slice(4))}` : ""}
			<h2>就職前の活動</h2><p>${escapeHtml(data.earlyCareer.period)}</p><p>${escapeHtml(data.earlyCareer.description)}</p>
			<h2>自己PR</h2><p>${escapeHtml(data.strengths)}</p>
		</section>
	</main>`;
}
