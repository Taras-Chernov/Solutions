//Задачки по СТРОКАМ

/* Привести первый символ строки к верхнему регистру

const upperCaseFirstChar = (string) => {
    let upperString = string[0].toUpperCase() + string.slice(1)
    return console.log(upperString)
}
upperCaseFirstChar('wegwefef')
*/


/* Проверрка на спам по словам с использованием includes
const checkSpam = (word) => {
let lowerWord = word.toLowerCase()
return console.log(lowerWord.includes('xxx')) || console.log(lowerWord.includes('viagra'))
}
checkSpam("viagra111111xxx1")

*/

/*Усечение строки до указанной динны
const truncate = (str, maxlength) => {
    if(str.length > maxlength) {
        return console.log(`${str.slice(0, maxlength)}...`)
    }
}
truncate('wefewfewfefewfeweeeeeeeeeeeeeeeeeeeeeeee', 10)
*/

/* Убираем знаки валюты и преобразуем в число
const extractCurrencyValue = (str) => console.log(+str.slice(1))

extractCurrencyValue('$120')
*/

// Задачки по МАССИВАМ

/*
const array = ['a', 'b', 'c', 'd', 'e']
const reverse = (array) => {
let result = []
for (i = array.length - 1; i >= 0; i--) {
    result = result.concat(array[i])
  }
  return console.log(result)
}

reverse(array)
*/
/* Тоже самое
const array = [1, 2, 3, 4, 5]
console.log(array.reverse())
*/



/* Работа в вложенным циклом
const print = (char) => {
    for(j = 0; j < 15; j++) {
        let str = ''
        for(i = 0; i < 8; i++) {
           str += char
       }
       console.log(str)
    }
}

print('a')
*/


/*Обратная сортировка
let arr = [5, 2, 1, -10, 8];

let result =  arr.sort((a, b) => b - a)
console.log(result)
*/



/*Копирование и сортировка массива

let arr = ["HTML", "JavaScript", "CSS"];
const copySorted = (arr) => {
    let sorted  = arr.map(item => item)
    sorted .sort()
    console.log(arr)
    return console.log(sorted )
}
copySorted(arr)

let arr = ["HTML", "JavaScript", "CSS"];
const copySorted = (arr) => {
    let sorted  = arr.slice().sort()
    console.log(arr)
    return console.log(sorted )
}
copySorted(arr)
*/

/*
const calculate = (str) => {
    let result = 0
    strArr = str.split(' ')

    if(strArr[1] === '+'){result = +strArr[0] + +strArr[2]}
    if(strArr[1] === '-'){result = +strArr[0] - +strArr[2]}

    console.log(result)
}
calculate("331 - 74567") */

/* Кэмелкейс после -
let str = "-webkit-transition"
const camelize = (str) =>{
    console.log(str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join(''));
}

camelize(str)*/


 /*Отфильтровать по условию
const arr = [5, 3, 8, 1];
const filterRange = (arr, a, b) => {
    let filtered = []
    return filtered = arr.filter((int) => int <= b && int >= a);
}
console.log(filterRange(arr, 1, 4))
*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let result = []
let names = () => {
    for(i = 0; i < users.length; i++){
        result = result.concat(users[i].name)
    }
    return result
}
console.log(names())

[ 'Вася', 'Петя', 'Маша' ]