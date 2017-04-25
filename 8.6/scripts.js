//Instrukcje warunkowe

var a = prompt('Podaj wartośc a');
var b = prompt('Podaj wartosc b');
var value = (a * a) + (2 * a * b) - (b * b);
console.log('Wynik wynosi:' + value);

if (value > 0) {
    console.log('wynik dodatni')
} else if(value<0) {
    console.log('wynik ujemny')
} else {
    console.log('wynik równy 0')
}