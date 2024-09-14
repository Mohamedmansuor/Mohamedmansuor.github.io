import 'package:flutter/material.dart';
import 'package:audioplayers/audioplayers.dart';

class AudioCard extends StatefulWidget {
  final String imagePath;
  final String paragraph;
  final String audioPath;

  AudioCard({
    required this.imagePath,
    required this.paragraph,
    required this.audioPath,
  });

  @override
  _AudioCardState createState() => _AudioCardState();
}

class _AudioCardState extends State<AudioCard> {
  late AudioPlayer audioPlayer;

  @override
  void initState() {
    super.initState();
    audioPlayer = AudioPlayer();
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Column(
        children: [
          Image.asset(widget.imagePath),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(widget.paragraph),
          ),
          ElevatedButton(
            onPressed: () {
              audioPlayer.play(AssetSource(widget.audioPath));
            },
            child: Text('Play Audio'),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    audioPlayer.dispose();
    super.dispose();
  }
}
