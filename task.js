let message="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
let cost=1
let x=( message.length + 100 - (message.length % 100) )
console.log( cost * x /100 + " cents")