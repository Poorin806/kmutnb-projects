import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import 'bookmodel.dart';

class DBHelper {
  static final DBHelper _instance = DBHelper._internal();
  factory DBHelper() => _instance;
  String tablename = "products";

  DBHelper._internal();

  static Database? _database;

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB();
    return _database!;
  }

  // ---------------------
  // Init Database
  // ---------------------
  Future<Database> _initDB() async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, 'product.db');

    return await openDatabase(path, version: 1, onCreate: _onCreate);
  }

  Future _onCreate(Database db, int version) async {
    await db.execute('''
      CREATE TABLE $tablename (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        stock INTEGER NOT NULL
      )
    ''');
  }

  // ---------------------
  // CRUD
  // ---------------------

  Future<Book> insert(Book book) async {
    final db = await database;
    final id = await db.insert(tablename, book.toJson());
    return book.copy(id: id);
  }

  Future<List<Book>> queryAll() async {
    final db = await database;
    final result = await db.query(tablename, orderBy: 'id DESC');
    return result.map((json) => Book.fromJson(json)).toList();
  }

  Future<int> update(Book book) async {
    final db = await database;
    return await db.update(
      tablename,
      book.toJson(),
      where: 'id = ?',
      whereArgs: [book.id],
    );
  }

  Future<int> delete(int id) async {
    final db = await database;
    return await db.delete(tablename, where: 'id = ?', whereArgs: [id]);
  }

  // ---------------------
  // SEARCH
  // ---------------------

  Future<List<Book>> search(String keyword) async {
    final db = await database;
    final result = await db.query(
      tablename,
      where: 'name LIKE ?',
      whereArgs: ['%$keyword%'],
      orderBy: 'id DESC',
    );
    return result.map((json) => Book.fromJson(json)).toList();
  }

  // ---------------------
  // PAGINATION
  // ---------------------

  Future<List<Book>> fetchPage({int limit = 10, int offset = 0}) async {
    final db = await database;
    final result = await db.query(
      tablename,
      limit: limit,
      offset: offset,
      orderBy: 'id DESC',
    );
    return result.map((json) => Book.fromJson(json)).toList();
  }

  // ---------------------
  // SEARCH + PAGINATION
  // ---------------------

  Future<List<Book>> searchPage({
    required String keyword,
    int limit = 10,
    int offset = 0,
  }) async {
    final db = await database;
    final result = await db.query(
      tablename,
      where: 'name LIKE ?',
      whereArgs: ['%$keyword%'],
      limit: limit,
      offset: offset,
      orderBy: 'id DESC',
    );
    return result.map((json) => Book.fromJson(json)).toList();
  }
}
