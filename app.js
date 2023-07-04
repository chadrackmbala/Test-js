const sentence = 'salut';

console.log(sentence.toUpperCase());
console.log(Number.isInteger(76));

console.log(34);
let firstVariable = '34';

console.log(Number.isInteger(firstVariable));

console.log('firstVariable'.startsWith('f'));

console.log('firstVariable'.toUpperCase());
console.log('Salut'.length);

console.log(Math.ceil(56.7));

console.log('Bonjour Papa et maman');

console.log('Salut' + ' ' + 'ma chérie !');

//demo

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:

levelUp += 5;


//Concatenation de chaîne de caractère et une variable

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);


// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:'+ levelUp);
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//typeof

let maVariable = 'Bonjour'
console.log(typeof maVariable);
console.log(maVariable=3);

//Test pour .floor et .ciel

let decimal = 3.376657;
console.log(decimal);
console.log(fahrenheit = Math.floor(decimal));

console.log(fahrenheit = Math.ceil(decimal));

//Initialisation de la constante kelvin à 293
const kelvin = 0;

//soustraction de 273 au dégré kelvin pour la conversion car celcius est 273 inférizur à kelvin
let celsius = kelvin - 273;

//Equation pour calculer Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

console.log(fahrenheit)

//Vérification de la réponse
console.log(`Fahrenheit égale à ${fahrenheit}.`);

//Arrondissment de la température en enlevant automatiquement le chiffre apr-s la virgule
fahrenheit = Math.floor(fahrenheit);

//Interpolation de chaîne de caractère avec la temperature.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


//Initialisation de mon age

const myAge = 25.6;

//Initialisation de la variable ci-dessous à 2
let earlyYears = 2;

// Multiplication par l'utilisation de la variable d'affectation par 10.2
earlyYears *= 10.5;
console.log(earlyYears);

//Soustraction de 2 dans myAge

let laterYears = myAge - 2;
console.log(laterYears);

//Multiplicatio de laterYears par 4 en utilisant l'opérateur d'affectation

laterYears *=4;
console.log(laterYears);

//Addition de laterYears et earlyYears

let myAgeInDogYears = laterYears + earlyYears;
console.log(myAgeInDogYears);

//Utilisation de .toLowerCase pour renvoyer notre texte en minuscule

let myName = 'Chadrack'
console.log(myName.toLowerCase());