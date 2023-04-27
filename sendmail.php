<?php
if(isset($_POST['submit'])){
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Set recipient email address
    $to = "ananyaiiitr@gmail.com";

    // Set email headers
    $headers = "From: $name <$email>" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    // Send email
    if(mail($to, $subject, $message, $headers)){
        // Email sent successfully
        echo "<p>Your message has been sent. Thank you!</p>";
    } else {
        // Error sending email
        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }
}
?>
