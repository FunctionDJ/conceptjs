const body = doc.body

body.c({
  background: hsl(0,0,20)
})

const panel1 = e("fieldset")
root.a(panel1)

panel1.a(e("legend").t("Round").c("color: white"))

for (const i of [
  ...["Pools", "Grand Finals"].map(t => [(value => {
    const r = e("input")
    r.type = "radio"
    r.name = "group1"
    r.v(value)
    return r
  })(t), (t => e("span").c("color: white").t(t))(t)]).flat()
]) {
  panel1.a(i)
}