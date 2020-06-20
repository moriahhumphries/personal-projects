let input = "a whale of a deal!";
const vowels = ['a', 'e', 'i','o', 'u'];

let resultArray = [];

for(inputIndex = 0; inputIndex <= input.length; inputIndex++) {
    for(let vowel = 0; vowel < vowels.length; vowel++) {
        if(input[inputIndex] === vowels[vowel]){
            if(input[inputIndex] === 'a'){
                resultArray.push('aa');
            } else if (input[inputIndex] === 'e'){
                resultArray.push('ee');
            } else if (input[inputIndex] === 'i'){
                resultArray.push('ii');
            } else if (input[inputIndex] === 'o'){
                resultArray.push('oo');
            } else if (input[inputIndex] === 'u'){
                resultArray.push('uu');
            }
        }
    }
}
console.log(resultArray.join("").toUpperCase());