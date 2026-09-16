#let data = json(bytes(sys.inputs.data))

#let paper(title, body) = {
  set document(title: data.name + "_" + title, author: data.name)
  set text(font: "BIZ UDPGothic", size: 10pt, lang: "ja")
  set par(leading: 0.55em)
  set page(
    paper: "a4",
    margin: 15mm,
    footer: context {
      set text(size: 8pt)
      grid(columns: (1fr, auto), data.name, counter(page).display("1 / 1", both: true))
    },
  )
  body
}

#let section(title, body) = block(above: 5mm, below: 0pt)[
  #text(size: 11pt, weight: "bold", title)
  #v(1mm)
  #line(length: 100%, stroke: 0.25mm)
  #v(2mm)
  #body
]

#let ruled(columns, headers, rows, size: 9.5pt, inset: 2mm) = {
  set text(size: size)
  table(
    columns: columns,
    stroke: 0.2mm,
    inset: inset,
    table.header(..headers.map(title => table.cell(fill: rgb("f2f2f2"), align: center, text(weight: "bold", title)))),
    ..rows.flatten(),
  )
}
