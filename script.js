//======================//
// Joshua Gregory       //
// Professor Montgomery //
// Internet Programming //
// Project Site JS File //
//======================//

// Function to validate username/password inputs
const validateUserPass = function(event) {
  // prevent submission while validating
  event.preventDefault();
  
  // arr of registered usernames
  let userDB = ["Admin", "User", "Henry", "Elizabeth", "Shana", "TigerKing"];
  
  // VALIDATE USERNAME INPUT
  let userInput = document.getElementById("user");
  // traverse arr
  for(let i = 0; i < userDB.length; i++) {
    // check ith idx
    if(userDB[i] === userInput) {
      alert("Username not available.");  
    } else {
      continue;  // check i+1 idx
    }
  }

  // VALIDATE PASSWORD INPUTS
  let pass1 = document.getElementById("pass1");
  let pass2 = document.getElementById("pass2");
  // check password len
  if(pass1.length < 8) {
    // alert user
    alert("Password must be at least 8 characters.")
  }
  // check inputs match
  if(pass1.value !== pass2.value) {
    // RETURNS THIS ALERT NO MATTER WHAT
    alert("Passwords do not match.")
  }
};

// THIS SHOULDNT BE NECESSARY WITH onsubmit PROPERTY ADDED
const form = document.getElementById("reg-form");
form.addEventListener("submit", validateUserPass, true);
// RETURNS TYPEERROR: cannot read properties of null
// BUT WITHOUT IT, IT DOESN'T VALIDATE

