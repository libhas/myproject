<?php
$servername = "localhost";
$username = "libby";
$password = "y123456";
$dbname = "games";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE  products set title='".$_POST['title']."',price=".$_POST['price'].",
descraption='".$_POST['desc']."' where id=".$_POST['id']." ";

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
?>