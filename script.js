//======================//
// Joshua Gregory       //
// Professor Montgomery //
// Internet Programming //
// Project Site JS File //
//======================//

// function to remove error msg when retrying invalid user/pass
const clearErr = function() {
  document.getElementById("user-err").innerHTML = "";
  document.getElementById("pass1-err").innerHTML = "";
  document.getElementById("pass2-err").innerHTML = "";
};

//function to validate username and password inputs
const formValidate = function() {
  // search dom for input using name attributes & store the value
  let userInp = document.forms["p3-form"]["user"].value;
  // arr of unavailable usernames
  let usernames = ["Admin","User","Henry","Elizabeth","Shana"];
  // traverse over arr of unavailable usernames
  for(let i = 0; i < usernames.length; i++) {
    // compare input to ea ith idx
    if(usernames[i] === userInp) {
      // display error msg under input field
      let text = document.getElementById("user-err");
      let errMsg = "Username not available.";
      text.innerHTML = errMsg;
      return false;  // prevent form submission
    } else {
      continue;  // check next idx
    }
  }
  // search dom for field using name attribute, store value
  let pass1 = document.forms["p3-form"]["pass1"].value;
  let pass2 = document.forms["p3-form"]["pass2"].value;

  // validate password input len
  if(pass1.length < 8) {
    let errMsg = "Password must be at least 8 characters.";
    document.getElementById("pass1-err").innerHTML = errMsg;
    return false;
  }
  // validate str equality of inputs
  if(pass1 !== pass2) {
    let errMsg = "Confirmation must match password.";
    document.getElementById("pass2-err").innerHTML = errMsg;
    return false;
  }
};
