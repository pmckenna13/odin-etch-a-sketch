const gridContainer = document.getElementById("gridContainer");
const sizePicker = document.getElementById("sizePicker");
const colorPicker = document.getElementById("colorPicker");
const clearBtn = document.getElementById("clearBtn");
const defaultSize = 16

sizePicker.value = defaultSize;
colorPicker.value = "black";
sizePicker.addEventListener('change', resizeGrid);
clearBtn.addEventListener("click", resetGrid);


var mouseDown = "false";
document.body.onmousedown = function(){
    mouseDown = "true";
}
document.body.onmouseup = function(){
    mouseDown = "false";
}

function resizeGrid(e)
{
    const newSize = e.target.value;
    if(newSize > 0 && newSize <= 100)
    {
        gridContainer.innerHTML="";
        createGrid(e.target.value);
    }
    else{
        alert("Enter a number between 1 and 100!!!");
    }
}

function resetGrid(e)
{
    const gridCells = document.querySelectorAll(".gridCell");
    gridCells.forEach(cell => cell.style.backgroundColor = "white");
}

function changeColor(e){
    if(mouseDown == "true")
    {
        const newColor = document.getElementById("colorPicker").value;
        e.target.style.backgroundColor = newColor;
    }
}

function createGrid(size)
{
    gridContainer.style.setProperty("--numRows",size);
    gridContainer.style.setProperty("--numColumns", size);
    for (i=0; i < (size * size); i++)
    {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", changeColor);
        cell.style.setProperty("user-select", "none");
        gridContainer.appendChild(cell).className = "gridCell";
    }
}

createGrid(defaultSize);

