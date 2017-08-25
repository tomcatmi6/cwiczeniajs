alert("Postaraj sie odgadnac liczbe od 0-10.");
numProper=3;
var num = prompt("Twoja liczba?");
if (num < 0 || num > 10) {
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
