var mouseDown = "false";
document.body.onmousedown = function(){
    mouseDown = "true";
}
document.body.onmouseup = function(){
    mouseDown = "false";
}

function changeColor(e){
    
    e.target.style.backgroundColor = "black";
}

function createGrid(e){
    let size = 16;
    var container = document.createElement("div");
    container.id = "main";
    container.className = "gridContainer";

    for(let i=0; i< size; i++){
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;

        for(let j=0; j < size; j++){
            var column = document.createElement("div");
            column.className = "column";
            column.id = "column" + j;
            column.addEventListener("mouseover", changeColor);
            row.appendChild(column);
            
        }

        container.appendChild(row);
    }

    e.appendChild(container);

}

createGrid(document.body);

