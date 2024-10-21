
const trucDeTest = ["chat", "potichat", "chaton", "cat"]

function makeAGrid(row, column){
    const mainGrid = document.getElementById("grid-button")
    mainGrid.style.display = "grid";
    mainGrid.style.gridTemplateRows = `repeat(${row}, 1fr)`
    mainGrid.style.gridTemplateColumns = `repeat(${column}, 1fr)`

    for(r = 0; r < (row*column); r++) {
            const cell = document.createElement("div")
            cell.style.border = "solid";
            cell.style.backgroundColor = "#dac1bc";
            cell.style.paddingRight = "20px";
            cell.style.paddingLeft = "20px";
            cell.style.paddingTop = "20px";
            //cell.innerHTML = "truc"
            mainGrid.appendChild(cell)
    }
}
makeAGrid(100,100)