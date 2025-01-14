import React from "react";

function StudentPortal() {
return (
	<head>
<style>
div {
  background-color: #C4B581;
  width: 300px;
  height: 155px;
  border: 3px solid black;
  padding: 40px;
  margin: 20px;
  top: 50%;
  left: 50%;
  margin-left: 450px;
  margin-top: 50px; 
  float: left;
}
</style>
</head>

<head>
<style>
body {
  background-image: url('https://live.staticflickr.com/4721/28357863649_ae19bb343a_b.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  text-align: center;
}
</style>
</head>

<body>

<img src= "C:\Users\aryaa\Downloads\Sacramento-State-University-logo_stacked.png" width = "100" height = "100"

<p></p>

<div>
<form>
 <label style="color:#043927;" for="mySearch">Username</label>
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
 <label style="color:#043927;" for="mySearch">Password</label>
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
<button type="button">Log In</button>
      <br> 
      <br>
      <br>       
<a style="color:#043927;" href=>Create Log-In</a>&emsp;&emsp;&emsp;&emsp;&emsp;<a style="color:#043927;" href=>Forgot Password?</a>
</form>
 </div>

</body>
</html>
	);
}

export default StudentPortal;
