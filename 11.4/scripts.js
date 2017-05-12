function Telefon(marka, cena, kolor, procesor) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
    this.procesor = procesor;
}

Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ", jego procesor to " + this.procesor + ".");
}

var galaxyS6 = new Telefon('Samsung', 2500, 'czarny', 'Exynos 8895');
var iPhone6S = new Telefon("Apple", 2250, "srebrny", 'A9');
var onePlusOne = new Telefon("OnePlus", 1700, "biały", 'Snapdragon 835');

galaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();