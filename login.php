<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_login";

// Створення підключення до бази даних
$conn = new mysqli($servername, $username, $password, $dbname);

// Перевірка підключення
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Перевірка, чи форма була надіслана
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримання даних з форми
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Захист від SQL-ін'єкцій
    $username = $conn->real_escape_string($username);
    $password = $conn->real_escape_string($password);

    // Запит на перевірку існування користувача в базі даних
    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Користувач знайдений, можна встановити сесію
        session_start();
        $_SESSION['username'] = $username;
        echo "Login successful! Welcome, $username.";
    } else {
        // Користувач не знайдений
        echo "Invalid username or password.";
    }
}

// Закриття підключення
$conn->close();
?>
