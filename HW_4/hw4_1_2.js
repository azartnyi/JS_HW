//Task 1

let minAge = 18;
let maxAge = 60;
let age = '58';
if (age < minAge) {
    console.log("You don't have access cause your age is " + `${age}.` + " It's less then " + `${minAge}`);
} 
else if (age >= minAge && age <= maxAge) {
    console.log("WellCum!");
}
else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
}
else {
    console.log("Technical work, guys");
}

//Task 2
switch (true) {
case age < minAge: {
    console.log("You don't have access cause your age is " + `${age}.` + " It's less then " + `${minAge}`);
    break;
}
case age >= minAge && age <= maxAge: {
    console.log("WellCum!");
    break;
}
case age > maxAge: {
    console.log("Keep calm and look Culture channel");
    break;
}
default:
    console.log("Technical work, guys");
}