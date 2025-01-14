import React from 'react';

function ForgotEmail() {
return (
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
</head>
<script src="https://smtpjs.com/v3/smtp.js"></script>
<body>
<center> <button type="button" onclick="sendEmail()">Send Email</button> </center>
</body>
<script>
 function sendEmail() {
            const userEmail = "user@example.com"; // Replace with the user's email
            const resetToken = "your-reset-token"; // Replace with the generated reset token

            Email.send({
                SecureToken: "your-smtp-token", // Replace with your SMTP token
                Host: "smtp.gmail.com",
                To: userEmail,
                From: "your-email@example.com", // Replace with your email
                Subject: "Password Reset",
                Body: `Hello,<br><br> We're sending you this email because you requested a password reset. Here is your password reset token: <b>${resetToken}</b><br><br>If you didn't request a password request, ignore this email. 
            }).then(
                message => alert("Mail sent successfully")
            ).catch(
                error => alert("Failed to send mail: " + error)
            );
        }
</script>
</html>
 );
}
export default ForgotEmail;
