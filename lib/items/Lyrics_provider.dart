import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/material.dart';
import 'package:jess/model/Lyrics_Model.dart';

class AudioPlayerCard extends StatefulWidget {
  final AudioCardModel audioCard;

  AudioPlayerCard({required this.audioCard});

  @override
  _AudioPlayerCardState createState() => _AudioPlayerCardState();
}

class _AudioPlayerCardState extends State<AudioPlayerCard> {
  late AudioPlayer _audioPlayer;
  bool isPlaying = false;

  @override
  void initState() {
    super.initState();
    _audioPlayer = AudioPlayer();
  }

  @override
  void dispose() {
    _audioPlayer
        .dispose(); // Dispose of the audio player when it's no longer needed
    super.dispose();
  }

  Future<void> _playAudio() async {
    if (isPlaying) {
      await _audioPlayer.pause();
    } else {
      await _audioPlayer.play(AssetSource(widget.audioCard.audioPath));
    }
    setState(() {
      isPlaying = !isPlaying;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            Text(
              widget.audioCard.lyrics,
              textAlign: TextAlign.center,
            ),
            ElevatedButton(
              onPressed: _playAudio,
              child: Text(isPlaying ? 'Pause' : 'Play'),
            ),
          ],
        ),
      ),
    );
  }
}
