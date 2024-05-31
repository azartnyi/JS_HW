//Task 1
//1. Создать переменную "minAge" и присвоить ей значение 18
//2. Создать переменную "maxAge" и присвоить ей значение 60
//3. Создать переменную "age", в которую вы будете вводить возраст при выполнении программы
//4. Создать if в котором будете проверять весь код переменной age со следующими условиями:
//  - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
// - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
//  - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
//  - Иначе выводите "Technical work".
//5. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61

const minAge = 18;
const maxAge = 60;
let age = "авы";
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
//1. Реализовать Task 1 через switch
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
//2. Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
//И если он не number - кидалась ошибка в консоль.
//Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"

if (typeof age !== 'number') {
	console.log('Error, it`s not a number')
}
else if (age < minAge) {
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
//3.
//Преобразовать Task 2 - 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
//  преобразовываясь в number

if (isNaN(age)) {
	console.log('Error, it`s not a number');
}
else if (age < minAge) {
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
