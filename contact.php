<?php
$array = array("name" => "", "email" => "", "message" => "","nameError" => "","emailError"=>"", "messageError" => "","isSuccess" => false);

$emailto = "ananyaiiitr@gmail.com";

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $array['name'] = verifyInput($_POST['name']);
    $array['email'] = verifyInput($_POST['email']);
    $array['message'] = verifyInput($_POST['message']);
    $array['isSuccess'] = true;
    $emailText = "";
    

    if (empty($array['name'])) {
        $array['nameError'] = "Et même ton nom";
        $array['isSuccess'] = false;
    } else {
        $emailText .= "name: {$array['name']}\n";
    }

    if(!isEmail($array['email'])){
        $array['emailError'] = " Ce n'est pas un email valide !";
        $array['isSuccess'] = false;
    } else {
        $emailText .= "email: {$array['email']}\n";
    }

    if (empty($array['message'])) {
        $array['messageError'] = "Que veux tu me dire ?";
        $array['isSuccess'] = false;
    } else {
        $emailText .= "message: {$array['message']}\n";
    }

    if($array['isSuccess']){
        $headers = "From: {$array['firstname']} {$array['name']} <{$array['email']}>\r\n\Reply-To: {$array['email']}";
        mail($emailto, "un message de votre site",$emailText,$headers);
    }

    echo json_encode($array);

}

function verifyInput($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);

    return $data;
}

function isEmail($var){
    return filter_var($var, FILTER_VALIDATE_EMAIL);
}

