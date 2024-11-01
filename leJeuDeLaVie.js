
const kohLanta = []

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

    for(r = 0; r < (row*column); r++) {
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
    trueGeneration(kohLanta)
}

function StopButton(){
    start.style.backgroundColor = "White";
    stop.style.background = "Red";
}

function checkCell(element){
    return element.style.backgroundColor === "white"
}

function generation(){
    const button = document.getElementById("grid-button").querySelectorAll("button")
    const checkList = [-26, -25, -24, -1, 1, 24, 25, 26]
    
    button.forEach(function(element){
        
        let counts = {
            cell: 0,
            loop: 0
        }
            for(const check of checkList){
                counts.loop++;
                let buttonIdCheck = Number(element.id) + check
                //console.log(buttonIdCheck)
                const elementIdCheck = document.getElementById(`${buttonIdCheck}`)
                //console.log(elementIdCheck)
                const buttonId = document.getElementById(element.id)

                if(elementIdCheck !== null){
                    if(checkCell(elementIdCheck)) {
                        counts.cell++;
                        if (counts.loop === checkList.length) {
                            
                            const DeadOrAlive = counts.cell === 3
                                || (counts.cell === 2 && checkCell(buttonId))
                            //console.log(DeadOrAlive)
                            if (DeadOrAlive){
                                kohLanta.push([buttonId, "white"])
                                buttonId.style.backgroundColor = "White"
                            } else {
                                kohLanta.push([buttonId, "#4b413f"])
                                buttonId.style.backgroundColor = "#4b413f"
                            }
                            console.log(`Cellule ${element.id} a ${counts.cell} voisins vivants`);
                        }
                    }
                } else{console.log("hors piste")}
        }
    })
}

function trueGeneration(list){
    console.log(list)
    list.filter()
}

makeAGrid(25,25)
