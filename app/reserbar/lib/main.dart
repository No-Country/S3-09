import "package:flutter/material.dart";
import 'package:reserbar/pages/home_page.dart';
import 'package:reserbar/pages/login_user.dart';
import 'package:reserbar/ui/perfil_widgets/favoritos.perfil.dart';
import 'package:reserbar/ui/perfil_widgets/mis_datos_perfil.dart';
import 'package:reserbar/ui/perfil_widgets/mis_medios_pago_perfil.dart';
import 'package:reserbar/ui/perfil_widgets/reservas_perfil.dart';
import 'package:reserbar/ui/perfil_widgets/soporte_perfil.dart';
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
          "/app": (context) => const HomePage(),
          // perfil
          "/app/perfil/misDatos": (context) => const MisDatosPerfil(),
          "/app/perfil/favoritos": (context) => const FavoritosPerfil(),
          "/app/perfil/misPagos": (context) => const MisMediosPagosPerfil(),
          "/app/perfil/soporte": (context) => const SoportePerfil(),
          "/app/perfil/reservas": (context) => const ReservasPerfil(),
        });
  }
}
