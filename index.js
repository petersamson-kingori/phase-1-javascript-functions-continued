// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;

};
saturdayFun();

const mondayWork = function( activity = 'go to the office'){
return `This Monday, I will ${activity}.`
};

mondayWork("work from home");

// const wrapAdjective = function(char = "*") {
//     const part1 = "You are ";
//     return function(name = "special") {
//       const encouragingpromptFunction = (`${char}${name}${char}!`);
//       return function() {
//         return `${part1} ${encouragingpromptFunction}`;
//       };
  
//     };
//   };
  
//   wrapAdjective("*")("a hard worker")();

const wrapAdjective  = function(adjective="special"){
  return function(spac="*"){
        return `You are ${adjective}${spac}${adjective}!`;
 }
}


  

