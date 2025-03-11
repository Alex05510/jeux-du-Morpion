
let cases = document.querySelectorAll(".case");
let startButton = document.getElementById("start");
let currentPlayer = "X";
//let Player2 = "O"
let playGame = false;
//ajoute l'evenement de demarage avec le click/start
startButton.addEventListener("click", function() {
    currentPlayer = "X";// le premier joueur sera X
    playGame = true;
    cases.forEach(function(caseElement) {
        caseElement.innerText = "";// vide les case quand je reclick sur start
    });
});

cases.forEach(function(caseElement) {
    caseElement.addEventListener("click", function(){
        if (caseElement.textContent === "" && playGame) {
            caseElement.textContent = currentPlayer;
            if (checkWin()) { // verifie si le joueur actuel a gagner ou non 
                alert(currentPlayer + " a gagner");
                playGame = false;
            }else if (isDraw()) { // verifie si c'est un match nul 
                alert("match nul");
                playGame = false;
            }else if ( currentPlayer === "X") {
                currentPlayer = "O";
            }else {
                currentPlayer = "X";
            };
        };
    });
});

function checkWin() {
    let winCombinations = [ // les combinaisons possible du jeux 
        [0, 1, 2], // pour la 1ere ligne
        [3, 4, 5], // pour la 2eme ligne
        [6, 7, 8], // pour la 3eme ligne
        [0, 3, 6], //pour la 1ere colonne
        [1, 4, 7], // pour la 2eme colonne
        [2, 5, 8], // pour la 3eme colonne
        [0, 4, 8], // pour la 1ere diagonale
        [2, 4, 6], // pour la 2eme diagonale
    ];
    for (let i = 0; i < winCombinations.length; i++) {
        const [a, b, c] = winCombinations[i];
        if (cases[a].textContent === currentPlayer && cases[b].textContent === currentPlayer && cases[c].textContent === currentPlayer) {
            return true;
        }
    }
    return false;
}

function isDraw() {
    for (let i = 0; i < cases.length; i++) {
        if (cases[i].textContent === "") {
            return false;
        }
    }
    return true;
}

let boutonRegles = document.getElementById("boutonRegles");

boutonRegles.addEventListener("click", function() {
        alert("Le jeu de Morpion se joue sur une grille de 3x3 cases. Deux joueurs s'affrontent, l'un joue avec des X et l'autre avec des O. Le but est d'aligner trois de ses symboles horizontalement, verticalement et en diagonal");
    });



        
       
