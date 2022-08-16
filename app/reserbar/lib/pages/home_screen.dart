import 'package:flutter/material.dart';

import '../ui/bar_card.dart';

final List<Map<String, String>> bar = [
  {
    'nombre': 'Saints Bar',
    'direccion': 'Fitz Roy 1050',
    'horario': '8:00 - 12:00',
    'imagen':
        'https://img.freepik.com/foto-gratis/gran-tiro-botellas-vasos-vitrina-bar-hotel-scandic-copenhague-dinamarca_181624-2920.jpg?w=1060&t=st=1660362661~exp=1660363261~hmac=94f9a99cc8912d6fc9a6fbd2b544ee3e29e2a8ef1015805a180bbd236ec88fd5',
  },
  {
    'nombre': 'Saints Bar',
    'direccion': 'Fitz Roy 1050',
    'horario': '8:00 - 12:00',
    'imagen':
        'https://img.freepik.com/foto-gratis/gran-tiro-botellas-vasos-vitrina-bar-hotel-scandic-copenhague-dinamarca_181624-2920.jpg?w=1060&t=st=1660362661~exp=1660363261~hmac=94f9a99cc8912d6fc9a6fbd2b544ee3e29e2a8ef1015805a180bbd236ec88fd5',
  },
  {
    'nombre': 'Saints Bar',
    'direccion': 'Fitz Roy 1050',
    'horario': '8:00 - 12:00',
    'imagen':
        'https://img.freepik.com/foto-gratis/gran-tiro-botellas-vasos-vitrina-bar-hotel-scandic-copenhague-dinamarca_181624-2920.jpg?w=1060&t=st=1660362661~exp=1660363261~hmac=94f9a99cc8912d6fc9a6fbd2b544ee3e29e2a8ef1015805a180bbd236ec88fd5',
  },
  {
    'nombre': 'Saints Bar',
    'direccion': 'Fitz Roy 1050',
    'horario': '8:00 - 12:00',
    'imagen':
        'https://img.freepik.com/foto-gratis/gran-tiro-botellas-vasos-vitrina-bar-hotel-scandic-copenhague-dinamarca_181624-2920.jpg?w=1060&t=st=1660362661~exp=1660363261~hmac=94f9a99cc8912d6fc9a6fbd2b544ee3e29e2a8ef1015805a180bbd236ec88fd5',
  },
  {
    'nombre': 'Saints Bar',
    'direccion': 'Fitz Roy 1050',
    'horario': '8:00 - 12:00',
    'imagen':
        'https://img.freepik.com/foto-gratis/gran-tiro-botellas-vasos-vitrina-bar-hotel-scandic-copenhague-dinamarca_181624-2920.jpg?w=1060&t=st=1660362661~exp=1660363261~hmac=94f9a99cc8912d6fc9a'
  }
];

final String lala = bar[0]['nombre'].toString();

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       body: 
      //ListView(children: [
      //   const ListTile(
      //     leading: Icon(Icons.arrow_back_ios_new),
      //     title: Text('Nueva Reserva'),
      //     subtitle: Text('Elegí el Lugar'),
      //   ),
        ListView.builder(
          padding: const EdgeInsets.all(18),
          itemCount: 4,
          itemBuilder: (BuildContext context, int index) {
            return Center(
              child: Container(
                padding: const EdgeInsets.all(2),
                child: const BarCard(
                    title: 'Saints Bar',
                    direction: 'Fitz Roy 1050',
                    hour: '8:00 - 12:00',
                    thumbnail:
                        'https://img.freepik.com/foto-gratis/gran-tiro-botellas-vasos-vitrina-bar-hotel-scandic-copenhague-dinamarca_181624-2920.jpg?w=1060&t=st=1660362661~exp=1660363261~hmac=94f9a99cc8912d6fc9a'),
              ),
            );
          },
        ),
      //]      ),
    );
  }
}
