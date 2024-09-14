import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/material.dart';
import 'package:jess/model/Dates_Model.dart';

class CardWidget extends StatefulWidget {
  final DatesModel card;

  const CardWidget({Key? key, required this.card}) : super(key: key);

  @override
  _CardWidgetState createState() => _CardWidgetState();
}

class _CardWidgetState extends State<CardWidget> {
  late AudioPlayer _audioPlayer;
  bool isPlaying = false;

  @override
  void initState() {
    super.initState();
    _audioPlayer = AudioPlayer();
  }

  @override
  void dispose() {
    _audioPlayer.dispose();
    super.dispose();
  }

  void _playAudio() async {
    try {
      await _audioPlayer.setSource(AssetSource(widget.card.audioPath));
      await _audioPlayer.resume();
      setState(() {
        isPlaying = true;
      });
    } catch (e) {
      print('Error playing audio: $e');
    }
  }

  void _pauseAudio() async {
    try {
      await _audioPlayer.pause();
      setState(() {
        isPlaying = false;
      });
    } catch (e) {
      print('Error pausing audio: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.all(8),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.asset(
              widget.card.imagePath,
              fit: BoxFit.fitHeight,
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text(
                widget.card.sentence,
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w500),
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                IconButton(
                  icon: Icon(isPlaying ? Icons.pause : Icons.play_arrow),
                  onPressed: () {
                    if (isPlaying) {
                      _pauseAudio();
                    } else {
                      _playAudio();
                    }
                  },
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
