const frd_gujarat = ["aftab", "faiz", "saddam"]
const frd_lko = ["anas", "danish"]

frd_gujarat.push(frd_lko)
console.log(frd_gujarat) // [ __________ [ ______ ]]

const frd_all =  frd_gujarat.concat(frd_lko)
console.log(frd_gujarat)  //  [ ____________________ ]

//--------- spread method, mostly used this methods -------
const frinds = [...frd_gujarat, ...frd_lko]
console .......

const frd_count = [1, 2, [3, 4,], [5, 6 [7, 8]] ]
const frd_total = frd_count.flat(Infinity)
console.log(frd_total)   // [ _________________________________  ]

// to ask that array or not .

console.log(Array.isArray("alam"))

// to convert in array

console.log(Array.from("alam"))

console.log(Array({name: "alam"}))  // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Arrat.of(score1,score2,score3))
// [ ________________________________________ ]
