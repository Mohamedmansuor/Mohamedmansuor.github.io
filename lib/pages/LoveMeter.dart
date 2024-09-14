import 'package:flutter/material.dart';

class LoveYouPage extends StatelessWidget {
  final List<Map<String, String>> phrases = [
    {'phrase': 'love you', 'language': 'English'},
    {'phrase': 'Te amo', 'language': 'Spanish'},
    {'phrase': 'Je t\'aime', 'language': 'French'},
    {'phrase': 'Ich liebe dich', 'language': 'German'},
    {'phrase': 'Ti amo', 'language': 'Italian'},
    {'phrase': 'Te quiero', 'language': 'Spanish (alternative)'},
    {'phrase': '愛してる (Aishiteru)', 'language': 'Japanese'},
    {'phrase': '사랑해 (Salanghae)', 'language': 'Korean'},
    {'phrase': '我爱你 (Wǒ ài nǐ)', 'language': 'Chinese'},
    {'phrase': 'รักคุณ (Rạk khuṇ)', 'language': 'Thai'},
    // Add more phrases and languages as needed
  ];

  final String fixedName = 'Yasmine'; // Replace with the desired name

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('I Love You in every Languages'),
        backgroundColor: const Color.fromARGB(255, 217, 0, 255),
      ),
      body: ListView.builder(
        itemCount: phrases.length,
        itemBuilder: (context, index) {
          final phrase = phrases[index];
          return Padding(
            padding: const EdgeInsets.all(8.0),
            child: ElevatedButton(
              onPressed: () {},
              child: Column(
                children: [
                  Text(
                    phrase['phrase']!,
                    style: TextStyle(fontSize: 18),
                  ),
                  SizedBox(height: 8),
                  Text(
                    phrase['language']!,
                    style: TextStyle(fontSize: 14, color: Colors.grey[700]),
                  ),
                  SizedBox(height: 8),
                  Text(
                    fixedName,
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
