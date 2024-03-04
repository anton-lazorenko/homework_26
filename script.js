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
    if (direction === 'start'){
       let elem = arr.shift() // удаляем первый эллемент массива
       arr.push(elem) // добавляем эллемент в конец массива
       return alert(arr)

    } else if (direction === 'end'){
        let elem = arr.pop()
        arr.unshift(elem)
        return alert(arr)
    }  
} 

moveOver(['China', 'USA', 'Norway', 'Bulgaria'], 'start') // переместить в начало
// moveOver(['China', 'USA', 'Norway', 'Bulgaria'], 'end') // переместить в конец
