function createPad(numCells) {
  for (let i = 0; i < (numCells * numCells); i++) {
    let newDiv = document.createElement('div');
    gridContainer.appendChild(newDiv);
    newDiv.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = `rgb(${pickRandColor()}, ${pickRandColor()}, ${pickRandColor()})`;
    });
  }
}

function pickRandColor() {
  return Math.floor(Math.random() * 1000) % 255;
}

function resetGrid() {
  let newGridSize = parseInt(prompt('How big would you like the new grid to be? (0-100)'));

  document.documentElement.style.setProperty("--gridSize", newGridSize);

  while (gridContainer.firstChild) {
    gridContainer.firstChild.remove();
  }
  createPad(newGridSize);
}

const gridContainer = document.getElementById('sketch-container');
const btn = document.getElementById('clear-grid');
btn.addEventListener('click', resetGrid);

let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let gridSize = parseInt(htmlStyles.getPropertyValue("--gridSize"));

createPad(gridSize);