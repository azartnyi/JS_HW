let minAge = 18;
let maxAge = 60;
let age = prompt('Enter you age, please');
if (age < minAge) {
    alert("You don't have access cause your age is " + `${age}.` + " It's less then " + `${minAge}`);
} 
else if (age >= minAge && age <= maxAge) {
    alert("WellCum!");
}
else if (age > maxAge) {
    alert("Keep calm and look Culture channel");
}
else {
    alert("Technical work, guys");
}

