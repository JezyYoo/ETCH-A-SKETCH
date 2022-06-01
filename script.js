let container = document.querySelector('.container');
let buttonCellChange = document.querySelector('.changeCellCount');
let cleanButton = document.querySelector('.clean');
let tempCell;
let containerSize = container.clientWidth;
console.log(containerSize)

// container.style.width = '480px';
// container.style.height = '480px';

let hovering = function(event){
    let r,g,b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    console.log(`rgb(${r},${b},${b})`)
    // event.target.style.backgroundColor = "black";
    event.target.style.backgroundColor = `rgb(${r},${b},${b})`;
}
let generateField = (count)=>{
    let cellSize = containerSize/count;
    console.log(cellSize)
    for (let y= 0; y < count; y++) {
        for (let x = 0; x < count; x++) {
            tempCell = document.createElement('div');
            tempCell.classList.add('cell');
            tempCell.addEventListener('mouseover',hovering)
            tempCell.style.width = `${cellSize}px`;
            tempCell.style.height = `${cellSize}px`;
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

    if(parseFloat(count)>100)
    {
        alert("Enter the number less than 100")
    }
    else if(!isNaN(parseFloat(count)))
    {
        cleanField();
        generateField(count)
    }
    else
    {
        alert("Enter only numbers!")
    }
})

cleanButton.addEventListener('click',()=>{
    container.childNodes.forEach(node => node.style.backgroundColor = 'white')
})

generateField(16)



