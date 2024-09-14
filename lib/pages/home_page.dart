import 'package:flutter/material.dart';

import 'package:jess/pages/First_Page.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 28, 28, 28),
        title: const Text(
          'Yasmine App',
          style: TextStyle(
            color: Color.fromARGB(255, 196, 0, 183),
          ),
        ),
        centerTitle: true,
      ),
      body: first_page(),
    );
  }
}
