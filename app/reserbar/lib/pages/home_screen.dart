import 'package:flutter/material.dart';
//import 'dart:convert';

import '../ui/bar_card.dart';

//Map demoData= json.decode(  );


final List<Map<String, String>> bar = [
  {
    'nombre': 'Saints Bar',
    'direccion': 'Fitz Roy 1050',
    'horario': '8:00 - 12:00',
    'imagen':
        'https://img.freepik.com/foto-gratis/gran-tiro-botellas-vasos-vitrina-bar-hotel-scandic-copenhague-dinamarca_181624-2920.jpg?w=1060&t=st=1660362661~exp=1660363261~hmac=94f9a99cc8912d6fc9a6fbd2b544ee3e29e2a8ef1015805a180bbd236ec88fd5',
    'puntos': '5',
    'favorito': 'true',
  },
  {
    'nombre': 'Chulo Bar',
    'direccion': 'Belgrano 2020',
    'horario': '20:00 - 02:00',
    'imagen':
        'https://rapidapi.com/blog/wp-content/uploads/2018/06/shangyou-shi-543887-unsplash-1024x683.jpg',
    'puntos': '3.2',
    'favorito': 'false',
  },
  {
    'nombre': 'La Factoria',
    'direccion': 'Cucha Cucha 3250',
    'horario': '18:00 - 24:00',
    'imagen':
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    'puntos': '4.4',
    'favorito': 'false',
  },
  {
    'nombre': 'Vida Frita',
    'direccion': 'Recoleta 111',
    'horario': '8:00 - 24:00',
    'imagen':
        'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'puntos': '4.5',
    'favorito': 'true', 
  },
  {
    'nombre': 'Le Vered',
    'direccion': 'Teodoro Planas 1643',
    'horario': '11:00 - 15:00',
    'imagen':
        'https://images.unsplash.com/photo-1557694705-5cac01cf94a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'puntos': '4.6',
    'favorito': 'true',
  }
];



class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
       body: 
       _createList(),
       
    );
  }

  Widget _createList() {
  
    return 
      ListView.builder(
        padding: const EdgeInsets.all(18),
        itemCount: bar.length,
        itemBuilder: (BuildContext context, int index) {
      
          return Container(
            padding: const EdgeInsets.all(2),
            child: BarCard(
              title:  '${bar[index]['nombre']}',
              direction: '${bar[index]['direccion']}',
              hour: '${bar[index]['horario']}',
              thumbnail: '${bar[index]['imagen']}',
              points: '${bar[index]['puntos']}',
              favorite: '${bar[index]['favorito']}',
            ),
          );
        },
      );
  }
}
        
