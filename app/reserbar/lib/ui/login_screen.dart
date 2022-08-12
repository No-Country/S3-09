import 'package:flutter/material.dart';
// ignore: depend_on_referenced_packages
import 'package:flutter_signin_button/flutter_signin_button.dart';

// Login Page.
class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  // Form key.
  final _formKey = GlobalKey<FormState>();

  // Edditing controllers.
  final TextEditingController emailController =
      TextEditingController(); // Email controller.
  final TextEditingController passwordController =
      TextEditingController(); // Password controller.

  @override
  Widget build(BuildContext context) {
    // Email field.
    final emailField = TextFormField(
        autofocus: false,
        controller: emailController,
        keyboardType: TextInputType.emailAddress,
        // validator: () {},
        onSaved: (value) {
          emailController.text = value!;
        },
        textInputAction: TextInputAction.next, // Change to next form.
        decoration: InputDecoration(
          hintStyle: const TextStyle(fontSize: 15),
          prefixIcon: const Icon(Icons.mail), // Icon.
          contentPadding:
              const EdgeInsets.fromLTRB(20, 15, 20, 15), // Icon Position.
          hintText: "Email", // Payload.
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(10), // Border Radius.
          ),
        ));

    // Password field.
    final passwordField = TextFormField(
        autofocus: false,
        controller: passwordController,
        obscureText: true, // Show text.
        // validator: () {},
        onSaved: (value) {
          passwordController.text = value!;
        },
        textInputAction: TextInputAction.next, // Change to next form.
        decoration: InputDecoration(
          prefixIcon: const Icon(Icons.vpn_key), // Icon.
          hintStyle: const TextStyle(fontSize: 15),
          contentPadding:
              const EdgeInsets.fromLTRB(20, 15, 20, 15), // Icon Position.
          hintText: "Contraseña", // Payload.
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(10), // Border Radius.
          ),
        ));

    // Submit button.
    final submitButton = Material(
      elevation: 5,
      borderRadius: BorderRadius.circular(10),
      textStyle: const TextStyle(fontSize: 15),
      child: MaterialButton(
        minWidth: 400,
        height: 50,
        color: const Color.fromRGBO(20, 57, 129, 1),
        onPressed: () {},
        child: const Text(
          "Iniciar sesión",
          style: TextStyle(color: Colors.white, letterSpacing: 1),
        ),
      ),
    );

    // Visible Page
    return Scaffold(
      body: Center(
        child: SingleChildScrollView(
          child: Container(
            width: 500,
            padding: const EdgeInsets.all(36.0), // Separate form.
            child: Form(
              key: _formKey, // Form enlaced.
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      // const CircleAvatar(
                      //   backgroundColor: Colors.blue,
                      SizedBox(
                        height: 150,
                        child: CircleAvatar(
                            // #143981
                            backgroundColor:
                                const Color.fromRGBO(20, 57, 129, 1),
                            radius: 30.0,
                            // ignore: use_full_hex_values_for_flutter_colors
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(10.0),
                              child: const Icon(
                                Icons.restaurant_menu,
                                size: 40.0,
                                color: Colors.white,
                              ),
                            )),
                      ),
                      const SizedBox(width: 20),
                      const Text("Diiner",
                          style: TextStyle(
                              fontFamily: 'Nunito',
                              fontSize: 40,
                              letterSpacing: 2,
                              fontWeight: FontWeight.bold,
                              color: Colors.black))
                    ],
                  ),
                  // const SizedBox(height: 10),
                  emailField,
                  const SizedBox(height: 10),
                  passwordField,
                  const SizedBox(height: 5),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      GestureDetector(
                        onTap: () {},
                        child: const Text(
                          "¿Olvidaste tu contraseña?",
                          style: TextStyle(
                            color: Colors.black,
                            fontWeight: FontWeight.w600,
                            fontSize: 15,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 20),
                  submitButton,
                  const SizedBox(height: 30),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      const Text("¿No tenes cuenta? "),
                      GestureDetector(
                        onTap: () {
                          Navigator.pushReplacementNamed(context,
                              '/register'); // Navigate to Register Page
                        },
                        child: const Text(
                          "Registrate",
                          style: TextStyle(
                            color: Colors.black,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      )
                    ],
                  ),
                  const SizedBox(height: 20),
                  const Text("Iniciar sesión con redes sociales"),
                  const SizedBox(height: 20),
                  SignInButton(
                    Buttons.GoogleDark,
                    text: "Ingresar con Google",
                    onPressed: () {},
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
