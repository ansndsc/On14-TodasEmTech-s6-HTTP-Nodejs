// apresente no console o Title, Plot e Awards
// DESAFIO: Apresente Genre e Actors numa lista
//
console.log("Cinemateca");

const filmes = require('./filmes')

for(let i=0; i <= filmes.length-1; i++){
    let akane = filmes[i]
    console.table(akane.Title)
    console.table(akane.Plot)
    console.table(akane.Awards)
    // let listaTipos = akane.types
    // for(let j = 0; j <= listaTipos.length-1; j++){
    //     console.log(listaTipos[j])
    // }
  }

