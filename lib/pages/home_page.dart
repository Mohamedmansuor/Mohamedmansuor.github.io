import 'package:flutter/material.dart';

import 'package:jess/pages/First_Page.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 255, 255, 255),
        title: const Text(
          'Yasmine App',
          style: TextStyle(
            color: Color.fromARGB(255, 3, 0, 3),
          ),
        ),
        centerTitle: true,
      ),
      body: first_page(),
    );
  }
}
