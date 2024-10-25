
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
    } else {
        button.style.backgroundColor = "#4b413f";
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
}

function StopButton(){
    start.style.backgroundColor = "White";
    stop.style.background = "Red";
}

function checkCell(element){
    return element.style.backgroundColor === "white"
}

// check les cellule a coter de la case avec une boucle for qui fait id - le -26 -25 -24 -1 +1 +26 +25 +24 + appele de la fonction pour savoir si une celule morte ou vivantes

function generation(){
    const button = document.getElementById("grid-button").querySelectorAll("button")
    const checkList = [-26, -25, -24, -1, 1, 24, 25, 26]
    
    button.forEach(function(element){

       let buttonId = element.id 
            for(check of checkList){
                let buttonIdCheck = Number(element.id) + check
                const elementIdCheck = document.getElementById(`${buttonIdCheck}`)
                
                if(elementIdCheck !== null){
                    if(checkCell(elementIdCheck)){
                        console.log(elementIdCheck, buttonId)
                    }
                } else{console.log("hors piste")}
        }
    })
}

makeAGrid(25,25)
