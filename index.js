function saturdayFun(activity = 'roller-skate'){
return `This Saturday, I want to ${activity}!`
}
let mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(parentParam = '*'){
    let innerFunction = function(param = 'special'){
        return `You are ${parentParam}${param}${parentParam}!`
    }
    return innerFunction;
}
// let wrapAdjective = function(style="*") {
//     return function(adjective="special") {
//       return `You are ${style}${adjective}${style}!`
//     }
//   }