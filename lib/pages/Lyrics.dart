import 'package:flutter/material.dart';
import 'package:jess/items/Lyrics_provider.dart';
import 'package:jess/model/Lyrics_Model.dart';

class Lyrics extends StatelessWidget {
  final List<AudioCardModel> audioCards = [
    AudioCardModel(
        audioPath:
            "sounds/here with me 2_14-09-24_06-13-36-410_38_24_14-09-24_18-19-12-188_1_55.wav",
        lyrics:
            'And all the time we spent Waiting for the light to take us in\n Have been the greatest moments of my life\n - every moment with have been-'),
    AudioCardModel(
      audioPath:
          "sounds/it will rain_14-09-24_06-17-29-381_79_22_14-09-24_18-14-56-174_91_13.wav",
      lyrics:
          'Cause there will be no sunlight If I lose you,\n baby There will be no clear skiesIf I lose you,\n baby Just like the clouds My eyes will do the same if you walk away\n Every day, it will rain Rain, rain',
    ),
    AudioCardModel(
      audioPath:
          "sounds/lost in your eyes_14-09-24_06-15-29-175_24_70_14-09-24_18-17-22-686_9_47.wav",
      lyrics:
          'Every moment we are together makes me hope it lasts forever (Aah, aah, aah, aah)',
    ),
    AudioCardModel(
      audioPath:
          "sounds/lucky 2_14-09-24_06-31-47-356_92_5_14-09-24_18-15-42-906_71_29.wav",
      lyrics:
          'Sometimes I want to live a quiet life with you\n Cause you are my favorite person\n That I could never lose',
    ),
    AudioCardModel(
      audioPath:
          "sounds/my_way_14-09-24_18-19-48-987_87_60_14-09-24_18-19-56-808_38_70.wav",
      lyrics:
          'Nothing in the world that I do\n means a thing without you\n I am just half alive in my struggle to survive without you\n You are my way of life,\n the only way I know,\n you are my way of life I will never let you go',
    ),
    AudioCardModel(
      audioPath:
          "sounds/where do i begin_14-09-24_06-34-14-995_71_98_14-09-24_18-15-23-088_78_85.wav",
      lyrics:
          'She fills my heart with very special things\n With angel songs, with wild imaginings\n She fills my soul with so much love\n That anywhere I go, I am never lonely\n With her along who could be lonely?\n I reach for her hand, its always there',
    ),
    AudioCardModel(
      audioPath:
          "sounds/die with a smile_14-09-24_20-24-37-417_50_60_14-09-24_20-28-51-547_79_11.wav",
      lyrics:
          'So I am love you every night Like its the last night\n If the world was ending I would wanna be next to you\n If the party was over And our time on Earth was through\n I would wanna hold you just for a while\n And die with a smile\n If the world was ending I would wanna be next to you',
    ),
    AudioCardModel(
      audioPath:
          "sounds/i will wait_14-09-24_20-28-37-908_40_44_14-09-24_20-29-11-844_54_15.wav",
      lyrics:
          'If it takes forever I will wait for you\n For a thousand summers I will wait for you',
    ),
    AudioCardModel(
      audioPath:
          "sounds/Lovesong_14-09-24_20-27-29-307_63_1_14-09-24_20-29-04-921_50_55.wav",
      lyrics:
          'Whenever I am alone with you\n You make me feel like I am fun again\n However far away I will always love you\n However long I stay I will always love you\n Whatever words I say I will always love you\n I will always love you',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Lyrics For You'),
        backgroundColor: const Color.fromARGB(255, 132, 0, 193),
      ),
      body: ListView.builder(
        itemCount: audioCards.length,
        itemBuilder: (context, index) {
          return AudioPlayerCard(audioCard: audioCards[index]);
        },
      ),
    );
  }
}
