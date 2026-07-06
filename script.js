let tab_in_game = [
    [0,2,0,2,0,2,0,2],
    [2,0,2,0,2,0,2,0],
    [0,2,0,2,0,2,0,2],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
]

tab_coord = [
  ["a8","b8","c8","d8","e8","f8","g8","h8"],
  ["a7","b7","c7","d7","e7","f7","g7","h7"],
  ["a6","b6","c6","d6","e6","f6","g6","h6"],
  ["a5","b5","c5","d5","e5","f5","g5","h5"],
  ["a4","b4","c4","d4","e4","f4","g4","h4"],
  ["a3","b3","c3","d3","e3","f3","g3","h3"],
  ["a2","b2","c2","d2","e2","f2","g2","h2"],
  ["a1","b1","c1","d1","e1","f1","g1","h1"]
];

const casas = {};

const letras = ["a","b","c","d","e","f","g","h"];

for(let i = 1; i <= 8; i++){
    for(let j = 0; j < 8; j++){
        let id = letras[j] + i;
        casas[id] = document.getElementById(id);
    }
}

const pecas = {};
  let pec = "p";
  let pecn = 0;

function desenhar_pecas(){
for(let i = 0; i < tab_in_game.length; i++) {
    for(let j = 0; j < tab_in_game.length; j++)
        if(tab_in_game[i][j] === 2 && pecn < 24){
            let pecan = pec + pecn;
            let coor = tab_coord[i][j];
            pecas[pecan] = document.createElement('div');
            pecas[pecan].classList.add('blackpiece');
            casas[coor].appendChild(pecas[pecan]);
            pecn++;
        } else {
            if(tab_in_game[i][j] === 1 && pecn < 24){
                let pecan = pec + pecn;
                let coor = tab_coord[i][j];
                pecas[pecan] = document.createElement('div');
                pecas[pecan].classList.add('whitepiece');
                casas[coor].appendChild(pecas[pecan]);
                pecn++;
            } else{
                if(tab_in_game[i][j] === 4 && pecn < 24){
                    let pecan = pec + pecn;
                    let coor = tab_coord[i][j];
                    pecas[pecan] = document.createElement('div');
                    pecas[pecan].classList.add('blackqueen');
                    casas[coor].appendChild(pecas[pecan]);
                    pecn++;
                } else{
                    if(tab_in_game[i][j] === 3 && pecn < 24){
                        let pecan = pec + pecn;
                        let coor = tab_coord[i][j];
                        pecas[pecan] = document.createElement('div');
                        pecas[pecan].classList.add('whitequeen');
                        casas[coor].appendChild(pecas[pecan]);
                        pecn++;
                    }
                }
            }
        }
    }
}

function apagar_pecas(){
  pecn = 0;
    
for(let i = 0; i < tab_in_game.length; i++) {
    for(let j = 0; j < tab_in_game.length; j++)
        if(tab_in_game[i][j] === 2){
            let pecan = pec + pecn;
            let coor = tab_coord[i][j];
            casas[coor].removeChild(pecas[pecan]);
            pecn++;
        } else {
            if(tab_in_game[i][j] === 1){
                let pecan = pec + pecn;
                let coor = tab_coord[i][j];
                casas[coor].removeChild(pecas[pecan]);
                pecn++;
            } else{
                if(tab_in_game[i][j] === 4){
                    let pecan = pec + pecn;
                    let coor = tab_coord[i][j];
                    casas[coor].removeChild(pecas[pecan]);
                    pecn++;
                } else{
                    if(tab_in_game[i][j] === 3){
                        let pecan = pec + pecn;
                        let coor = tab_coord[i][j];
                        casas[coor].removeChild(pecas[pecan]);
                        pecn++;
                    }
                }
            }
        }
    }
    pecn = 0;
}
