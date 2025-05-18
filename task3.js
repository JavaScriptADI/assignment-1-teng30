let message="sdfghgfdsdfghfdsdfghfsfg"
let cost=1
let tax=0.1
let x=(( message.length + 100 - (message.length % 100) ) / 100)

console.log( "this text cost " + cost * x + " cents before tax and " + cost * x * (1 + tax) + " cents after tax" )