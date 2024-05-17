window.localStorage.setItem('user', 'Jason');
window.localStorage.setItem('user2', 'Anais');

// récupérer une clé
const jason = window.localStorage.getItem('user');
console.log(jason);

// Supprimer une clé
localStorage.removeItem('user2');

// Purger le localStorage
localStorage.clear;

// Création d'un objet customer1
const customer = {
    firstname: "Joséphine",
    age: 27
}

// Transformer l'objet en chaine
const customerStr = JSON.stringify(customerObj);

// On place cet objet "chainifié" dans le localStorage
localStorage.setItem('customer1', customerStr);