const SIZE = 100;
const grid = document.getElementById("grid");

function render() {
  for (let i = 0; i < SIZE; i++) {
    const cell = document.createElement("button");
    cell.className = "square";
    cell.addEventListener("click", () => cell.classList.toggle("claimed"));
    grid.appendChild(cell);
  }
}

render();
