import 'package:flutter/material.dart';
import 'package:jess/model/Cards_model.dart';
import 'package:jess/services/video_player.dart';

class Cards extends StatelessWidget {
  const Cards({super.key, required this.card});
  final CardsModel card;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8),
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            SizedBox(height: 20),
            if (card.image ==
                null) // Assuming `isVideo` is a boolean property in CardsModel
              Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                mainAxisSize: MainAxisSize.max,
                children: [
                  Text(
                    card.paragraph,
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      fontWeight: FontWeight.w200,
                      color: const Color.fromARGB(255, 236, 234, 234),
                      fontSize: 22,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Container(
                      height: 300,
                      width: 200, // Adjust the height as needed
                      child: VideoPlayerScreen(
                        videoPath: card.video,
                      ),
                    ),
                  ),
                ],
              )
            else
              Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    card.paragraph,
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      color: const Color.fromARGB(255, 205, 204, 204),
                      fontWeight: FontWeight.w200,
                      fontSize: 20,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Center(
                      child: Container(
                        height: 350,
                        width: 500,
                        decoration: BoxDecoration(
                          image: DecorationImage(
                            image: AssetImage(card.image!),
                            fit: BoxFit.cover,
                          ),
                          borderRadius: BorderRadius.all(Radius.circular(15)),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
          ],
        ),
      ),
    );
  }
}
