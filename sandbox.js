/* // Constantes et variables */

// Déclarer une constante
let n = 2; // nombre let = moins optimal et const = plus optimal
n = "2"; // string

// Accéder à la valeur d'une constante
const sum = 4 + n;

/* Tableaux */
const sneakers = ["nike-pegasus-green-1.jpg"];
/**@type{string[]} */
const students = ["Soni", "Quentin", "Romain", "Terrie", "Léa", "Colyne"];

const romain = students[2]; // resultat:'Romain'

/* Objet */
/**@type{{name: string, age: number}[]} */
const completeStudents = [
    { name: "Soni", age: 23 },
    { name: "Quentin", age: 28 },
    { name: "Romain", age: 18 },
    { name: "Terrie", age: 23 },
    { name: "Léa", age: 20 },
    { name: "Colyne", age: 18 },
]; // ctr+D pour selectionné tous les objet au dessus juste avant l'accolade "{" ensuite fleche de droite pour avoir un curseur devant tous les objets (noms), écrire "name:" puis faire "ctrl+S"

const soni = completeStudents[0]; // resulat :{ name: "Soni", age: 23 }
const soniName = completeStudents[0].name; // resulat :'Soni'
const soniAge = completeStudents[0].age; // resultat: 23

/* Fonctions */
// trois facçon de déclarer
function greetingsOne() {
    console.log("Bonjour !");
}
const greetingsTwo = function () {
    console.log("Bonjour !");
};
const greetingsThree = (student) => {
    // const name = student.name
    // const age = student.age
    const { name, age } = student; // destructuration de l'objet student (un moyen plus rapide de l'écrire)
    console.log(`Bonjour ${name}, tu as ${age} ans !`); // "${name}" permet d'inserer du JS dans un string(ne pas oublier les guimmet sont en ALT GR+7)
}; // trois façon de déclarer/enregistrer une fonction
// console.log est l'equivalent d'int printf en python ou un echo en php

// une seule façon d'appeler
greetingsOne();
greetingsTwo();

greetingsThree(completeStudents[0]);
greetingsThree(completeStudents[1]);
