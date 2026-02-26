import 'package:flutter/material.dart';
import 'package:lab3/page1.dart';
import 'package:lab3/page2.dart';

class Homepage extends StatelessWidget {
  const Homepage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Homepage')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text('This is the homepage'),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () => {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const Page1()),
                ),
              },
              child: Text('Go to Page 1'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () => {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const Page2()),
                ),
              },
              child: Text('Go to Page 2'),
            ),
          ],
        ),
      ),
    );
  }
}
