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