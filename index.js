let x = 0 
let y = 0 
let size1 = "";
let size2 = "";

$("#firstSideAdd").on("click", function(){
    if(x<20){
        size1 = "mooMoos"
    $("#firstSide").append(`
    <img class="mooMoos" src="./assets/cow-icon-19.jpg">
    `)
    }
    if(x===20){
        $(".mooMoos").addClass("mooMoosMedium");

    }

    if(x>20 && x<48){
        size1 = "mooMoosMedium"
        $("#firstSide").append(`
    <img class="mooMoosMedium" src="./assets/cow-icon-19.jpg">`)
    } 
    if(x===48){
        $(".mooMoosMedium").addClass("mooMoosSmall");
    }
    if(x>48){
        size1 = "mooMoosSmall"
        $("#firstSide").append(`
        <img class="mooMoosSmall" src="./assets/cow-icon-19.jpg">`)
        
    }
    x++
    $("#count1").text(x);
})

$("#secondSideAdd").on("click", function(){
    if(y<20){
        size2 = "mooMoos";
        $("#secondSide").append(`
        <img class="mooMoos1" src="./assets/cow-icon-19.jpg">
        `)
        }
        if(y===20){
            $(".mooMoos1").addClass("mooMoosMedium1");
        }
    
        if(y>20 && y<48){
            size2 = "mooMoosMedium"
            $("#secondSide").append(`
        <img class="mooMoosMedium1" src="./assets/cow-icon-19.jpg">`)
        } 
        if(y===48){
            $(".mooMoosMedium1").addClass("mooMoosSmall1");
        }
        if(y>48){
            size2 = "mooMoosSmall"
            $("#secondSide").append(`
            <img class="mooMoosSmall1" src="./assets/cow-icon-19.jpg">`)
            
        }
        y++
        $("#count2").text(y);
})

$("#clear").on("click", function(){
    $("#secondSide").empty();
    $("#firstSide").empty();
    x = 0;
    y= 0;
})

$("#firstSideSubtract").on("click", function(){
    resize();
    $("#firstSide").empty();
    x--
    $("#count1").text(x);
    for(i= 0; i<x; i++){
    $("#firstSide").append(
        `<img class=${size1} src="./assets/cow-icon-19.jpg">`
    )}
})

$("#secondSideSubtract").on("click", function(){
    resize();
    $("#secondSide").empty();
    y--
    $("#count2").text(y);
    for(i= 0; i<y; i++){
    $("#secondSide").append(
        `<img class=${size2} src="./assets/cow-icon-19.jpg">`
    )}
})

function resize(){
    if(x<=20){
        size1 = "mooMoos"
    }
    else if (x>20&&x<48){
        size1 = "mooMoosMedium"
    }
    else 
    size1 = "mooMoosSmall"

    if(y<=20){
        size2 = "mooMoos1"
    }
    else if (y>20&&y<48){
        size2 = "mooMoosMedium1"
    }
    else 
    size2 = "mooMoosSmall1"
}