// const tinderUser = new Object()

const tinderUser = { }

tinderUser.id = 12345
tinderUser.name = "aftab"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "aftab123@gmail.com",
    fullname:{
        userfullname:{
            firstname: "aftab",
            lastname: "alam"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

// to combind two and more object in one object ...

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d" }

//const obj3 = {obj1, obj2}
//console.log(obj3) // wrong to combind

// const obj3 = Object.assign({}, obj1, obj2) // best way ---
//    "       "       "      (obj1, obj2)     // other way ---
// const obj3 = {...obj1, ...obj2}            //  mostly used this way --

//console.log(obj3)  

// array of object -----
const users = [
    {
        id: 1,
        email: "aftab1213@gmail.com"
    },
    {
        id: 2,
        email: "alam123@gmail.com"
    }
]

users[1].email // ↑ to get value ....

// to find object keys ....↓
console.log(Object.keys(tinderUser))

// to find value ...↓
console.log(Object.values(tinderUser))

// to find all ...↓
console.log(Object.entries(tinderUser))

// to ask ...
console.log(tinderUser.hasOwnProperty('IsLoggedIn')) // true/false

// to know more about for object methos with console....
const user1 = { 1: "a", 2: "b"} 
console.log(user1)


