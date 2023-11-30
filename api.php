<?php

$action = $_POST["action"];





$servername = "sql310.infinityfree.com";
$username = "if0_35532002";
$password = "А немає тут пароля))";

$conn = new mysqli($servername, $username, $password, "if0_35532002_lab6DB");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if($action == "addItem"){
	$title = $_POST["title"];
	$description = $_POST["description"];

	$sql = "INSERT INTO Accordion_Items (title, description)
	VALUES ('".$title."', '".$description."')";

	if ($conn->query($sql) === TRUE) {
	  echo "New record created successfully";
	} else {
	  echo "Error: " . $sql . "<br>" . $conn->error;
	}
}elseif($action == "getItems"){
	$sql = "SELECT title, description FROM Accordion_Items";
	$result = $conn->query($sql);
	$output = array();
	if ($result->num_rows > 0) {
	  while($row = $result->fetch_assoc()) {
	    array_push($output, $row);
	  }
	  echo json_encode($output);
	} 
}

$conn->close();
?>