//Tablice

var maleNames = ['Kacper', 'Paweł', 'Kamil', 'Adam', 'Piotr', 'Maciek'];
var femaleNames = ['Ania', 'Zosia', 'Kasia', 'Maja', 'Asia', 'Henia'];


var allNames = maleNames.concat(femaleNames);
var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
} else {
    console.log('Podane imie znajduje sie juz w tablicy');
}
