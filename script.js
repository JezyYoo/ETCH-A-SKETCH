let container = document.querySelector('.container');;
let tempCell;

let Hovering = function(event){
    event.target.style.backgroundColor = "black";
}

for (let y= 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
        tempCell = document.createElement('div');
        tempCell.classList.add('cell');
        tempCell.addEventListener('mouseover',Hovering)
        container.appendChild(tempCell);
        
    }

}

