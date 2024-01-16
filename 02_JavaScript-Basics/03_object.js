// singleton
// object.create   ← ------  its costructor method

// object literals
//const JsUser = {}

 const JsUser = {
    name: "afatb",
    "age": 31,
    email: "aftab@gmail.com",
    isLoggedIn: false,
    lastLoggedInDay: ["monday", "saturday"]
}

// console.log(JsUser.name)
    "   "  (JsUser["email"])
    "   "  (JsUser["age"]) // noly the way to access for age value

 // -------important ↓-----------

// const mySym = Symbol("key1") |
// const JsUser = {
//     [mySym] : myKey1
// }
// console.log(JsUser[mySym])

//  -----------------↑-----------

//for change the object value 
JsUser.email = "aftab123456@gmail.com"

// to lock the value ------
Object.freeze(JsUser)

// to add function in object
JsUser.greeting = function () {
    console.log ("hello js user")
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())

JsUser.greetingTwo = function() {
    console.log(`hello js user $(this.name)`)
}

