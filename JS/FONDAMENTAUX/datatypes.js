'use strict';

/*===============================
LES DONNÉES PRIMITIVES
================================*/

// Number
let n = 10;
console.log('typeOf n =', typeof n);

// String
let str = 'bonjour';
console.log('typeOf str =', typeof str);
let maj = str.toUpperCase();
console.log('maj :', maj); // BONJOUR
console.log('str :', str); // bonjour

// Boolean
let bool = false;
console.log('typeOf bool =', typeof bool);

// BigInt
let big = 55555555555513212314231212n;
console.log('typeOf big =', typeof big);

// Symbol
let client1 = Symbol('Hadil');
let client2 = Symbol('Hadil');
console.log(client1 === client2); // false
console.log(client1 == client2); // false

let a = 5;
let b = '5';
console.log(a == b); // true
console.log(a === b); // false

// undefined
let nonDefini = undefined;
console.log('typeOf nonDefini =', typeof nonDefini); // undefined


/*===============================
LES OBJECTS NON PRIMITIVES
================================*/

// null
let age = null;
console.log('typeOf age =', typeof age); // object

// création d'un objet littéral
let customer = {
    firstname: 'John',
    lastname: 'Legend',
    age: 25,
    available: true,
    address: {
        streetName: 'Main Street',
        zipCode: 'the fifth',
        country: 'Los Angeles'
    }
}

// Afficher toutes les propriétés d'un objet dans la console
console.table(customer);

// Accéder à une propriété
console.log('customer.firstname', customer.firstname);

// Modifier une propriété
customer.age = 32;
console.log(customer.age); // 32

// Ajouter une propriété
customer.phoneNumber = '+33654321098';
customer.address.streetNumber = 32;
console.table(customer);

// Supprimer une propriété
delete customer.age;
console.table(customer);

// Geler un objet
Object.freeze(customer);
// customer.age = 32; // interdit d'ajouter une propriété
console.table(customer);
// delete customer.firstname; // impossible
console.table(customer);
customer.address.state = 'California'; // no problem
console.table(customer);

// Sceller un objet
const dog1 = {
    breed: 'chihuahua',
    age: 5,
    vaccinated : true
}

Object.seal(dog1);
dog1.breed = 'bulldog'; // aucun problème
console.table(dog1); 
// delete dog.age; // impossible de supprimer une propriété
console.table(dog1);
// dog1.color = 'yellow';
console.table(dog1); // impossible d'ajouter une propriété

// Copier un objet
const dog2 = dog1; // copie par référence
dog1.age = 10;
console.log('dog1:');
console.table(dog1);

// Copie par valeur
let c = 3;
let d = c;
c = 30;
console.log('d=', d);

// Bien copier un objet
const dog3 = { ...dog1 }; // ... s'appelle the spread operator (opérateur de propagation)
dog1.age = 13;
console.log('dog1:');
console.table(dog1);
console.log('dog3:');
console.table(dog3);

// Destructuring
const phone = {
    brand: 'samsung',
    model: 'SamsungGalaxyA25',
    price: 250,
    guarantee: true
}

let brandName = phone.brand;
let modelName = phone.model;

const { brand, model } = phone;
console.log('brand :', brand);

const { price: phonePrice, model: phoneModel } = phone;
console.log('phonePrice :', phonePrice);