function createPad(numCells) {
  for (let i = 0; i < (numCells * numCells); i++) {
    let newDiv = document.createElement('div');
    gridContainer.appendChild(newDiv);
    newDiv.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = darkenColor(e.target.style.backgroundColor);
    });
  }
}

function darkenColor(currentColor) {
  if (!currentColor) {
    console.log('no color');
    return 'rgba(0, 0, 0, 0.1)';
  }

  let alphaVal = currentColor.split('');

  if (parseInt(alphaVal[16]) >= 9) {
    alphaVal[14] = 1;
    alphaVal[16] = 0;
  } else {
    alphaVal[16] = parseInt(alphaVal[16]) + 1;
  }

  return alphaVal.join('');
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