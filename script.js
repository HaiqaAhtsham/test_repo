//const sendMail = require('./sendmail.js');

// function signInWithGoogle() {
//   // Add Google sign-in functionality
//   console.log("Signing in with Google");
// }

// function signInWithFacebook() {
//   // Add Facebook sign-in functionality
//   console.log("Signing in with Facebook");
// }

// JavaScript form validation
// const form = document.getElementById('signInForm');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const username = document.getElementById('username').value.trim();
//   const password = document.getElementById('password').value.trim();

//   // Your validation logic here
 
//   if (username === '' || password === '') {
//       alert('Please enter both username and password.');
//       return;
//   }

//   // If validation passes, you can submit the form
//   // form.submit();
//   console.log('Form submitted:', { username, password });
// });

// Add an event listener to the sign-up button
// document.getElementById('signin-btn').addEventListener('click', function (event) {
//   event.preventDefault(); // Prevent the form from submitting
  
// });





// Import the sendMail function from sendmail.js
// const nodemailer = require("nodemailer");
// const sendMail = require('./sendmail');
// console.log("Nodemailer");

// require("dotenv").config();
document.getElementById('signUpForm').addEventListener('submit', (event) => {
  console.log('Form submitted');
  console.log('Action URL:', event.target.action);
});

document.getElementById('signup-btn').addEventListener('click', async function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form data
  const formData = new FormData(document.getElementById('signUpForm'));
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');


  // Send verification email by calling the sendMail function
const mailOptions={
    from: {
        name: "FitFusion",
        address: 'f219061@cfd.nu.edu.pk' // Sender email address
      },
    to: [email], // Recipient email address
    subject: 'Email Verification',
    html: `<p>Hello ${username},</p><p>Welcome to Fit Fusion.</p>` // Adjust the verification link as per your application
  };
  
  await sendMail(transporter, mailOptions);
});



