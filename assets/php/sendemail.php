<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $subject = $_POST["subject"];

  // Set up the email parameters
  $to = "netnotoffical@gmail.com";
  $subject = "New Contact Form Submission";
  $body = "Name: " . $name . "\n" .
          "Email: " . $email . "\n" .
          "Message: " . $message;

  // Send the email
  $headers = "From: " . $email;

  if (mail($to, $subject, $body, $headers)) {
    echo "Email sent successfully.";
  } else {
    echo "Failed to send email.";
  }
}
?>