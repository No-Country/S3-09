import 'dart:async';
import 'package:flutter/material.dart';

import 'package:reserbar/data_types/bar_data.dart';
import 'package:reserbar/providers/bar_list_home_provider.dart';
//import 'package:reserbar/providers/favorites_list_provider.dart';
import '../ui/bar_card.dart';


class BarLandingPage extends StatefulWidget {
  
 
   const BarLandingPage({super.key});
  @override
  State<BarLandingPage> createState() => _MyAppState();
}

class _MyAppState extends State<BarLandingPage> {
  
  



  @override
  void initState() {
    super.initState();
  
    //futureData = favoritesListProvider.getData(3);
  }

  @override
  Widget build(BuildContext context) {
    Map arguments = ModalRoute.of(context)?.settings.arguments as Map;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        automaticallyImplyLeading: false,
        // leading: Builder(builder: (BuildContext context) {
        //   return IconButton(
        //     onPressed: () {
        //       Navigator.pop(context);
        //     },
        //     icon: const Icon(
        //       Icons.arrow_back_ios_new,
        //       color: Colors.black87,
        //     ),
        //   );
        // }),
        elevation: 0,
        title: const Center(
            child: ListTile(
          title: Text(
            'Nueva Reserva',
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.black54,
              fontSize: 20,
            ),
          ),
          subtitle: Text(
            'Elegí el lugar',
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.black87,
              fontSize: 18,
            ),
          ),
        )),
      ),
      body:  Center(child: Text('${arguments['title']}')),
    );
  }
}

