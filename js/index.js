let a = 10;
let b = 20;
let sum = a * b;
console.log(sum);

let c = 56;
let d = 7;
console.log(c/d)

let e = 15;
let f = 20;
console.log(e + f);

let val1 = 11;
let val2 = true;
let val3 = 'java script';
let val4 = '100';
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(typeof val1);
console.log(typeof val2);
console.log(typeof val3);
console.log(typeof val4);

let num = 1;
console.log(num)
num += 11;
console.log(num)
num -= 11;
console.log(num)
num *= 11;
console.log(num)
num /= 11;
console.log(num)
num++
console.log(num)
num--
console.log(num)

let userNumber = Number(prompt('Введіть число'))
let squareResult = userNumber ** 2;
alert("Квадрат числа: " + squareResult);

let userNumber1 = Number(prompt('Введіть перше число'));
let userNumber2 = Number(prompt('Введіть друге число'));
let average = (userNumber1 + userNumber2) / 2;
alert("Середнє арифметичне ваших чисел: " + average);

let minutes = Number(prompt('Введіть кількість хвилин: '));
let seconds = minutes * 60;
alert(minutes + ' хвилин - це ' + seconds + ' секунд');

let greeting = 'Hello';
let userName;
userName = prompt("Будь ласка, введіть Ваше ім'я");
let welcomeMessage = greeting + ' ' + userName + '!';
alert(welcomeMessage);
