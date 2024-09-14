import 'package:flutter/material.dart';
import 'package:jess/pages/About_Her.dart';
import 'package:jess/pages/Achievements.dart';
import 'package:jess/pages/LoveMeter.dart';
import 'package:jess/pages/Dates.dart';
import 'package:jess/pages/Lyrics.dart';

class first_page extends StatelessWidget {
  const first_page({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // Horizontal scrolling area
        Container(
          height: 60, // Height of the horizontal scroll view
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: [
                ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => Achievements()),
                      );
                    },
                    child: const Text('Achievements')),
                const SizedBox(width: 8),
                ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => Dates()),
                      );
                    },
                    child: const Text('Dates')),
                const SizedBox(width: 8),
                ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => LoveYouPage()),
                      );
                    },
                    child: const Text('Love you')),
                const SizedBox(width: 8),
                ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => Lyrics()),
                      );
                    },
                    child: const Text('Lyrics')),
                const SizedBox(width: 8),
                ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => AboutHer()),
                      );
                    },
                    child: const Text('About Her')),
              ],
            ),
          ),
        ),

        Expanded(
          child: Center(
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Container(
                    child: Center(
                        child: Padding(
                      padding: const EdgeInsets.all(16),
                      child: RichText(
                        textAlign: TextAlign.left, // Adjust alignment as needed
                        text: const TextSpan(
                          style: TextStyle(
                              fontSize: 22,
                              fontWeight: FontWeight.w500,
                              fontFeatures: [FontFeature.oldstyleFigures()],
                              color: Colors.white // Default color for the text
                              ),
                          children: [
                            TextSpan(
                                text:
                                    'In a world of countless souls, she stands apart,\nWith a heart so pure, she captures every heart. Her eyes,a window to a soul so kind,\nIn her presence, true peace I find.\n'),
                            TextSpan(text: 'Welcome to the '),
                            TextSpan(
                              text: 'sweetest girl',
                              style: TextStyle(color: Colors.purpleAccent),
                            ),
                            TextSpan(text: ' in the whole world app.\n'),
                            TextSpan(
                                text:
                                    'That\'s just a simple project that could -maybe- describe how is '),
                            TextSpan(
                              text: 'Yasmine',
                              style: TextStyle(color: Colors.purpleAccent),
                            ),
                            TextSpan(text: ' is:\n'),
                            TextSpan(
                              text: 'Gorgeous,',
                              style: TextStyle(
                                  color: Color.fromARGB(255, 116, 0, 184)),
                            ),
                            TextSpan(
                              text: ' Lovely,',
                              style: TextStyle(
                                  color: Color.fromARGB(255, 105, 48, 195)),
                            ),
                            TextSpan(
                              text: ' Charming,',
                              style: TextStyle(
                                  color: Color.fromARGB(255, 94, 96, 206)),
                            ),
                            TextSpan(
                              text: ' Adorable,',
                              style: TextStyle(
                                  color: Color.fromARGB(255, 83, 144, 217)),
                            ),
                            TextSpan(
                              text: ' Angelic,',
                              style: TextStyle(
                                  color: Color.fromARGB(255, 78, 168, 222)),
                            ),
                            TextSpan(
                              text: ' annoying,',
                              style: TextStyle(
                                  color: Color.fromARGB(255, 72, 191, 227)),
                            ),
                            TextSpan(
                              text: ' Stunning ',
                              style: TextStyle(
                                  color: Color.fromARGB(255, 86, 207, 225)),
                            ),
                            TextSpan(
                              text: 'and ',
                              style: TextStyle(
                                  color: Color.fromARGB(255, 128, 255, 219)),
                            ),
                            TextSpan(
                              text: 'Breathtaking.',
                              style: TextStyle(
                                  color: Color.fromARGB(255, 100, 223, 223)),
                            ),
                          ],
                        ),
                      ),
                    )),
                  ),
                  Container(
                    child: const Text(
                      'Now, Please go ahead and use it 🤍',
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.w500,
                        fontFeatures: [FontFeature.oldstyleFigures()],
                        // Default color for the text
                      ),
                    ),
                  )
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }
}
