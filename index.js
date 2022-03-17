const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const totalBatteries = function(array){
//     const total = array.reduce(function(accum,element){return accum + element},0)
//     console.log(total)
//     return total
// }

const totalBatteries = batteryBatches.reduce((accum,element)=>(accum+element),0)
console.log(totalBatteries)