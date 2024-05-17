// 1000 € en janvier 2024 -> ? € fin 2050 ? avec un taux de 3% par an
// epargne(somme initiale, nombre d'années, taux) => résultat


function myFunction(capital, annee, taux = 3) {  
    let t = 1 + taux / 100;
    return capital * t ** annee;
};

console.log(myFunction(1000, 6));