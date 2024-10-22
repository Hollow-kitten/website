
function makeAGrid(row, column){
    const mainGrid = document.getElementById("grid-button")
    mainGrid.style.display = "grid";
    mainGrid.style.gridTemplateRows = `repeat(${row}, 30px)`
    mainGrid.style.gridTemplateColumns = `repeat(${column}, 30px)`
    mainGrid.style.placeContent = `center`;

    for(r = 0; r < (row*column); r++) {
            const cell = document.createElement("button")
            cell.onclick = () => {buttonIsPressed(cell)}
            cell.style.backgroundColor = "#4b413f";
            cell.style.paddingRight = "5px";
            cell.style.paddingLeft = "5px";
            cell.style.paddingTop = "15px";
            cell.style.paddingBottom = "15px"
            mainGrid.appendChild(cell)
    }
}

function buttonIsPressed(button) {
    button.style.backgroundColor = "white";
}

makeAGrid(25, 25)