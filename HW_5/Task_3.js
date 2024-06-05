//Task 3
// 1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants
const word = "example";
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
        vowelCount++;
    } else {
        consonantCount++;
    }
}

console.log(`${word} contains ${vowelCount} vowels and ${consonantCount} consonants`);