import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Elevated button style.
    final ButtonStyle style = ElevatedButton.styleFrom(
        textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
        padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 20),
        elevation: 5,
        primary: const Color.fromRGBO(20, 57, 129, 1), // bg color
        onPrimary: Colors.white, // text color
        minimumSize: const Size(500, 50) // manage height and width
        );

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
      body: ListView(
        children: <Widget>[
          const SizedBox(height: 10),
          const Center(
            child: CircleAvatar(
              radius: 30.0,
              backgroundImage: AssetImage('assets/perfil.png'),
            ),
          ),
          const SizedBox(height: 10.0),
          const Center(child: Text("¡Hola!")),
          const SizedBox(height: 10.0),
          const Center(child: Text("Federico Castro")),
          const SizedBox(height: 20),
          Center(
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: ElevatedButton(
                  onPressed: () {},
                  style: style,
                  child: const Text("Mis Reservas")),
            ),
          ),
          Center(
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: ElevatedButton(
                  onPressed: () {},
                  style: style,
                  child: const Text("Favoritos")),
            ),
          ),
          Center(
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: ElevatedButton(
                  onPressed: () {},
                  style: style,
                  child: const Text("Mis Datos")),
            ),
          ),
          Center(
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: ElevatedButton(
                  onPressed: () {},
                  style: style,
                  child: const Text("Medios de pago")),
            ),
          ),
          Center(
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: ElevatedButton(
                  onPressed: () {}, style: style, child: const Text("Soporte")),
            ),
          ),
          const SizedBox(height: 10),
          Center(
            child: ElevatedButton.icon(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                    primary: Colors.white,
                    elevation: 0,
                    onPrimary: Colors.black),
                icon: const Icon(
                  Icons.logout_outlined,
                  color: Color.fromRGBO(20, 57, 129, 1),
                ),
                label: const Text(
                  "Cerrar Sessión",
                  style: TextStyle(
                    color: Color.fromRGBO(20, 57, 129, 1),
                  ),
                )),
          )
        ],
      ),
    );
  }
}
