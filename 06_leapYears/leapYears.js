const leapYears = function(insertedYear=0) {
    if(insertedYear % 4 == 0 && insertedYear % 100 != 0){
      return true;
    }else if(insertedYear % 100 == 0 && insertedYear % 400 == 0){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
