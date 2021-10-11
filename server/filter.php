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

$sql = ="select * from products where title like '".$_POST['char']."%' ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - title: " . $row["title"]. " " . $row["price"]." " . $row["descraption"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>