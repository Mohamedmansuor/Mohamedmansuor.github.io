import 'package:flutter/material.dart';

class AboutHer extends StatelessWidget {
  const AboutHer({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 28, 28, 28),
        title: const Text(
          'About Her',
          style: TextStyle(
            color: Color.fromRGBO(232, 141, 222, 1),
          ),
        ),
        centerTitle: true,
      ),
      body: Center(
        child: Card(
          elevation: 4,
          margin: EdgeInsets.all(16.0),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10),
          ),
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'i dont know a lot but she is the most beautiful and postive girl that could light up your life with just a smile\nand i appreciate every second with her\nshe is blessing',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: const Color.fromRGBO(232, 141, 222, 1),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
