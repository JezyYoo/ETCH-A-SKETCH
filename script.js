let container = document.querySelector('.container');
let buttonCellChange = document.querySelector('.changeCellCount');
let tempCell;

let hovering = function(event){
    event.target.style.backgroundColor = "black";
}
let generateField = (count)=>{
    for (let y= 0; y < count; y++) {
        for (let x = 0; x < count; x++) {
            tempCell = document.createElement('div');
            tempCell.classList.add('cell');
            tempCell.addEventListener('mouseover',hovering)
            container.appendChild(tempCell);
            
        }
    
    }
}

let cleanField = ()=>{
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
      }
}

buttonCellChange.addEventListener('click', ()=>{    
    let count = prompt('Enter new count of cell per side');
    console.log(!isNaN(parseFloat(count)))
    if(!isNaN(parseFloat(count)))
    {
        cleanField();
        generateField(count)
    }
    else
    {
        alert("Enter only numbers!")
    }
})

generateField(16)



