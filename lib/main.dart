import 'package:flutter/material.dart';
import 'package:jess/pages/Achievements.dart';

import 'package:jess/pages/home_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        // Optional: Define a light theme

        home: HomePage());
  }
}
