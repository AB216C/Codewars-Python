

const numbers = [1, -4, 7, 12] 


const positive_numbers = numbers.filter(num=> num>0)


const sum = positive_numbers.reduce((total, current)=> total + current, 0)

console.log(sum)