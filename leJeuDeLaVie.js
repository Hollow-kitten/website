
const checkList = [-26, -25, -24, -1, 1, 24, 25, 26]
let kohLanta = []
const listToCheck = []

const start = document.getElementById("Start")
const stop = document.getElementById("Stop")
const reset = document.getElementById("Reset")

reset.addEventListener("click", resetcolor)
start.addEventListener("click", startButton)
stop.addEventListener("click", StopButton)



function makeAGrid(row, column){
    const mainGrid = document.getElementById("grid-button")
    mainGrid.style.display = "grid";
    mainGrid.style.gridTemplateRows = `repeat(${row}, 30px)`
    mainGrid.style.gridTemplateColumns = `repeat(${column}, 30px)`
    mainGrid.style.placeContent = `center`;

    for(let r = 0; r < (row*column); r++) {
            const cell = document.createElement("button")
            cell.addEventListener("click", function(){buttonIsPressed(cell)})

            cell.innerHTML = `${r}`
            cell.setAttribute("id", `${r}`)
            cell.style.color = "white";
            cell.style.backgroundColor = "#4b413f";
            cell.style.paddingRight = "5px";
            cell.style.paddingLeft = "5px";
            cell.style.paddingTop = "15px";
            cell.style.paddingBottom = "15px";
            mainGrid.appendChild(cell)
    }
}

function buttonIsPressed(button) {
    if(button.style.backgroundColor === "rgb(75, 65, 63)"){
        button.style.backgroundColor = "white";
        button.setAttribute("class", "aliveCell")
    } else {
        button.style.backgroundColor = "#4b413f";
        button.setAttribute("class", "deadCell")
    }
}


function resetcolor() {
    const allbutton = document.getElementById("grid-button").querySelectorAll("button")
    allbutton.forEach(function(button){
        button.style.backgroundColor = "#4b413f";
    });
    start.style.backgroundColor = "white";
    stop.style.background = "white";
}

function startButton(){
    start.style.backgroundColor = "green";
    stop.style.background = "white";
    generation()
    trueGeneration(listToCheck)
    cycle(kohLanta)
    kohLanta = []
    console.log(kohLanta)
}

function StopButton(){
    start.style.backgroundColor = "white";
    stop.style.background = "red";
}

function checkCell(element){
    if(element === null){
        return false;
    }
    return element.style.backgroundColor === "white"
}

function generation(){
    //fetch all button
    const button = document.querySelectorAll(".aliveCell")
    
    button.forEach(function(element){
            for(const check of checkList){
                // check 8 button around the cell
                let buttonIdCheck = Number(element.id) + check
                const elementIdCheck = document.getElementById(`${buttonIdCheck}`)
                // if element exist push his Id
                if(elementIdCheck !== null) {
                    listToCheck.push(elementIdCheck.id)
                }else{console.log("hors piste")}
        }
            //push the id of the button if the button have no cell alive around him to calcul him
            listToCheck.push(element.id)
    })
}

function trueGeneration(list){
    const listIdToCheck = list.filter(function(item, pos) {return list.indexOf(item) === pos;})

    let cell = 0
    let loop = 0
    
    for(const cellCheck of listIdToCheck){
        for (const check of checkList){
            loop++;
            
            const cellToCheck = document.getElementById((Number(cellCheck) + check))
            const theCell = document.getElementById(Number(cellCheck))
            
            if (checkCell(cellToCheck)) {
                cell++;
            }
            if (loop === checkList.length) {
                const deadOrAlive = cell === 3 || cell === 2 && checkCell(theCell)
                loop = 0
                if (deadOrAlive) {
                    kohLanta.push([theCell.id , "white"])
                    cell = 0
                } else {
                    kohLanta.push([theCell.id , "#4b413f"])
                    cell = 0
                }
            }
        }
    }
}

function cycle(list) {
    for(let t = 0; t < list.length; t++) {
        const idElement = list[t][0]
        const element = document.getElementById(idElement)
        const color = list[t][1]
        if (color === "white"){
            element.setAttribute("class", "aliveCell")
        } else {
            element.setAttribute("class", "deadCell")
        }
        element.style.backgroundColor = color
    }
}

makeAGrid(25,25)
