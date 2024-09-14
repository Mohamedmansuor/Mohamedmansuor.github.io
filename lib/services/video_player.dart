import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';
import 'package:chewie/chewie.dart';

class VideoPlayerScreen extends StatefulWidget {
  final String videoPath;

  VideoPlayerScreen({required this.videoPath});

  @override
  _VideoPlayerScreenState createState() => _VideoPlayerScreenState();
}

class _VideoPlayerScreenState extends State<VideoPlayerScreen> {
  late VideoPlayerController _videoPlayerController;
  ChewieController? _chewieController;

  @override
  void initState() {
    super.initState();

    _videoPlayerController = VideoPlayerController.asset(widget.videoPath)
      ..initialize().then((_) {
        setState(() {
          _chewieController = ChewieController(
            videoPlayerController: _videoPlayerController,
            autoPlay: false,
            looping: false,
            aspectRatio: _videoPlayerController.value.aspectRatio,
            showControls: true,
            showControlsOnInitialize: true,
            allowFullScreen: true,
            materialProgressColors: ChewieProgressColors(
              playedColor: const Color.fromARGB(255, 242, 80, 239),
              handleColor: const Color.fromARGB(255, 201, 7, 244),
              backgroundColor: const Color.fromARGB(255, 241, 1, 201),
              bufferedColor: const Color.fromARGB(255, 246, 5, 126),
            ),
          );
        });
      }).catchError((error) {
        setState(() {
          _chewieController = ChewieController(
            videoPlayerController: _videoPlayerController,
            autoPlay: false,
            looping: false,
            errorBuilder: (context, errorMessage) {
              return Center(child: Text('Error: $errorMessage'));
            },
          );
        });
      });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _chewieController != null &&
                _chewieController!.videoPlayerController.value.isInitialized
            ? Chewie(controller: _chewieController!)
            : CircularProgressIndicator(),
      ),
    );
  }

  @override
  void dispose() {
    _videoPlayerController.dispose();
    _chewieController?.dispose();
    super.dispose();
  }
}
