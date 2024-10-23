
function makeAGrid(row, column){
    const mainGrid = document.getElementById("grid-button")
    mainGrid.style.display = "grid";
    mainGrid.style.gridTemplateRows = `repeat(${row}, 30px)`
    mainGrid.style.gridTemplateColumns = `repeat(${column}, 30px)`
    mainGrid.style.placeContent = `center`;

    for(r = 0; r < (row*column); r++) {
            const cell = document.createElement("button")
            cell.addEventListener("click", function(){buttonIsPressed(cell)})
            cell.style.backgroundColor = "#4b413f";
            cell.style.paddingRight = "5px";
            cell.style.paddingLeft = "5px";
            cell.style.paddingTop = "15px";
            cell.style.paddingBottom = "15px"
            mainGrid.appendChild(cell)
    }
}

function buttonIsPressed(button) {
    if(button.style.backgroundColor === "rgb(75, 65, 63)"){
        button.style.backgroundColor = "white";
    } else {
        button.style.backgroundColor = "#4b413f";
    }
}

const start = document.getElementById("Start")
const stop = document.getElementById("Stop")
const reset = document.getElementById("Reset")

reset.addEventListener("click", resetcolor)

function resetcolor() {
    const allbutton = document.getElementById("grid-button").querySelectorAll("button")
    allbutton.forEach( function(button){
        button.style.backgroundColor = "#4b413f";
    });
}

makeAGrid(25, 25)