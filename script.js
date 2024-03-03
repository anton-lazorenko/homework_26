"use strict"
// Task 1
function getCount(str) {
    let countVowels = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for (let char of str) {
        if (vowels.includes(char)) {
            countVowels++
        }
    }
    return countVowels
}

getCount("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dicta perspiciatis aperiam eum tempora fugiat itaque obcaecati temporibus, voluptatibus quo.")
 