import 'package:flutter/material.dart';

class Page1 extends StatefulWidget {
  const Page1({super.key});

  @override
  State<Page1> createState() => _Page1State();
}

class _Page1State extends State<Page1> {
  final myController = TextEditingController();

  @override
  void dispose() {
    myController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Page 1')),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          // Image
          Container(
            width: 200,
            height: 200,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(20),
              image: DecorationImage(
                image: AssetImage('assets/images/001.jpg'),
                fit: BoxFit.cover,
              ),
            ),
          ),

          const Text('This is page 1'),
          TextField(
            controller: myController,
            keyboardType: TextInputType.number,
            decoration: InputDecoration(
              hintText: 'Enter some text',
              labelText: "Age",
              border: OutlineInputBorder(),
            ),
          ),

          ElevatedButton(onPressed: todo, child: Text('Submit')),

          // Go back
          ElevatedButton(
            onPressed: () => Navigator.pop(context),
            child: Text('Go back'),
          ),
        ],
      ),
    );
  }

  void todo() {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text('You entered'),
          content: Text(myController.text),

          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
          ),

          actions: [
            ElevatedButton(
              onPressed: () => {
                // Close the dialog and return to the previous page
                Navigator.pop(context),
                myController.clear(),
              },
              child: Text('OK'),
            ),
            ElevatedButton(
              onPressed: () => Navigator.pop(context),
              child: Text("Cancel"),
            ),
          ],
        );
      },
    );
  }
}
