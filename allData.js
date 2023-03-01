const  firstName = "Aya"
const  lastName = "ahmed"
const  city = "mansoura"
const  age = 30

// module.exports = firstName
// module.exports = lastName
// module.exports = city

function Mul(x,y){
    console.log(x*y)
}

module.exports = {
    fname : firstName,
    lname : lastName,
    city : city,
    age : age,
    fun1 : Mul
}