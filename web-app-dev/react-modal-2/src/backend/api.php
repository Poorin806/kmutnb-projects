<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

$requestMethod = $_SERVER["REQUEST_METHOD"];

$host = "localhost";
$db = "kmutnb_weblab_restful_employee";
$user = "root";
$password = "";
$dsn = "mysql:host=$host; dbname=$db; charset=utf8mb4";

$table = "employee";

try {
  $pdo = new PDO($dsn, $user, $password);
  // echo json_encode(["Messsage" => "DB Connected!"]);
  // exit();
} catch (PDOException $e) {
  echo json_encode(["Error" => $e->getMessage()]);
  exit();
}

switch ($requestMethod) {
  case 'GET':
    $stmt = $pdo->query("SELECT * FROM $table");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    break;

  case 'POST':
    $input = json_decode(file_get_contents("php://input"), true);
    $stmt = $pdo->prepare("INSERT INTO $table (name, age, position) VALUES (?, ?, ?)");
    $stmt->execute([$input['name'], $input['age'], $input['position']]);
    echo json_encode(['message' => 'Employee created', 'id' => $pdo->lastInsertId()]);
    break;

  case 'PUT':
    $input = json_decode(file_get_contents("php://input"), true);
    $stmt = $pdo->prepare("UPDATE $table SET name = ?, age = ?, position = ? WHERE id = ?");
    $stmt->execute([$input['name'], $input['age'], $input['position'], $input['id']]);
    echo json_encode(['message' => 'Employee updated']);
    break;

  case 'DELETE':
    $id = intval(basename($_SERVER['REQUEST_URI']));
    $stmt = $pdo->prepare("DELETE FROM $table WHERE id = ?");
    $stmt->execute([$id]);
    echo json_encode(['message' => 'Employee deleted']);
    break;

  default:
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    break;
}
