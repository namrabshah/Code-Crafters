<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fe";




$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else{
    echo ("conection");
}

// Handling form submission



    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $con_pass = $_POST['confirm_password'];

    // Check if user already exists
    $sql = "SELECT * FROM fee WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "Email already registered.";
    } else {
        $sql = "INSERT INTO fee (username, email, password,confirm_password) VALUES ('$username', '$email', '$password', '$con_pass')";
        if ($conn->query($sql) === TRUE) {
            header("Location:../login_best.html");
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }


$conn->close();
?>

<!-- HTML Form -->

