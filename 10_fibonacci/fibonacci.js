const fibonacci = function(fLength) {
    if(fLength >= 0){
    const fArray = [1,1];
    for(i = 1; i < fLength - 1; i++){
      fArray[i+1] = fArray[i-1] + fArray[i];
    }
    if(fLength == 0){
        return 0;
    }else{
    return fArray[fLength -1];
    }
    }else{
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
