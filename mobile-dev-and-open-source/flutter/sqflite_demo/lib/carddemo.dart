import 'package:flutter/material.dart';

class Carddemo extends StatefulWidget {
  const Carddemo({super.key});

  @override
  State<Carddemo> createState() => _CarddemoState();
}

class _CarddemoState extends State<Carddemo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: Icon(Icons.android, color: Colors.white),
        title: Text("SQLITE DEMO", style: TextStyle(color: Colors.amber)),
        backgroundColor: Colors.blue,
      ),
      body: Column(
        children: [
          Card(
            color: const Color.fromARGB(255, 244, 155, 54),
            child: Container(
              padding: EdgeInsets.symmetric(vertical: 16, horizontal: 16),
              height: 150,
              width: double.infinity, //350,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      CircleAvatar(radius: 35, backgroundColor: Colors.amber),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          Container(width: 200, height: 2, color: Colors.white),
                          const SizedBox(height: 4),
                          const Text(
                            "113/1 หมู่ที่ 6",
                            style: TextStyle(fontSize: 12),
                          ),
                          const Text(
                            "ต.ดงขี้เหล็ก อ.เมืองปราจีนบุรี",
                            style: TextStyle(fontSize: 12),
                          ),
                          const Text("จ.ปราจีนบุรี"),
                        ],
                      ),
                    ],
                  ),
                  Expanded(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        Column(
                          mainAxisAlignment: MainAxisAlignment.end,
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [Text("line3"), Text("line4")],
                        ),
                        Column(
                          mainAxisAlignment: MainAxisAlignment.end,
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            Text(
                              "Senior Engineer",
                              style: TextStyle(fontSize: 18),
                            ),
                            Text("Mobile App Developement"),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
