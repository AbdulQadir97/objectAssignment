var itemsArray = [
{name:"juice",price:50, quantity:3},
{name:"cookie",price:30, quantity:9},
{name:"shirt",price:880, quantity:1},
{name:"pen",price:100, quantity:2}];
var firstItem  = itemsArray[0].price * itemsArray[0].quantity;
var secondItem = itemsArray[1].price * itemsArray[1].quantity;
var thirdItem  = itemsArray[2].price * itemsArray[2].quantity;
var fourthItem = itemsArray[3].price * itemsArray[3].quantity;
var totalPrice = firstItem + secondItem + thirdItem + fourthItem;
console.log(firstItem)
console.log(secondItem)
console.log(thirdItem)
console.log(fourthItem)
console.log(totalPrice)

//Q.2

var person = {
    name: "Abdul Qadir",
    email: "aq201541@gmail.com",
    password: "******",
    age: "23",
    gender:"Male",
    city: "Karachi",
    country: "Pakistan",

}

console.log(person)
console.log("age" in person)
console.log("country" in person)
console.log("firstName" in person)
console.log("lastName" in person)

//Q.3

function UserRecord (name, email, age, gender) {
    this.userName = name,
    this.email = email,
    this.age = age,
    this.gender = gender
}

var abdulQadir = new UserRecord ("Abdul Qadir", "aq201541@gmail.com", "23", "Male" )
var ali = new UserRecord ("Ali", "ali@gmail.com", "24", "Male" )
var ahmed = new UserRecord ("Ahmed", "ahmed@gmail.com", "25", "Male" )

console.log(UserRecord)
console.log(abdulQadir)
console.log(ali)
console.log(ahmed)

// Q.4





// function dataCollection(){
//     var userName = document.getElementById('name').value;
//     var userAddress = document.getElementById('address').value;
//     var userMale = document.getElementById('male').value;
//     var userFemale = document.getElementById('female').value;
//     var userProfession = document.getElementById('profession').value;
//     var userEducation = document.getElementById('education').value;

//     alert(userName + userAddress + userMale + userProfession + userEducation)


    

// }

// function UserData(userName, userAddress, userMale, userFemale, userProfession, userEducation) {
//     this.name = userName
//     this.address = userAddress,
//     this.genderm = userMale,
//     this.genderf = userFemale,
//     this.profession= userProfession,
//     this.education = userEducation
// }


function dataCollection(){
    var userName = document.getElementById('name').value;
    var userAddress = document.getElementById('address').value;
    var userMale = document.getElementById('male').value;
    var userFemale = document.getElementById('female').value;
    var userProfession = document.getElementById('profession').value;
    var userEducation = document.getElementById('education').value;

    function UserData(){
        this.name = userName,
        this.address = userAddress,
        this.male = userMale,
        this.female = userFemale,
        this.profession = userProfession,
        this.education = userEducation

    }

   var userDataCollection = new UserData(userName, userAddress, userMale, userFemale, userProfession, userEducation)
   console.log(userDataCollection);
}

