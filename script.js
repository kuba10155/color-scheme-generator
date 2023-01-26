let colors = []

document.getElementById("get-btn").addEventListener('click', function() {
  const chosenColor = document.getElementById("picker").value.slice(1,7)
  const schemeMode = document.getElementById("mode").value
  fetch(`https://www.thecolorapi.com/scheme/?mode=${schemeMode}&hex=${chosenColor}`)
    .then(res => res.json())
    .then(data => {
      data.colors.forEach(function(color) {
        colors.push(color.hex.value)
      })
      render()
    })
})

function render() {
    document.getElementById("main").innerHTML = renderColor()
    renderColorName()
    colors = []
}

function renderColor() {
  const colorContainerHtml = colors.map(function(color) {
    return `
      <div class="a${color.slice(1,7)} color">
      </div>
      <style>
        .a${color.slice(1,7)} {
          background: ${color};
          display: flex;
        }
      </style>`
  }).join("")
  
  return colorContainerHtml
}

function renderColorName() {
  const colorNameHtml = colors.map(function(color) {
    return `
      <p>${color}</p>
    `
  }).join("")
  document.getElementById("footer").innerHTML = colorNameHtml
}
