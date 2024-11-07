
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
        button.setAttribute("class", "AliveCell")
    } else {
        button.style.backgroundColor = "#4b413f";
        button.setAttribute("class", "DeadCell")
    }
}


function resetcolor() {
    const allbutton = document.getElementById("grid-button").querySelectorAll("button")
    allbutton.forEach(function(button){
        button.style.backgroundColor = "#4b413f";
    });
    start.style.backgroundColor = "White";
    stop.style.background = "White";
}

function startButton(){
    start.style.backgroundColor = "Green";
    stop.style.background = "White";
    generation()
    trueGeneration(listToCheck)
    cycle(kohLanta)
    kohLanta = []
    console.log(kohLanta)
}

function StopButton(){
    start.style.backgroundColor = "White";
    stop.style.background = "Red";
}

function checkCell(element){
    if(element === null){
        return false;
    }
    return element.style.backgroundColor === "white"
}

// check les cellule a coter de la case avec une boucle for qui fait id - le -26 -25 -24 -1 +1 +26 +25 +24 + appele de la fonction pour savoir si une celule morte ou vivantes

function generation(){
    const button = document.querySelectorAll(".AliveCell")
    
    button.forEach(function(element){
        
            for(const check of checkList){
                
                let buttonIdCheck = Number(element.id) + check
                const elementIdCheck = document.getElementById(`${buttonIdCheck}`)

                if(elementIdCheck !== null) {
                    listToCheck.push(elementIdCheck.id)
                }else{console.log("hors piste")}
        }
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
                    kohLanta.push([cellCheck, "White"])
                    cell = 0
                } else {
                    kohLanta.push([cellCheck, "#4b413f"])
                    cell = 0
                }
                //de base il est pas la ct pour test
                if (cell === 0){
                    console.log("c quoi ca")S
                }
            }
        }
    }
}

function cycle(list) {
    for(let t = 0; t < list.length; t++) {
        const idElement = list[t][0]
        const element = document.getElementById(idElement)
        element.style.backgroundColor = `${list[t][1]}`
    }
}

makeAGrid(25,25)
