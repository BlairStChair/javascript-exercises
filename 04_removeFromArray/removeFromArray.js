const removeFromArray = function(userArray = [], ...argumentsToRemove) {
         
    for(let i = 0; i < userArray.length; i++){
    argumentsToRemove.forEach((argumentToRemove) => {
     let index = userArray.indexOf(argumentToRemove);
     if(index >= 0){
         userArray.splice(index, 1);
     }
     
    })}
  
  return userArray;
};

// Do not edit below this line
module.exports = removeFromArray;
