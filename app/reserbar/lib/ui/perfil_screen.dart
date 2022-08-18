import 'package:flutter/material.dart';
import 'package:reserbar/ui/perfil_widgets/home_perfil.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        leading: Builder(builder: (BuildContext context) {
          return IconButton(
              onPressed: () {},
              icon: const Icon(
                Icons.arrow_back_ios_new,
                color: Colors.black,
                size: 15.0,
              ));
        }),
        elevation: 0,
        title: const Text(
          "Mi cuenta",
          style: TextStyle(color: Colors.black),
        ),
      ),
      body: const HomePerfil(),
    );
  }
}
