const colElem = document.querySelector(".col")
console.log(colElem);
const btnElem =document.querySelector(".btn")
let clickedCells = [];


for (let i = 1; i <= 100; i++) {
    console.log(i);
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerText = i;
    newCell.addEventListener ("click", handleCellClick);
    colElem.append(newCell)
}

const bombs = generateBombs(100);
console.log(bombs);
const maxclick = 100 - 16

// livello medium 

// for (let j = 1; j <= 81; j++) {
//     console.log(j);
//     const newCellMedium = document.createElement("div");
//     newCellMedium.classList.add("cell");
//     newCellMedium.innerHTML = j;
//     newCellMedium.addEventListener ("click", handleCellClick, typeOfLevel);
//     colElem.append(newCellMedium)
// }

btnElem.addEventListener ("click",function() {
    colElem.classList.remove("d-none")
})

function handleCellClick() {
    console.log(this.innerText);

    const cellNumber = parseInt(this.innerText)
    if (bombs.includes(cellNumber)) {
        this.classList.add("red");
        console.log("hai perso");
    }else{
        this.classList.add("lightblue")
    }

}

/**
 * Description
 * @param {any} min
 * @param {any} max
 * @returns {any}
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * Description
 * @param {number} max
 * @returns {array}
 */
function generateBombs(max) {
    const result = [];
    while (result.length < 16 ) {
        const rndNumber = getRndInteger(1, max);
        if (!result.includes(rndNumber)) {
            result.push(rndNumber)
        } 
            
     }
     return result;
}

