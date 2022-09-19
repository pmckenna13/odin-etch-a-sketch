const gridContainer = document.getElementById("gridContainer");
const sizePicker = document.getElementById("sizePicker");
const gridSize = sizePicker.value;
sizePicker.addEventListener('change', resetGrid);


var mouseDown = "false";
document.body.onmousedown = function(){
    mouseDown = "true";
}
document.body.onmouseup = function(){
    mouseDown = "false";
}

function resetGrid(e)
{
    gridContainer.innerHTML="";
    createGrid(e.target.value);
}

function changeColor(e){
    const newColor = document.getElementById("colorPicker").value;
    e.target.style.backgroundColor = newColor;
}

function createGrid(size)
{
    gridContainer.style.setProperty("--numRows",size);
    gridContainer.style.setProperty("--numColumns", size);
    for (i=0; i < (size * size); i++)
    {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(cell).className = "gridCell";
    }
}

createGrid(gridSize);

