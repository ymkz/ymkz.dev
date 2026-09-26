#import "common.typ": data, paper, section, ruled
#show: body => paper("職務経歴書", body)
#set text(size: 10.5pt)

#let title(continued: false) = grid(
  columns: (1fr, auto),
  text(size: if continued { 16pt } else { 20pt }, weight: "bold", if continued { "職務経歴書（続き）" } else { "職務経歴書" }),
  align(bottom, data.name),
)
#let experience(items) = ruled(
  (35mm, 1fr), ("期間", "業務内容"),
  items.map(item => (item.period, item.description.join("\n"))),
  size: 10.5pt, inset: (x: 3mm, y: 3.5mm),
)

#title()
#section("職務要約", [
  #for paragraph in data.summary [#paragraph #parbreak()]
])
#section("活かせる経験・知識・技術", [
  #for skill in data.skills [#(skill.label + "：" + skill.values.join(" / ")) #parbreak()]
])
#section("職務経歴", [
  #text(size: 12pt, weight: "bold", data.company)
  #v(2mm)
  #(data.employment + " / " + data.role)\
  #data.workplace
  #v(3mm)
  #experience(data.experience.slice(0, calc.min(4, data.experience.len())))
])
#pagebreak()
#title(continued: true)
#if data.experience.len() > 4 {
  section("職務経歴（続き）", [
    #text(size: 12pt, weight: "bold", data.company)
    #v(3mm)
    #experience(data.experience.slice(4))
  ])
}
#section("就職前の活動", [
  #data.earlyCareer.period
  #v(2mm)
  #data.earlyCareer.description
])
#section("自己PR")[#data.strengths]
