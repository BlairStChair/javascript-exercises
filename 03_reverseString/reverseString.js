const reverseString = function(word = '') {
    let new_array = [];
        for(let i = 0; i < word.length; i++){
           new_array[i] = word[word.length - i - 1];
            }
        return new_array.join('');
        };

// Do not edit below this line
module.exports = reverseString;
