<?php
// Start the session
session_start();

// Database connection
$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "fe";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handling form submission

    

    // Check if user is registered
    $email=$_POST['email'];
    $sql = "SELECT * FROM fee WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) { 
        header("Location:../index.html");
    } else {
        echo "<script>alert('User not Registered! Please Register First');
        location='../login_best.html';
        </script>";
       
        
    } 

    $stmt->close();


$conn->close();
?>

