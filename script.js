const grid = document.getElementById('grid');
const clearButton = document.getElementById('clear-button');
const changeSizeButton = document.getElementById('change-size');

function getValidSize(defaultSize = 16) {
    let n = Number(prompt('Enter grid size (1–64):', defaultSize));
    while (!(Number.isInteger(n) && n >= 1 && n <= 64)) {
        n = Number(prompt('Invalid input. Please enter an integer between 1 and 64:'));
    }
    return n;
}

let size = getValidSize();

function createGrid(n) {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    for (let i = 0; i < n * n; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.opacity = '0';

        cell.addEventListener('mouseover', () => {
            let opacity = Number(cell.dataset.opacity);

            if (opacity < 1) {
                opacity += 0.1;
                cell.dataset.opacity = opacity;
                cell.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            }
        });

        grid.appendChild(cell);
    }
}

createGrid(size);

clearButton.addEventListener('click', () => {
    createGrid(size);
});

changeSizeButton.addEventListener('click', () => {
    size = getValidSize(size);
    createGrid(size);
});
