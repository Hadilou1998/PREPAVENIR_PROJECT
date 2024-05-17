'use strict';

/*===============================
LES TABLEAUX
================================*/

const animals = [];
const vegetables = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑', '🍆', '🌶️', '🧄'];
const fruits = ['🍏', '🍌', '🍒', '🍎', '🥝', '🍐', '🍓', '🍉', '🍇', '🍍', '🥥'];
const sweets = ['🍩', '🍪', '🧁', '🍰', '🍦', '🎂'];
let domestic = ['🐶', '🐱', '🐷', '🐮', '🐭', '🐹', '🐔', '', '', ''];
let wild = ['🦁', '🐯', '🦊', '🦝', '🐻', '🐼', '🦆', '🦢', '🐸', '', '', ''];
let jungle = ['🙉', '🦁', '🐯', '🐘', '🦜', '🐍', '', '', ''];
let sea = ['🐋', '🐬', '🐟', '🐠', '🦈', '🐙'];
let insects = ['🐛', '🐜', '🐞', '🕷️', '🦂', '🦋', '🐝', '🦗', '', ''];


// Ajouter un élément
animals.push('🐶');
console.table(animals);

// Retirer le premier élément d'un tableau
vegetables.shift();
console.table(vegetables);

// map (méthode immuable = ne modifie pas le tableau sur lequel elle est appliquée)
const squares = ['🟥', '🟨', '🟩'];
// résultat attendu : ['🟥🔵', '🟨🔵', '🟩🔵'];

// coup de pouce : includes()

const newSquares = squares.map(m => m + '🔵' );
console.table(squares);
console.table(newSquares);

// FILTER (méthode immuable = ne modifie pas le tableau sur lequel elle est appliquée)
// résultat attendu : ['🍏', '🍒🍏', '🍎🍏'];
const frutas = ['🍏', '🍌', '🍒🍏', '🍎🍏', '🥝', '🍐', '🍓'];

const numFrutas = frutas.filter(function (fruit) {
    return fruit.includes('🍏');
})

const numFrutas2 = frutas.filter(f => f.includes('🍏'));

console.table(numFrutas2);
