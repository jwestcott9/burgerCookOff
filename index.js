let x = 0 
let y = 0 
$("#firstSideAdd").on("click", function(){
    $("#firstSide").append(`
    <img class="mooMoos" src="./assets/cow-icon-19.jpg">`)
    x++
})

$("#secondSideAdd").on("click", function(){
    $("#secondSide").append(`
    <img class="mooMoos" src="./assets/cow-icon-19.jpg">`)
    y++
})

$("#clear").on("click", function(){
    $("#secondSide").empty();
    $("#firstSide").empty();
})

$("#firstSideSubtract").on("click", function(){
    $("#firstSide").empty();
    x--
    for(i= 0; i<x; i++){
    $("#firstSide").append(
        `<img class="mooMoos" src="./assets/cow-icon-19.jpg">`
    )}
})

$("#secondSideSubtract").on("click", function(){
    $("#secondSide").empty();
    y--
    for(i= 0; i<y; i++){
    $("#secondSide").append(
        `<img class="mooMoos" src="./assets/cow-icon-19.jpg">`
    )}
})