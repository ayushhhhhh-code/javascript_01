//while converting

let score = 33   // if 33 in "33" it will be string  
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)  // converting string to number
console.log(typeof valueInNumber)

let valueInstring = String(score)  // converting number to string
console.log(typeof valueInstring)
console.log(valueInstring)   //it will convert but output will be NaN not a number


//33 => 33
//"33abc" => NaN
//true => 1
//false => 0
//null => 0
//undefined => NaN
//" " => 0
//"0" => 0

let IsloggedIn = 1  // 1 => true , 0 => false
let booleanIsloggedIn = Boolean(IsloggedIn)  // converting number to boolean
console.log(booleanIsloggedIn)
console.log(typeof booleanIsloggedIn)

//1 => true
//0 => false
//"abc" => true
//" " => true
//"" => false
//null => false
//undefined => false
//NaN => false

let newValue = 333
let a = String(newValue)
console.log(typeof a)  // converting number to string
console.log(a) 
//333 => "333" but value will be in string format

