var itemsArray = [
{name:"juice",price:50, quantity:3},
{name:"cookie",price:30, quantity:9},
{name:"shirt",price:880, quantity:1},
{name:"pen",price:100, quantity:2}];
console.log(itemsArray.map((v)=>{
    console.log(v.price*v.quantity)
    return v.price*v.quantity
}
).reduce((a,b)=>a+b,0));

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





function dataCollection(){
var userName = document.getElementById('name').value;
var userAddress = document.getElementById('address').value;
var male = document.getElementById('male');
var female =document.getElementById("female");
var userGender = null;
if(male.checked){
    userGender = male.value;
}
if(female.checked){
    userGender = female.value;
}
    var userProfession = document.getElementById('profession').value;
    var userEducation = document.getElementById('education').value;

    function UserData(){
        this.name = userName,
        this.address = userAddress,
        this.gender = userGender,
        this.profession = userProfession,
        this.education = userEducation

    }
    
   var  userDataCollection = new UserData(userName, userAddress, userGender,  userProfession, userEducation)

    console.log(userDataCollection);


}


