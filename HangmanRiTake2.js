var strawberry = "strawberry";
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function guessSection() {
    for (var s=0; s<strawberry.length; s++) {
        var emoticon = document.createElement("i");
        emoticon.classList.add("fa-solid");
        emoticon.classList.add("fa-face-kiss-wink-heart");
        emoticon.classList.add("heartWRP");
        emoticon.id = "kissy" + s;

        var word = document.createElement("span");
        word.classList.add("hide");
        word.classList.add("heartWRP");
        word.innerHTML = strawberry[s];
        word.id = "letter" + s;

        var guessSct = document.getElementById("guessSection");
        guessSct.appendChild(emoticon);
        guessSct.appendChild(word);
    }

}

function wordSection() {
    var alphaIndex = 0;
    for (var r=0; r<4; r++) {
        var row = document.createElement("div");
        row.classList.add("alphaRow");
        
        for (var c=0; c<7; c++) {
            if (alphaIndex<26) {
            var column = document.createElement("span");
            column.classList.add("letterWRP");
            column.innerHTML = alphabet[alphaIndex];
            column.setAttribute("onclick", "pressedAlpha('"+ alphabet[alphaIndex] +"')")
            alphaIndex = alphaIndex + 1;
            row.appendChild(column);
            }
        }

        var wordSct = document.getElementById("wordSection");
        wordSct.appendChild(row);
    }
}

function pressedAlpha(letter) {
    //alert("you clicked " + letter);
    var winner = true;

    for (var c=0; c<strawberry.length; c++) {
        var clicked = strawberry[c];
        if (clicked==letter){
            var emoticon = document.getElementById("kissy" + c);
            emoticon.classList.add("hide");
            var word = document.getElementById("letter" + c);
            word.classList.remove("hide");
        }

        var final = document.getElementById("letter" + c);
        if (final.classList.contains("hide")) {
            winner = false;
        }
    }

    /*
    var winner = true;
    for (var c=0; c<strawberry.length; c++) {
        var final = document.getElementById("letter" + c);
        if (final.classList.contains("hide")) {
            winner = false;
        }
    } 
    */

    if (winner) {
        alert("WINNER");
    }
}

window.addEventListener("load", function(){
    guessSection();
    wordSection();
})