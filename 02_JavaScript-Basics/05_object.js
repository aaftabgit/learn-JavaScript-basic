// object destructuring -------

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aftab"
}

 console.log(course.courseInstructor)

 const {courseInstructor} = course
console.log(courseInstructor) // after d-structring we can get the value of object
const { courseInstructor: Instructor } = course // we can change name after destructuring
console.log(Instructor) 

//  ----------- API ------------

// JSON in object formate -----
// {
//     name: "aftab",
//     coursename: "js in hindi"
// }

// IN Array formate ----

[
    {
     name: "aftab",
     coursename: "js in hindi"
    },
     {
        name: "aftab",
        coursename: "js in hindi"
     },
    
    {
        name: "aftab",
        coursename: "js in hindi"
    }
]

// to find domo API website ---
// randomuser me (search at google)

// a famous tool to understand API data ---
// JSON formator 