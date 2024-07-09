let parentContainer = document.getElementById("parent-container");

for (let i = 0; i < 40; i++) {
  let code = randomColor();
  let palette = document.createElement("div");
  palette.className = "palette";
  palette.style.backgroundColor = "#" + code;
  palette.innerText = "#" + code;
  parentContainer.appendChild(palette);
  palette.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${code}`);
  });
}

function randomColor() {
  const hexChar = "0123456789ABCDEF";
  const codeLength = 6;
  let hexCode = "";
  for (let i = 0; i < codeLength; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    hexCode = hexCode + hexChar.charAt(randomIndex);
  }
  return hexCode;
}
