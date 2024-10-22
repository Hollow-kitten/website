
const trucDeTest = ["chat", "potichat", "chaton", "cat"]

function makeAGrid(row, column){
    const mainGrid = document.getElementById("grid-button")
    mainGrid.style.display = "grid";
    mainGrid.style.gridTemplateRows = `repeat(${row}, 30px)`
    mainGrid.style.gridTemplateColumns = `repeat(${column}, 30px)`
    mainGrid.style.placeContent = `center`;

    for(r = 0; r < (row*column); r++) {
            const cell = document.createElement("div")
            cell.style.border = "solid";
            cell.style.backgroundColor = "Grey";
            cell.style.paddingRight = "5px";
            cell.style.paddingLeft = "5px";
            cell.style.paddingTop = "15px";
            cell.style.paddingBottom = "15px"
            mainGrid.appendChild(cell)
    }
}
makeAGrid(25, 25)