import 'package:flutter/material.dart';

import '../ui/login_screen.dart';
import '../ui/register_screen.dart';

class LoginUser extends StatelessWidget {
  const LoginUser({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return PageView(
      // ignore: prefer_const_literals_to_create_immutables
      children: [
        const LoginScreen(),
        const RegisterScreen(),
      ],
    );
  }
}
