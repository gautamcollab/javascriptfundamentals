

const quiz = () => {
let myName = prompt('Enter your name')
let month = prompt('What month were you born?')
let food = prompt('What is your favorite food')
console.log('My name is', myName)
console.log('I was born in', month)
console.log('My favorite food is', food)
}

const print = () => {
    console.log('I love to print text!')
}

const functionA = (f) => {
    console.log('Function A Has been Called!')
    f()
}

const functionB = () => {
    console.log('FUNCTION B HAS BEEN CALLED!')
}
const greet = (person) => {
    console.log('Hello', person)
}

const functionC = () -> {
    console.log("Function C Has been Called!")
}