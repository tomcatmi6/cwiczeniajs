var userName = prompt("Jak masz na imię?");
var userSurname = prompt("Jak masz na nazwisko?");
var userGender = prompt("Jesteś mężczyzną czy kobietą?");
var userHeight = prompt("Ile masz wzrostu?");
var userWeight = prompt("Ile ważysz?");
alert("Witaj "+ userName +" "+ userSurname);
alert("Jesteś " + userGender + " więc Twoje BMI wynosi: " + userWeight/Math.pow((userHeight/100), 2));
alert("Sprawdź koniecznie czy nie masz otyłości!"); 