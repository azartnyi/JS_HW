//Task 2
//1. Написать скрипт, переводящий количество байт в нужные единицы
let bytes = 1000000000000;

const KB = 1024;
const MB = KB * 1024;
const GB = MB * 1024;
const TB = GB * 1024;

let result;

if (bytes >= TB) {
  result = (bytes / TB).toFixed(1) + 'TB';
} else if (bytes >= GB) {
  result = (bytes / GB).toFixed(1) + 'GB';
} else if (bytes >= MB) {
  result = (bytes / MB).toFixed(1) + ' MB';
} else if (bytes >= KB) {
  result = (bytes / KB).toFixed(1) + ' KB';
} else {
  result = bytes + ' bytes';
}

console.log(result);


//2. Сделать из "*" в консоли равнобедренный треугольник и ромб

let height = 5;
for (let i = 0; i < height; i++) {
    let line = '';
    for (let j = 0; j < height - i - 1; j++) {
        line += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        line += '*';
    }
    console.log(line);
}

let mid = Math.floor(height / 2);

for (let i = 0; i <= mid; i++) {
    let line = '';
    for (let j = 0; j < mid - i; j++) {
        line += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        line += '*';
    }
    console.log(line);
}

for (let i = mid - 1; i >= 0; i--) {
    let line = '';
    for (let j = 0; j < mid - i; j++) {
        line += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        line += '*';
    }
    console.log(line);
}

// 3.  Вам нужно вывести в консоль числа от 1 до 100.
//     Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
//     Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
//     Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
//     Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} - делится и на 3 и на 5`);
  } else if (i % 3 === 0) {
    console.log(`${i} - делится на 3`);
  } else if (i % 5 === 0) {
    console.log(`${i} - делится на 5`);
  } else {
    console.log(i);
  }
}

// 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
//   у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer

let sentence = "I am super engineer";

sentence = sentence.toLowerCase();

let words = sentence.split(' ');

for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

let camelCaseSentence = words.join('');

console.log(camelCaseSentence);