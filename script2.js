//======================//
// Joshua Gregory       //
// Professor Montgomery //
// Internet Programming //
// Project Site JS File //
//======================//
  

const formValidate = function() {

  // VALIDATE USERNAME INPUT
  let usernames = ["Admin","User","Henry","Elizabeth","Shana"];
  let userInp = document.forms["p3-form"]["user"].value;
  for(let i = 0; i < usernames.length; i++) {
    if(usernames[i] === userInp) {
      alert("Username not available.");
      return false;
    } else {
      continue;
    }
  }

  // VALIDATE PASSWORD INPUTS
  let pass1 = document.forms["p3-form"]["pass1"].value;
  let pass2 = document.forms["p3-form"]["pass2"].value;

  if(pass1.length < 8) {
    alert("Password must be at least 8 characters.");
    return false;
  }
    
  if(pass1 !== pass2) {
    alert("Passwords do not match.");
    return false;
  }
};
