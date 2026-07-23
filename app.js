const SIZE = 100;
const grid = document.getElementById("grid");
const count = document.getElementById("count");
const bar = document.getElementById("bar");

function render() {
  for (let i = 0; i < SIZE; i++) {
    const cell = document.createElement("button");
    cell.className = "square";
    cell.addEventListener("click", () => {
      cell.classList.toggle("claimed");
      update();
    });
    grid.appendChild(cell);
  }
}

function update() {
  const claimed = document.querySelectorAll(".square.claimed").length;
  count.textContent = claimed;
  bar.style.width = (claimed / SIZE * 100) + "%";
}

document.getElementById("reset").addEventListener("click", () => {
  document.querySelectorAll(".square.claimed").forEach((s) => s.classList.remove("claimed"));
  update();
});

render();
update();
