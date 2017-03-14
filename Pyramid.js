var slider=document.getElementById("pyramidRange");
var HeightNum=document.getElementById("PyramidHeight");
var PyramidContainer=document.getElementById("pyramid");
var BrickCharSelect=document.getElementById("BrickCharSelect");

OnInput() //make first pyramid

BrickCharSelect.addEventListener("change",OnInput);
slider.addEventListener("input",OnInput);


function RemovePyramid() {
    PyramidContainer.innerHTML=""
}
function OnInput(){
    HeightNum.innerHTML=slider.value;
    RemovePyramid();
    makePyramid(slider.value,BrickCharSelect.value,"&nbsp");
}

function makePyramid(height,BrickChar,SpaceChar) {

    for (var row = 0; row < height; row++) {
        var rowStr = "";
        var bricks = row + 2;
        var spaces = height - row - 1;

        for (var i = 0; i < spaces; i++) {
            rowStr += SpaceChar;
        }
        for (var i = 0; i < bricks; i++) {
            rowStr += BrickChar;
        }

            PyramidElem=document.createElement("p");
            PyramidElem.innerHTML=rowStr;
            PyramidContainer.appendChild(PyramidElem);

        }

}
