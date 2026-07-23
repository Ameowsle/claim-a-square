const SIZE = 100;
const grid = document.getElementById("grid");

function render() {
  for (let i = 0; i < SIZE; i++) {
    const cell = document.createElement("button");
    cell.className = "square";
    grid.appendChild(cell);
  }
}

render();
