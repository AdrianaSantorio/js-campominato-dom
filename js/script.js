/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
*/

//elementi recuperati
const button = document.getElementById('play');
const grid = document.getElementById('grid');
const bombsTotal = 16;




//funzioni
function play () {
    button.innerText='RICOMINCIA';
    grid.innerHTML='';
    const difficulty = document.getElementById('difficulty').value;
    console.log(difficulty);
    let cellsTotal;

    switch (difficulty) {
        case 'easy':
            cellsTotal = 100;
            break;
        case 'hard':
            cellsTotal = 49;
            break;
        case 'normal':
            cellsTotal = 81;
    }
    console.log(cellsTotal);

    let points= 0;

    const maxPoints = cellsTotal - bombsTotal;
    console.log(maxPoints);
         
}

//eventlistener - play

button.addEventListener('click', play);

