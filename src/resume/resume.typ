#import "common.typ": data, paper, ruled
#show: body => paper("履歴書", body)

#text(size: 22pt, weight: "bold", tracking: 0.2em)[履歴書]
#v(6mm)
#grid(
  columns: (1fr, 30mm),
  gutter: 8mm,
  [
    #set block(above: 0pt, below: 0pt)
    #block(width: 100%, stroke: (top: 0.2mm, left: 0.2mm, right: 0.2mm), inset: (x: 3mm, y: 2mm))[
      #text(size: 9pt)[氏名]
      #v(2mm)
      #text(size: 20pt, weight: "bold", data.name)
    ]
    #table(
      columns: (25mm, 1fr), stroke: 0.2mm, inset: 2mm,
      [生年月日], data.birthday,
      [現住所], data.location,
      [Web], data.website,
      [職種], data.role,
    )
  ],
  rect(width: 30mm, height: 40mm, stroke: 0.2mm)[
    #align(center + horizon)[
      #text(size: 8pt)[写真\ \ 縦40mm\ 横30mm]
    ]
  ],
)
#v(5mm)
#ruled((18mm, 12mm, 1fr), ("年", "月", "学歴・職歴"), (
  ("", "", "学歴"),
  ..data.education.map(item => (..item.period.split("/"), item.description)),
  ("", "", "職歴"),
  (..data.employment.split(" ").first().split("/"), data.company + " 入社"),
  ("", "", data.employment + "\n" + data.role + "として勤務"),
  ("", "", "現在に至る（詳細は別紙職務経歴書に記載）"),
  ("", "", "以上"),
))
#v(5mm)
#ruled((1fr,), ("免許・資格",), data.qualifications.map(item => (item,)))
#v(5mm)
#ruled((1fr,), ("自己PR",), ((data.strengths,),))
#v(5mm)
#ruled((1fr,), ("受賞歴",), ((data.award,),))
