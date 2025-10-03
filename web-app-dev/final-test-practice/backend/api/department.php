<?php

require_once "../connection.php";


if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  exit(0);
}

$requestMethod = $_SERVER["REQUEST_METHOD"];

switch ($requestMethod) {
  case 'GET':
    $stmt = $pdo->query("SELECT * FROM departments");
    $departments = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($departments);
    break;
  default:
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
}
