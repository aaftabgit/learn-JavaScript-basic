// to know about DATE & TIME
// let`s open the `mdn` web page...........

let myDate = new Date();
console.log(myDate)

//not usable and readable value.........
// and numbers default in milliseconds

console.log(myDate.toString()) //somthing is good....
   
// toString()
// toDateString()
// toLocaleString()

console.log(typeof myDate)  // prnt-object

let myCreateDate = new Date(2024, 0, 26)
console.log(myCreateDate.toDateString())

//new Date(2024, 0, 26, 5, 7)
//  "  "  ("2024-01-14")  for- yy dd mm
//  "  "  ("01-14-2024")  for- mm dd yy

let myTimeStamp = Date.now()
// for compare ↓
console.log(myTimeStamp)   
console.log(myCreateDate.getTime())
// for compare ↑

// to convert in second ↓
 console.log(Date.now()/1000)  // but given value in decomal (123456.987) 

 console.log(Math.floor(Date.now()/1000)) // now given value in intiger (123456)

 let newDate = new Date()
 console.log(newDate)
 console.log(newDate.getMonth() + 1);  // .getDay() etc.

 // for more costomise

 console.log(newDate.toLocaleString('default',{
     weekday : "long",
 }))

 // end  ..................