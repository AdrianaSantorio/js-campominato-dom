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

//funzione play
function play () {
    //sovrascrivere il bottone
    button.innerText='RICOMINCIA';
    
    //pulire la griglia
    grid.innerHTML='';

    //recuperare il valore di difficoltà
    const difficulty = document.getElementById('difficulty').value;
    console.log(difficulty);
    
    //ricavare dal valore di difficoltà il numero di celle
    let cellsTotal;
    let rowsAndColumns;

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

    //numero file/colonne

    rowsAndColumns = Math.sqrt(cellsTotal);
    console.log(rowsAndColumns);

    //preparare la variabile che tiene il punteggio
    let points= 0;

    //ricavare il numero massimo di punti ottenibili
    const maxPoints = cellsTotal - bombsTotal;
    console.log(maxPoints);
    
    //funzione getrandomnumber
    function getRandomNumber (min, max) {
       return Math.floor(Math.random() * (max  - min + 1) + min);
    }

    //funzione generate bombs
    function generateBombs (totalbombs, totalnumber) {
        const bombs = [];
        while (bombs.length < totalbombs) {
            const bomb = getRandomNumber(1, totalnumber);
            if (!bombs.includes(bomb)) {
                bombs.push(bomb);
            }
        }
        return bombs;
    }

    //funzione createCell

    function generateCell () {
        const cell = document.createElement('div');
        cell.className = 'cell'; 
        return cell;
    }
    
    //funzione generateGrid

    function generateGrid (totalnumber, cellsPerRow, bombs) {
        const cell = generateCell();
        
        for (let i = 1; i < totalnumber + 1; i++) {
            cell.id = i;
            cell.innerText = i;
            cell.style.length
            cell.addEventListener('click'{

            });
            grid.appendChild(cell);
        }
        
    }
    
    //*esecuzione

    //generare i numeri delle bombe
    const bombs = generateBombs(bombsTotal, cellsTotal);
    console.table(bombs);

    //generare la griglia
    

};

//eventlistener - play

button.addEventListener('click', play);

