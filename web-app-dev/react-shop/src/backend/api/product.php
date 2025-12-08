<?php
// อนุญาต CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// โหลด controller
require_once "../config/controller.php";

$table = 'products';
$ctrl = new Controller($table);

$method = $_SERVER['REQUEST_METHOD'];
$id = $_GET['id'] ?? null;

// จัดการตาม HTTP method
switch ($method) {
    case 'GET':
        if ($id && is_numeric($id)) {
            $ctrl->get($id);
        } else {
            $ctrl->getAll();
        }
        break;

    // เพิ่ม POST / PUT / DELETE ได้ถ้าต้องการ
    default:
        http_response_code(405);
        echo json_encode(["message" => "Method not allowed"]);
        break;
}

?>