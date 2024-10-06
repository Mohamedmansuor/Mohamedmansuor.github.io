import 'package:flutter/material.dart';
import 'package:jess/items/cards.dart';

import 'package:jess/model/Cards_model.dart';

class Achievements extends StatelessWidget {
  Achievements({super.key});

  final List<CardsModel> acheivement = [
    CardsModel(
        video: "/videos/22.mp4",
        paragraph: '1- Her Eyes\n'
            'Your eyes are like mesmerizing pools of sparkling happiness. Every time I look into them, I feel like Im diving into a world of endless beauty and warmth. They captivate me and make me want to get lost in their depths forever',
        image: "images/jess/Eyes.webp"),
    CardsModel(
        video: 'assets/videos/1.MOV',
        paragraph: '2- Her Lips\n'
            'Experiencing the sweetness of her lips is like finding the ultimate temptation. Her smile, a burst of sunshine, lights up my world and leaves me dreaming about the magic of her kiss.',
        image: "images/jess/lips.webp"),
    CardsModel(
      video: "videos/hair.mov",
      paragraph: '3- Her Hair\n'
          'Running my fingers through her curly hair is like touching a wild and beautiful masterpiece. Each curl dances and twirls in the most enchanting way, framing her gorgeous face and adding to her allure.',
    ),
    CardsModel(
      video: "videos/personality.mov",
      paragraph: '4- Her Personality\n'
          'Witnessing her personality in action is like being in the presence of a beautiful blend of kindness, intelligence, and charm. Her positive energy and genuine warmth light up every room, making me endlessly grateful for her love and presence.',
    ),
    CardsModel(
        video: 'assets/videos/1.MOV',
        paragraph: '5- Her Smile\n'
            'Witnessing her smile is like discovering a hidden gem. It radiates warmth and joy, lighting up her entire face and making everyone around her feel instantly happier. Her smile is infectious, spreading happiness and positivity wherever she goes. Its a genuine and heartfelt expression that makes me feel incredibly lucky to see it every day',
        image: "images/jess/smile.webp"),
    CardsModel(
      video: "assets/videos/work.mov",
      paragraph: '6- Hard working princess\n'
          "Watching her work is like seeing a true princess in action. Her dedication and hard work shine through in everything she does. She tackles every challenge with grace and persistence, inspiring everyone around her to reach higher. Her commitment is a shining example of what it means to be both strong and noble.",
    ),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Achievements',
        ),
        elevation: 0,
        backgroundColor: const Color.fromARGB(
            255, 255, 37, 110), // Customize the color as needed
      ),
      body: ListView.builder(
          scrollDirection: Axis.vertical,
          itemCount: acheivement.length,
          itemBuilder: (context, index) {
            return Cards(
              card: acheivement[index],
            );
          }),
    );
  }
}
