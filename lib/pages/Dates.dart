import 'package:flutter/material.dart';
import 'package:jess/items/TuneItem.dart';
import 'package:jess/model/Dates_Model.dart';

class Dates extends StatelessWidget {
  final List<DatesModel> cards = [
    DatesModel(
      imagePath: "assets/images/jess/photo1.webp",
      sentence: 'How this day feels:',
      audioPath: "sounds/photo1.wav",
    ),
    DatesModel(
      imagePath: "assets/images/jess/photo3.webp",
      sentence: 'How this day feels:',
      audioPath: "sounds/photo2.wav",
    ),
    DatesModel(
      imagePath: "assets/images/jess/photo4.webp",
      sentence: 'How this day feels:',
      audioPath: "sounds/photo3.wav",
    ),
    DatesModel(
      imagePath: "assets/images/jess/photo5.webp",
      sentence: 'How this day feels:',
      audioPath: "sounds/photo4.wav",
    ),
    DatesModel(
      imagePath: "assets/images/jess/photo6.webp",
      sentence: 'How this day feels:',
      audioPath: "sounds/photo5.wav",
    ),
    DatesModel(
      imagePath: "assets/images/jess/photo7.webp",
      sentence: 'How this day feels:',
      audioPath: "sounds/photo6.wav",
    ),
    DatesModel(
      imagePath: "assets/images/jess/photo8.webp",
      sentence: 'How this day feels:',
      audioPath: "sounds/photo7.wav",
    ),
  ];

  Dates({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Dates with you'),
        backgroundColor: const Color.fromARGB(255, 166, 2, 155),
      ),
      body: ListView.builder(
        itemCount: cards.length,
        itemBuilder: (context, index) {
          return CardWidget(card: cards[index]);
        },
      ),
    );
  }
}
