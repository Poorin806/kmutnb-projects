<?php

header("content-type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-type");

$host = "localhost";
$db = "employee_db";
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


if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  exit(0);
}

$requestMethod = $_SERVER["REQUEST_METHOD"];

switch ($requestMethod) {
  case 'GET':
    $stmt = $pdo->query("SELECT * FROM employees");
    $employees = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($employees);
    break;
  default:
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
}
