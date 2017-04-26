var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCase = animal.toUpperCase();
var papugiReplaced = text.replace('Papugi', animalUpperCase);
console.log(papugiReplaced.slice(0, papugiReplaced.length/2));