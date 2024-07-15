const palindromes = function (str) {
    let lowerCaseStr = str.toLowerCase();
    const myArray = lowerCaseStr.split("");
    const justLetters = myArray.filter(item => item !== ' ' && item !== ',' && item !== '.' && item !== '!');
    const reversedArray = [...justLetters].reverse();
    if(justLetters.join('') === reversedArray.join('')){
      return true;
    }else{
      return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
