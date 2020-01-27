<?php

  require './PHPMailer/Exception.php';
  require './PHPMailer/PHPMailer.php';
  require './PHPMailer/SMTP.php';

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  use PHPMailer\PHPMailer\SMTP;

  $mail = new PHPMailer(true);

  try {
  
	  //Recipients
	  $mail->setFrom($_POST["form_email"], 'Mailer');
	  $mail->addAddress('alekseigalasov@gmail.com', 'Aleksei');     // Add a recipient
  
	  // Attachments
  
	  // Content
	  $mail->isHTML(true);                                  // Set email format to HTML
	  $mail->Subject = 'Here is the subject';
	  $mail->Body    = $_POST["form_msg"];
	  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

	  if(($_FILES['form_file']['error']) < 1) {
		$mail->AddAttachment($_FILES['form_file']['tmp_name'], $_FILES['form_file']['name']); 
		}


	  $mail->send();
	  echo '
		  <div style="display: flex; justify-content:center;max-width:300px;padding:20px 10px;background-color: #262626;flex-direction: column;margin: 0 auto;
		  margin-top: 30vh;align-items: center;">
			  <span style="margin: 10px 0; text-align: center; font-size: 16px;color: white;">Message has been sent</span>
			  <img style="margin: 15px 0;" src="../img/complete.svg" alt="complete">
			  <a  style="margin: 10px 0; padding:10 20px; max-width:60%; background-color:white; color: black; border-radius: 10px;text-decoration: none;" href="../">Return to main Page</a>
		  </div>
		  ';
  } catch (Exception $e) {
	  echo "<div style=\"display: flex; justify-content:center;max-width:300px;padding:20px 10px;background-color: #262626;flex-direction: column;margin: 0 auto;
	  margin-top: 30vh;align-items: center;\">
		  <span style=\"margin: 10px 0; text-align: center; font-size: 16px;color: white;\">Message could not be sent. Mailer Error: '{$mail->ErrorInfo}'</span>
		  <img style=\"margin: 15px 0;\" src=\"../img/complete.svg\" alt=\"complete\">
		  <a  style=\"margin: 10px 0; padding:10 20px; max-width:60%; background-color:white; color: black; border-radius: 10px;text-decoration: none;\" href=\"../\">Return to main Page</a>
	  </div>";

  }

?>