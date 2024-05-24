const repeatString = function(word = '', number = 0) {  
    let concated_words = '';
    
    if(number < 0){
        return 'ERROR';
    }else{
    for(let i = 0; i < number; i++){
            concated_words = concated_words.concat(word);
      }
      return concated_words;}
};

// Do not edit below this line
module.exports = repeatString;
