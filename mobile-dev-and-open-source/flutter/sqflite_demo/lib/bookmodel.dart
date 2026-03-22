class Book {
  final int? id;
  final String name;
  final double price;
  final int stock;

  static final Map<String, dynamic> info = {
    "id": "id",
    "name": "name",
    "price": "price",
    "stock": "stock",
  };

  Book({
    this.id,
    required this.name,
    required this.price,
    required this.stock, //
  });

  Book copy({int? id, String? name, double? price, int? stock}) => Book(
    id: id ?? this.id,
    name: name ?? this.name,
    price: price ?? this.price,
    stock: stock ?? this.stock,
  );

  static Book fromJson(Map<String, Object?> json) => Book(
    id: json["id"] as int,
    name: json["name"] as String,
    price: json["price"] as double,
    stock: json["stock"] as int,
  );

  Map<String, Object?> toJson() => {
    info["id"]: id,
    info["name"]: name,
    info["price"]: price,
    info["stock"]: stock,
  };
}
