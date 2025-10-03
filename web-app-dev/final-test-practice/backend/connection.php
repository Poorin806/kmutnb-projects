<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost";

// TODO: Change DB name to your own database name
// $db = "employee_db";
$db = "kmutnb_weblab_employee_db";

$user = "root";
$pass = "";
$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

// DB Connection
try {
  $pdo = new PDO($dsn, $user, $pass);
} catch (PDOException $e) {
  echo json_encode(["error" => $e->getMessage()]);
  exit();
}
