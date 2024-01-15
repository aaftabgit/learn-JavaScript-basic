// array
// elements, declear ....

const myArr1 = [1, 2, 3, 4, 5, "abc", true, object, again-Array ] 

// a array cnotain all type of elements

// shallow copy (change in original array)
// deep (copy original array)

const myArr = [0, 1, 2, 3, ]
const myHeros = ["abc", "def",]

const myArr3 = new Array(0, 1, 2, 3, )
// we can also declear like that ↑

console.log(myArr[2])

// decler array in console to get methods in array

//array methods

myArr.push(6)
console.log(myArr) ;   // it is need to give any value And it adds that value at the last of array.

myArr.pop() // removed last value 
myArr.unshift(9)
myArr.shift()
myArr.includes(8)
myArr.indexOf(2)
myArr.join() // convet in string
myArr.slice( 1, 3)  // it get new array [1,2] does not includ of 3. And not change original array elemet
myArr.splice( 1, 3 ) // it get new array [1,2,3] it includ of 3. AND it change the original array.