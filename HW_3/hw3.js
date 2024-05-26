//Task 1

let item_1 = 5, item_2 = 3;
console.log(item_1);
console.log(item_2);

let item_3;
item_3 = item_1 + item_2;
console.log(item_3);

let item_4 = "Yolochka";
console.log(item_4);

console.log(item_3 + item_4);

console.log(item_3 * item_4);

let item_5 = item_3;

let item_6 = 15; 
let item_6_type = typeof item_6;
console.log("item_6 == " + item_6, "\n" + "item_6_type == " + item_6_type)

let item_7 = String(item_6)
let item_7_type = typeof item_7
console.log("item_7 == " + item_7, "\n" + "item_7_type == " + item_7_type)
console.log("---------------------------------------")


//Task 2*
//Уравнение 1 (x2+6x+9=0)
const a_1 = 1;
const b_1 = 6;
const c_1 = 9;

//b^2-4ac
let discr_1 = (b_1**2) - (4 * a_1 * c_1)
//(-b+-sqrt(disct_1))/(2*a)
let sqrt_1_1 = ((-b_1 + Math.sqrt(discr_1)) / (2 * a_1))
console.log("Ответ к уравнению 1: " + sqrt_1_1)


//Уравнение 2 (x2+4x+5=0)
const a_2 = 1;
const b_2 = 4;
const c_2 = -5;

let discr_2 = (b_2**2) - (4 * a_2 * c_2)
//(-b+-sqrt(disct_2))/(2*a)
let sqrt_2_1 = ((-b_2 + Math.sqrt(discr_2)) / (2 * a_2))
let sqrt_2_2 = ((-b_2 - Math.sqrt(discr_2)) / (2 * a_2))
console.log("Ответ к уравнению 2: " + sqrt_2_1 + " и " + sqrt_2_2)

//Task 3**
console.log("---------------------------------------")
let n = String(Math.floor(Math.random() * 9) + 1)
let nn = n+n;
let nnn = n+n+n;
console.log("Рандомное число = " + n)
console.log( Number(n) + Number(nn) + Number(nnn))
