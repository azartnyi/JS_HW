// // 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

function getUniquePizzas(myPizzas, competitorPizzas) {
  const uniquePizzas = myPizzas.filter(pizza => !competitorPizzas.includes(pizza));
  
  if (uniquePizzas.length === 0) {
    return null;
  }
  
  return uniquePizzas;
}

const myPizzas = ['Margarita', 'Peperoni', 'MegaPizza', 'hawai', 'Diablo'];
const uniquePizzas = getUniquePizzas(myPizzas, competitorPizzas);

console.log(uniquePizzas);
  
// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
//   Если таких слов несколько - выводит их все.

function findLongestWords(sentence) {
    let words = sentence.split(' ');
    
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    
    let longestWords = [];
    for (let word of words) {
        if (word.length === maxLength) {
            longestWords.push(word);
        }
    }
    
    console.log(longestWords.join(', '));
}

findLongestWords("Написать функцию которая принимает предложение ");


// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

function removeDuplicates(arr) {

    const uniqueSet = new Set(arr);
    
    const uniqueArray = [...uniqueSet];
    
    return uniqueArray;
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function isPalindrome(word) {
    
    const normalWord = word.toLowerCase();
    
    const reversedWord = normalWord.split('').reverse().join('');
    
    return normalWord === reversedWord;
}

// Пример использования функции
const word1 = "peep";
const word2 = "world";

console.log(`${word1} is palindrome:`, isPalindrome(word1)); // true
console.log(`${word2} is palindrome:`, isPalindrome(word2)); // false