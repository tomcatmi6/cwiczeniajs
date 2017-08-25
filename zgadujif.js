alert("Postaraj sie odgadnac liczbe od 0-100.");
numProper = Math.floor((Math.random() * 100) + 1);

var num = prompt("Twoja liczba?");
console.log(numProper);
// if (num < 0 || num > 10) {
//     alert("Wpisz poprawny przedział (0-10).");
// }
// else if (num<numProper) {
//     alert("Liczba jest za mała, podaj wyższą.");
// }
// else if (num>numProper) {
//     alert("Liczba jest za duża, podaj mniejszą.");
// }
// else  {
//     alert("Bingo! Trafiles liczbę!");
// }

while(numProper!=num) {
    if (num < 0 || num > 100) {
        alert("Wpisz poprawny przedział (0-10).");
    }
    else if (num<numProper) {
        alert("Liczba jest za mała, podaj wyższą.");
    }
    else if (num>numProper) {
        alert("Liczba jest za duża, podaj mniejszą.");
    }
    else  {
        alert("Bingo! Trafiles liczbę!");
    }
    var num = prompt("Twoja liczba?");
    
    
}
alert( "Udało się! Gratuluję!");