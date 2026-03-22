import 'package:flutter/material.dart';
import 'bookmodel.dart';
import 'carddemo.dart';
import 'dbhelper.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
      // home: Carddemo(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final DBHelper db = DBHelper();
  final ScrollController _scrollCtrl = ScrollController();
  final TextEditingController _searchCtrl = TextEditingController();

  List<Book> products = [];
  int _page = 1;
  final int _limit = 10;
  bool _hasMore = true;
  bool _loading = false;
  String _keyword = '';

  @override
  void initState() {
    super.initState();
    _loadData();

    _scrollCtrl.addListener(() {
      if (_scrollCtrl.position.pixels == _scrollCtrl.position.maxScrollExtent &&
          !_loading &&
          _hasMore) {
        _page++;
        _loadData();
      }
    });
  }

  Future<void> _loadData() async {
    setState(() => _loading = true);

    List<Book> data;

    if (_keyword.isEmpty) {
      data = await db.fetchPage(limit: _limit, offset: (_page - 1) * _limit);
    } else {
      data = await db.searchPage(
        keyword: _keyword,
        limit: _limit,
        offset: (_page - 1) * _limit,
      );
    }

    if (data.length < _limit) _hasMore = false;

    products.addAll(data);
    setState(() => _loading = false);
  }

  void _resetAndSearch(String text) {
    _keyword = text;
    _page = 1;
    _hasMore = true;
    products.clear();
    _loadData();
  }

  void _showBottomSheetForm({Book? item}) {
    final nameCtrl = TextEditingController(text: item?.name ?? '');
    final priceCtrl = TextEditingController(text: item?.price.toString() ?? '');
    final stockCtrl = TextEditingController(text: item?.stock.toString() ?? '');

    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (context) {
        return Padding(
          padding: EdgeInsets.only(
            left: 16,
            right: 16,
            top: 16,
            bottom: MediaQuery.of(context).viewInsets.bottom + 16,
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                item == null ? 'เพิ่มสินค้า' : 'แก้ไขสินค้า',
                style: const TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 12),
              TextField(
                controller: nameCtrl,
                decoration: const InputDecoration(labelText: 'ชื่อสินค้า'),
              ),
              TextField(
                controller: priceCtrl,
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(labelText: 'ราคา'),
              ),
              TextField(
                controller: stockCtrl,
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(labelText: 'สต๊อก'),
              ),
              const SizedBox(height: 16),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  child: const Text('บันทึก'),
                  onPressed: () async {
                    if (item == null) {
                      await db.insert(
                        Book(
                          name: nameCtrl.text,
                          price: double.parse(priceCtrl.text),
                          stock: int.parse(stockCtrl.text),
                        ),
                      );
                    } else {
                      await db.update(
                        Book(
                          id: item.id,
                          name: nameCtrl.text,
                          price: double.parse(priceCtrl.text),
                          stock: int.parse(stockCtrl.text),
                        ),
                      );
                    }

                    products.clear();
                    _page = 1;
                    _hasMore = true;
                    _loadData();

                    Navigator.pop(context);
                  },
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  void _deleteItem(int id) async {
    await db.delete(id);
    products.clear();
    _page = 1;
    _hasMore = true;
    _loadData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('SQLite CRUD + Pagination')),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _showBottomSheetForm(),
        child: const Icon(Icons.add),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8),
            child: TextField(
              controller: _searchCtrl,
              decoration: const InputDecoration(
                prefixIcon: Icon(Icons.search),
                hintText: 'ค้นหาสินค้า...',
              ),
              onChanged: _resetAndSearch,
            ),
          ),
          Expanded(
            child: ListView.builder(
              controller: _scrollCtrl,
              itemCount: products.length + (_hasMore ? 1 : 0),
              itemBuilder: (context, index) {
                if (index >= products.length) {
                  return const Padding(
                    padding: EdgeInsets.all(16),
                    child: Center(child: CircularProgressIndicator()),
                  );
                }

                final item = products[index];

                return Card(
                  margin: const EdgeInsets.symmetric(
                    horizontal: 10,
                    vertical: 6,
                  ),
                  elevation: 3,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: ListTile(
                    title: Text(item.name),
                    subtitle: Text('฿${item.price} | Stock: ${item.stock}'),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          icon: const Icon(Icons.edit, color: Colors.blue),
                          onPressed: () => _showBottomSheetForm(item: item),
                        ),
                        IconButton(
                          icon: const Icon(Icons.delete, color: Colors.red),
                          onPressed: () => _deleteItem(item.id!),
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
