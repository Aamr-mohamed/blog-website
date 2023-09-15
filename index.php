<?php
error_reporting(E_ALL);
ini_set('display_error', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include "connect.php";
$objDb = new DbConnect;
$conn = $objDb->connect();
$user = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO registeration(firstname,lastname,username,email,password,gender,date) VALUES(:firstname,:lastname,:username,:email,:password,:gender,:date)";
        $stmt = $conn->prepare($sql);
        $date = date('y-m-d');
        $stmt->bindParam(":firstname", $user->firstname);
        $stmt->bindParam(":lastname", $user->lastname);
        $stmt->bindParam(":username", $user->username);
        $stmt->bindParam(":email", $user->email);
        $stmt->bindParam(":password", $user->password);
        $stmt->bindParam(":gender", $user->gender);
        $stmt->bindParam(":date", $user->date);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created Successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record'];

        }
        break;
}