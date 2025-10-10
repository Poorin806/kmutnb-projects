<?php
header("Content-Type: application/json; charset=UTF-8");

require_once "./database.php";

class Controller {
    private $conn;
    private $table_name;

    public function __construct($table_name){
        $database = new Database();
        $this->table_name = $table_name;
        $this->conn = $database->getConnection();
    }

    public function getAll(){
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($products);
    }

    public function get($id){
        $query = "SELECT * FROM " 
                 . $this->table_name . " WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);
        $stmt->execute();
        $product = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($product) {
            echo json_encode($product);
        } else {
            http_response_code(404);
            echo json_encode(
                ["message" => $this->table_name 
                              . " not found."]);
        }
    }
}