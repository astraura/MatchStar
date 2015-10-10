<?php 
header('content-type: application/json; charset=utf-8');

if (isset($_GET["firstname"])) {
	$firstname = strip_tags($_GET['firstname']);
	$surname = strip_tags($_GET['surname']);
	$email = strip_tags($_GET['email']);
	$mobilephone = strip_tags($_GET['mobilephone']);
	$state = strip_tags($_GET['state']);
	$message = strip_tags($_GET['message']);
	$header = "From: ". $firstname . " <" . $email . ">rn"; 

	$ip = $_SERVER['REMOTE_ADDR']; 
	$httpref = $_SERVER['HTTP_REFERER']; 
	$httpagent = $_SERVER['HTTP_USER_AGENT']; 
	$today = date("F j, Y, g:i a");    
	
	$recipient = 'matchcharts@gmail.com';
	$subject = 'Contact Form';
	$mailbody = "
First Name: $firstname 
Last Name: $surname 
Email: $email 
Mobile Phone: $mobilephone 
State: $state
Message: $message

IP: $ip
Browser info: $httpagent
Referral: $httpref
Sent: $today
";
	$result = 'success';

	if (mail($recipient, $subject, $mailbody, $header)) {
		echo json_encode($result);
	}
}
?>
