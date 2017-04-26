//Funkcja

function getTriangleArea(a, h) {
    if(a>0 && h>0) {
        return (a*h)/2;
    } else {
        console.log('Nieprawidłowe dane')
    }
}
console.log(getTriangleArea(10,6));

var firstTriangleArea = getTriangleArea(10,15);
console.log('Pole pierwszego trójkąta wynosi: ' + firstTriangleArea);

var secondTriangleArea = getTriangleArea(2.5,3.14);
console.log('Pole drugiego trójkąta wynosi: ' + secondTriangleArea);

var thirdTriangleArea = getTriangleArea(256.78,16.2);
console.log('Pole trzeciego trójkąta wynosi: ' + thirdTriangleArea);