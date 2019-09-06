HTMLElement.prototype.a = function(node) {
  this.appendChild(node)
}

HTMLElement.prototype.c = function(css) {
  if (typeof css === "string") {
    this.style.cssText = css
  } else {
    this.style.cssText = getCSSText(css)
  }

  return this
}

HTMLElement.prototype.t = function(text) {
  this.innerText = text
  return this
}

HTMLElement.prototype.r = function(run) {
  this.onclick = run
  return this
}

HTMLElement.prototype.v = function(value) {
  this.value = value
  return this
}

const getCSSText = obj => {
  let result = ""
  
  for (const key in obj) {
    result += `${key}: ${obj[key]};`
  }

  return result
}

window.doc = document

window.root = document.createElement("div")

window.e = (name = "div") => document.createElement(name)

window.doc = document

window.hsl = (a,b,c) => `hsl(${a},${b}%,${c}%)`

document.body.prepend(window.root)
