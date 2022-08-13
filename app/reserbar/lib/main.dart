import "package:flutter/material.dart";
import 'package:reserbar/pages/login_user.dart';
import 'package:reserbar/ui/register_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Dinner',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: const LoginUser(),
        routes: {
          "/login": (context) => const LoginUser(),
          "/register": (context) => const RegisterScreen(),
        });
  }
}
