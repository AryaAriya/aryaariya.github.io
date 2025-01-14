import React from 'react';
function ForgotPasswordForm() {
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
<div id ="emailsend";">
<form>
<h1 style ="color:#043927">Forgot Password?</h1>
<p style ="color:#043927">If you have forgotten your password, please enter your account's email - without @csus.edu - here and click the 'Send Email' button. You will receive an email that provides the instructions for resetting your password.</p>
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
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('emailSend').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        document.getElementById('message').textContent = 'Token sent! Please check your email.';
    })
    .catch((error) => {
        document.getElementById('message').textContent = 'Error: ' + error.message;
    });
});
</script>
</html>
);
}
export default ForgotPasswordForm;
