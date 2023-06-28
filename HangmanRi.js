//GLOBAL VARIABLES
var fruit = "durian";
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function loadIcons() {
    for (var s=0; s<fruit.length; s++) {

        var kissyIcon = document.createElement("i");
        kissyIcon.classList.add("fa-solid");
        kissyIcon.classList.add("fa-face-kiss-wink-heart");
        kissyIcon.classList.add("heartWRP");
        kissyIcon.id = "kissyFace" + s;
        
        var letter = document.createElement("span");
        letter.classList.add("hide");
        letter.classList.add("heartWRP");
        letter.classList.add("neonText");
        letter.innerHTML = fruit[s];
        letter.id = "letters" + s;

        var guessSection = document.getElementById("guessSection");
        guessSection.appendChild(kissyIcon);
        guessSection.appendChild(letter);
    }
}

function loadAlpha() {
    var alphaIndex = 0;

    for (var r=0; r<4; r++) {
        var row = document.createElement("div");
        row.classList.add("alphaRow");

        for (var c=0; c<7; c++) {
            if (alphaIndex<26) {
                var column = document.createElement("span");
                column.classList.add("letterWRP");
                column.innerHTML = alphabet[alphaIndex];
                column.setAttribute("onclick", "button('" + alphabet[alphaIndex] + "')");
                alphaIndex = alphaIndex + 1;
                
                row.appendChild(column);
            }  
        }
        
        var wordSection = document.getElementById("wordSection");
        wordSection.appendChild(row);
    }
}

//EVALUATOR

function button(letter) {
    //alert("You Clicked On " + letter);
    for (var l=0; l<fruit.length; l++) {
        var holder = fruit[l];
        if(holder == letter) {
            var emoticon = document.getElementById("kissyFace" + l);
            emoticon.classList.add("hide");
            var strawberry = document.getElementById("letters" + l);
            strawberry.classList.remove("hide");
        }
    }

    var isWin = true;
    for (var l=0; l<fruit.length; l++) {
        var strawberry = document.getElementById("letters" + l);
        if(strawberry.classList.contains("hide")) {
            isWin = false;
        }
    }

    /* SHOWS BEFORE GAME ENDS, CREATE SEPERATE BANNER INSTEAD 
    if (isWin) {
        alert("WIN");
    }
    */

    if (isWin) {
        var banner = document.getElementById("banner");
        banner.classList.remove("hide");
    }
}


window.addEventListener("load", function(){
    loadIcons();
    loadAlpha();
})