const myName = prompt("Dimmi come ti chiami");

const mySurname = prompt("Dimmi il tuo cognome");

const myColor = prompt("Dimmi il tuo colore preferito");

const annoCorrente = 23;

const myPassowrd = myName + mySurname + myColor + annoCorrente;

document.getElementById('password').innerHTML = 'La tua Password è: ' + myName + mySurname + myColor + annoCorrente;

//document.getElementById('password').innerHTML = `La tua Password è: ${myName}${mySurname}${myColor}${annoCorrente}`; altro modo per lo stesso risultato