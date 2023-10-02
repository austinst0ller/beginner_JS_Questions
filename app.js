// Q1.
// create a function that adds two numbers
function addition(num1, num2) {
    return num1 + num2
}
console.log(addition(3, 5))


// Q2.
// create a function that converts hours into seconds
function hoursToSeconds(hours) {
    return hours * 3600
}
console.log(hoursToSeconds(10))


// Q3.
// calculate the perimeter of a rectangle
function calcPerimeter(length, width) {
    return 2 * (length + width)
}
console.log(calcPerimeter(10, 20))


// Q4.
// calculate the area of a triangle
function calcTriangleArea(base, height) {
    return (base * height) / 2
}
console.log(calcTriangleArea(3, 2))


// Q5.
// accept a str and add 'Frontend' on the end
function appendFrontend(str) {
    return str.concat('Frontend')
}
console.log(appendFrontend('Apple'))


// Q6.
// return true if the sum of 2 nums is > 100 otherwise return false
function greaterThan100(num1, num2) {
    return num1 + num2 > 100
}
console.log(greaterThan100(20, 90))


// Q7.
// accept a number and return true if it's <= 0, else false
function lessThanOrEqual(number) {
    return number <= 0
}
console.log(lessThanOrEqual(-4))


// Q8.
// given a boolean, return the opposite boolean
function returnOppositeBool(boolean) {
    return !boolean
}
console.log(returnOppositeBool(true))


// Q9.
// given any element, return true if NOT the number 0
function isNotZero(num) {
    return num !== 0
}
console.log(isNotZero(null))


// Q10.
// given 2 nums, return the remainder when divided by each other
function calcRemainder(num1, num2) {
    return num1 % num2
}
console.log(calcRemainder(11, 12))


// Q11.
// return true if number is odd
function isOdd(num) {
    return num % 2 !== 0
}
console.log(isOdd(3))


// Q12.
// take a number and return 1 if even, else return -1
function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1
    // if value on left is T, returns 1
}
console.log(booleanInteger(5))


// Q13.
// take in 2 strings, if 1st = 'logged_in' && 2nd = 'subscribed' return T
function loggedInAndSubscribed(str1, str2) {
    return str1 === 'LOGGED_IN' && str2 === 'SUBSCRIBED'
}
console.log(loggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))


// Q14.
// take in 2 strings, if 1st = 'logged_in' || 2nd = 'subscribed' return T
function loggedInOrSubscribed(str1, str2) {
    return str1 === 'LOGGED_IN' || str2 === 'SUBSCRIBED'
}
console.log(loggedInOrSubscribed('LOGGED_OUT', 'SUBSCRIBED'))