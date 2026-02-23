// stf = auto create structure

import 'package:flutter/material.dart';
import 'package:lab1/main.dart';
import 'package:lab1/page-2.dart';
import 'package:lab1/page-3.dart';

class TabDemo extends StatefulWidget {
  const TabDemo({super.key});

  @override
  State<TabDemo> createState() => _TabDemoState();
}

class _TabDemoState extends State<TabDemo> with TickerProviderStateMixin {
  late final TabController _tabController;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Tab bar Example"),
        leading: Icon(Icons.ac_unit),
        bottom: TabBar(
          controller: _tabController,
          tabs: const <Widget>[
            Tab(icon: Icon(Icons.directions_car)),
            Tab(icon: Icon(Icons.directions_transit)),
            Tab(icon: Icon(Icons.directions_bike)),
          ],
        ),
        backgroundColor: Colors.amber[300],
      ),
      body: TabBarView(
        controller: _tabController,
        children: <Widget>[
          MyHomePage(title: "Homepage"),
          Page2(),
          Page3(),
        ],
      ),
    );
  }
}
