import 'package:flutter/material.dart';
import 'package:lab1/page-2.dart';
import 'package:lab1/page-3.dart';
import 'package:lab1/tab-demo.dart';

// Import the shared_preferences package to use it in our app.
// This package allows us to store simple data persistently on the device,
// which can be useful for things like saving user preferences
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // TRY THIS: Try running your application with "flutter run". You'll see
        // the application has a purple toolbar. Then, without quitting the app,
        // try changing the seedColor in the colorScheme below to Colors.green
        // and then invoke "hot reload" (save your changes or press the "hot
        // reload" button in a Flutter-supported IDE, or press "r" if you used
        // the command line to start the app).
        //
        // Notice that the counter didn't reset back to zero; the application
        // state is not lost during the reload. To reset the state, use hot
        // restart instead.
        //
        // This works for code too, not just values: Most code changes can be
        // tested with just a hot reload.
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color.fromARGB(255, 210, 89, 234),
        ),
      ),
      home: const TabDemo(),
      // home: const MyHomePage(title: 'My App 33'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  int _maximumCounter = 50;

  @override
  void initState() {
    super.initState();
    _loadCounter();
  }

  void _loadCounter() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      _counter = (prefs.getInt('counter') ?? 0);
    });
  }

  void _resetCounter() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt('counter', 0);

    setState(() {
      _counter = 0;
    });
  }

  void _incrementCounter({int value = 1}) async {
    final prefs = await SharedPreferences.getInstance();
    final newValue = (prefs.getInt('counter') ?? 0) + value;

    final int finalValue = newValue > _maximumCounter
        ? _maximumCounter
        : newValue;

    await prefs.setInt('counter', finalValue);

    setState(() {
      _counter = finalValue;
    });
  }

  void _decrementCounter({int value = 1}) async {
    final prefs = await SharedPreferences.getInstance();
    final newValue = (prefs.getInt('counter') ?? 0) - value;

    final int finalValue = newValue < 0 ? 0 : newValue;

    await prefs.setInt('counter', finalValue);

    setState(() {
      _counter = finalValue;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.

    return Scaffold(
      appBar: AppBar(
        // TRY THIS: Try changing the color here to a specific color (to
        // Colors.amber, perhaps?) and trigger a hot reload to see the AppBar
        // change color while the other colors stay the same.
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          //
          // TRY THIS: Invoke "debug painting" (choose the "Toggle Debug Paint"
          // action in the IDE, or press "p" in the console), to see the
          // wireframe for each widget.
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            const Text(
              'กดไปแล้ว:',
              style: TextStyle(fontSize: 60, color: Colors.purple),
            ),
            Text(
              '$_counter ครั้ง',
              // style: Theme.of(context).textTheme.headlineMedium,
              style: TextStyle(fontSize: 30, color: Colors.red),
            ),

            Column(
              spacing: 10,
              children: [
                // Button - Row 1
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  spacing: 20,
                  children: [
                    ElevatedButton(
                      onPressed: () {
                        _incrementCounter();
                      },
                      child: const Text('เพิ่ม 1 ครั้ง'),
                    ),
                    ElevatedButton(
                      onPressed: () {
                        _decrementCounter();
                      },
                      child: const Text('ลด 1 ครั้ง'),
                    ),
                  ],
                ),

                // Button - Row 2
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  spacing: 20,
                  children: [
                    ElevatedButton(
                      onPressed: () {
                        _incrementCounter(value: 5);
                      },
                      child: const Text('เพิ่ม 5 ครั้ง'),
                    ),
                    ElevatedButton(
                      onPressed: () {
                        _decrementCounter(value: 5);
                      },
                      child: const Text('ลด 5 ครั้ง'),
                    ),
                  ],
                ),
                ElevatedButton(
                  // Red button
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.red,
                    foregroundColor: Colors.white,
                  ),
                  onPressed: () {
                    _resetCounter();
                  },
                  child: const Text('รีเซ็ต'),
                ),
              ],
            ),

            Row(
              spacing: 20,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Go to page 2
                ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => const Page2()),
                    );
                  },
                  child: const Text('ไปหน้าที่ 2'),
                ),

                // Go to page 3
                ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => const Page3()),
                    );
                  },
                  child: const Text('ไปหน้าที่ 3'),
                ),
              ],
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.access_time),
      ),
    );
  }
}
