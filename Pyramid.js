var slider=document.getElementById("pyramidRange");
var HeightNum=document.getElementById("PyramidHeight");


slider.addEventListener("input",function(event) {
    HeightNum.innerHTML=slider.value
})

function makePyramid(height,char) {
    for (var row=0;row<height;row++) {
        var blocks=row + 2
        var spaces=height - row - 1

        rowStr=""
        for (spaces;spaces>0;spaces-=1) {
            rowStr+="."
        }

        for (blocks;blocks>0;blocks-=1) {
            rowStr+=char
        }

    }
}
