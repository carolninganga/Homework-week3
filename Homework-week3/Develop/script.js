/*var generateBtn = document.querySelector("#generate");
var passwordResult = "";

var letters = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseArray = letters.toUpperCase().split("");
var numberOfCharacters;

 // generate password
 function generatePassword() {
   getPrompts();
   var pass = buildPassword();
   return pass;

 }

 function getPrompts()
  // get prompt from user 
  // length 8 -128
  numberOfCharacters = prompt("how many characters do you want?");
  return buildPassword();
}

function buildPassword() {
   //check for number
   if(!isNaN(parseInt(numberOfCharacters)) 
   && numberOfCharacters >= 8 
   && numberOfCharacters <= 128) {
       // build password
       for (var i = 0; i < numberOfCharacters; i++) {
           //passwordResult = passwordResult + getRandomFromArray(upperCaseArray.length)
       }
   }
   
   return passwordResult;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 
    
   
    function getRandomFromArray(arr) {
      return arr [parsenInt(Math.random() * arr.length)]
    }
    
    
    console.log(isNaN(parseInt(numberOfCharacters)));
    //length 8 - 128
    //lowercase
    //uppercase
    //numeric
    //unique characters

    return "password";
  }
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 }
  passwordText.value = password;
  passwordResult = "";

}*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var choosePassword = confirm("please select a password");
var passwordLength = confirm("password must be between 8 and 128 characters long");
var passwordCriteria = prompt("password must include atleast Uppercase, LowerCase, number and unique charater");
var passwordInput = prompt("enter password length?");




//var alphabetLetters = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
//var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//var uniqueCharacters = [-, =, +, &, #, @, %, *];

//var x = 10;
//

generatePassword = "";
var passwordInput = 'abcdefghijklmnopqrstuvwxyz123456789-=+&#@%*';
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var uniqueCharacters = [-, =, +, &, #, @, %, *]; 

var letters;
var lettersarray = [];

function alphabetLetters() {
  for (var i = 0; i < passwordInput; i++) {
  if (typeof passwordInput !==   "string" && typeof passwordInput !== "number") {
    alert("please put in number");
  } else {
    passwordInput = Math.floor(Math.random() * passwordInput);
    passwordInput.push(letters);
  }
}
alert(numsarray);  

  var letters = alphabetLetters.charAt(Math.floor(Math.random()* passwordInput));
  alert(letters);
  
}
generatenums();

console.log(generatePassword);



/*if (passwordLength > 8 && passwordLength< 128) {
  alert(generatePassword);
}
else {
  alert("Password Length INVALID");
}*/

