"use strict"
// Task 1
function getCount(letters) {
    let countVowels = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for (let amount of letters) {
        if (vowels.includes(amount)) {
            countVowels++
        }
    }
    return countVowels
}

getCount("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dicta perspiciatis aperiam eum tempora fugiat itaque obcaecati temporibus, voluptatibus quo.")


// Task 2
function moveOver(array, direction) {
    let arr = array
    if (direction === 'start') {
        let elem = arr.shift() // удаляем первый эллемент массива
        arr.push(elem) // добавляем эллемент в конец массива
        return alert(arr)

    } else if (direction === 'end') {
        let elem = arr.pop()
        arr.unshift(elem)
        return alert(arr)
    }
}

moveOver(['China', 'USA', 'Norway', 'Bulgaria'], 'start') // переместить в начало
// moveOver(['China', 'USA', 'Norway', 'Bulgaria'], 'end') // переместить в конец

// TASK 3 

const findLongestWord = function(str) {
    let arrStr = str.split(' ');
    let wordLength = 0;
    let longestWord;

    for (let i = 0; i < arrStr.length; i += 1) {
        wordLength = arrStr[1].length;

        if (arrStr[i].length > wordLength) {
            longestWord = arrStr[i];

            return longestWord;
        }
    }
};

console.log(findLongestWord("Необязательный параметр. Указывает символы, используемые в качестве разделителя внутри строки. Параметр separator может быть как строкой, так и регулярным выражением. Если параметр опущен, возвращённый массив будет содержать один элемент со всей строкой. Если параметр равен пустой строке, строка str будет преобразована в массив символов."));
console.log(findLongestWord("Оператор (операторная функция) new создаёт экземпляр объекта, встроенного или определённого пользователем, имеющего конструктор."));
console.log(findLongestWord("Как найти первую работу в IT?"));
 

