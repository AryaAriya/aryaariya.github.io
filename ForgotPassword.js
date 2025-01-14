import React from 'react';

function ForgotPassword() {
return (

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
div {
  background-color: #C4B581;
  width: 450px;
  height: 275px;
  border: 3px solid black;
  padding: 40px;
  margin: 20px;
  top: 50%;
  left: 50%;
  margin-left: 380px;
  margin-top: 90px; 
  float: left;
}

h1 {
  text-align: center;
  position: relative;
  top: -45px;
}

a {
  text-align: center;
  position: absolute;
  top: 25px;
  left: 555px;
}

p {
  text-align: center;
  position: relative;
  top: -30px;
}

#mySearch {
    position: relative;
    left: 90px; 
}


</style>
</head>

<body>
<a href ="#" onclick ="resetpassword('emailsend');">Forgot Password?</a>

<div id ="emailsend" style="display:none;">
<form>
<h1 style ="color:#043927">Forgot Password?</h1>
<p style ="color:#043927"> If you have forgotten your password, please enter your account's email - without @csus.edu - here and click the 'Send Email' button. You will receive an email that provides the instructions for resetting your password.</p>


<label style="color:#043927;" for="mySearch">Email</label>
    <input
      type="search"
      id="mySearch"
      name="q"
      placeholder="Search query"
      size="20"
      minlength="10"
      maxlength="20"/>
      <span class="validity"></span>
        <br>
        <br>
        <br>
<center> <button type="button">Send Email</button> </center>
  </div>
</body>
<script>
function resetpassword(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
</script>
</html>
 );
}
export default ForgotPassword;
