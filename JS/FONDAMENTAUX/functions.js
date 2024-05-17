// Déclarer une fonction

/*===============================
LES FONCTIONS
================================*/

// Déclarer une fonction
function add(a, b) {
    return a + b;
}

const sum = add(2, 5);
console.log('Somme = ', sum);

// Expression de fonction
const multiply = function (a, b) {
    return a * b;
}

const rest =  multiply(2, 5);

console.log('Produit = ', rest);

// Fonction fléchée
let sayHello = () => {
    console.log('Hello');
}

sayHello();

// 1 param
let parity = (n) => {
    const message = n % 2 === 0 ? 'nombre pair' : 'nombre impair';
    console.log(message);
};

parity(25);

// 2 param
let myFunction = (x, y) => {
    return x + y;
}

let result = myFunction(13, 12);
console.log(result); // 25

/*-------------------------------
FONCTION LIFE
-------------------------------*/

// Immediately Invoked Function Expression

(function () {
    console.log('Welcome !');
})();

/*-------------------------------
Fonction récursive
-------------------------------*/

function factorielle(n) {
    if (n === 0) {
        return 1;       
    }
    let factorial = n * factorielle(n - 1);
    return factorial;
}

console.log(factorielle(5));

/*-------------------------------
Fonction callback (fonction de rappel)
-------------------------------*/

function calcul(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

const add2 = calcul(5, 4, add);
const product2 = calcul(5, 4, multiply);

console.log(add2, product2);