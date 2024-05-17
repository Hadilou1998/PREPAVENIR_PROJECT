'use strict';

/*===============================
LES BOUCLES
================================*/

/*-------------------------------
Boucle FOR
-------------------------------*/

// Un nombre N pair si N%2 = 0
// Afficher tous les nombres pairsentre 30 et 56 non inclus avec une boucle for

for (let i = 30; i < 56; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 30; i < 56; i++) {
    (i % 2 === 0) ? console.log(i) : null;
};

// Un nombre N pair si N%2 = 0
// Afficher tous les nombres pairsentre 30 et 56 non inclus avec une boucle for
// Affichage de la sortie attendue : 30-32-34- ..... -54

let n = 0;
let pattern = '-';

for (let i = 30; i < 56; i++) {
    if (i % 2 === 0) {
        if (i === 54) {
            pattern = '-';  
        }
        n = n + i + pattern;
    }
};

console.log(n);


/*===============================
BOUCLE WHILE
================================*/

// Afficher tous les nombres divisibles par 4 compris entre 0 et 26

let w = 0;

while (w >= 0 && w <= 26) {
    if (w % 4 === 0) {
        console.log('w=', w);     
    } w++;
}

/*-------------------------------
Boucle DO...WHILE
-------------------------------*/
    
// Afficher tous les nombres divisibles par 4 compris entre 0 et 26
    
w = 0;
    
do {
    if(w % 4 === 0) {
        console.log('w=', w);
    } w++;
} while (w >= 0 && w <= 26);

/*-------------------------------
mot clé continue
-------------------------------*/

// Afficher tous les nombres pairs entre 0 et 50 multiples de 9 en utilisant le mot clé "continue" : 0, 18, 36
// résultat attendu : 0, 18, 36

for (let i = 0; i < 50; i++) {
    if (i % 9 === 0 && i % 2 === 0) {
        console.log(i);   
    } else {
        continue;
    }
}

/*-------------------------------
mot clé "break"
-------------------------------*/

// Parcourir tous les nombres de 0 à 100 et afficher le premier nombre pair plus grand que 13 en utilisant le mot clé "break"
// résultat attendu : 14

let i = 14;

for (let i = 0; i < 100; i++) {
    if (i === 14) {
        break;  
    }
    i = i * 1;
}

console.log(i);

// Portée de bloc

// var : portée globale

var fruit = 'kiwi';
couleur = 'rouge';

if (fruit === 'kiwi') {
    var couleur = 'verte';    
}

console.log('couleur :', couleur); // verte

// let : portée globale

let fruta = 'kiwi';
let color = 'rouge';

if (fruta === 'kiwi') {
    let color= 'verte';    
}

console.log('couleur :', color); // rouge