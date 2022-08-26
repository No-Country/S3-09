import 'dart:async';
import 'package:flutter/material.dart';

import 'package:reserbar/data_types/bar_data.dart';
import 'package:reserbar/providers/favorites_list_provider.dart';
import 'package:reserbar/ui/bar_card.dart';


class FavoritosPerfil extends StatefulWidget {
  const FavoritosPerfil({super.key});
  @override
  State<FavoritosPerfil> createState() => _MyAppState();
}

class _MyAppState extends State<FavoritosPerfil> {
  late Future<List<BarData>> futureData;

  @override
  void initState() {
    super.initState();
  futureData = favoritesListProvider.getData(3);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        automaticallyImplyLeading: false,
        leading: Builder(builder: (BuildContext context) {
          return IconButton(
            onPressed: () {
              Navigator.pushReplacementNamed(context, '/home');
            },
            icon: const Icon(
              Icons.arrow_back_ios_new,
              color: Colors.black87,
            ),
          );
        }),
        elevation: 0,
        title: const Center(
            child: ListTile(
          title: Text(
            'Favoritos',
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.black54,
              fontSize: 20,
            ),
          ),
          subtitle: Text(
            'Mis bares favoritos',
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.black87,
              fontSize: 18,
            ),
          ),
        )),
      ),
      body: FutureBuilder<List<BarData>>(
        future: futureData,
        builder: ((context, AsyncSnapshot<List<BarData>> snapshot) {
          if (snapshot.hasData) {
            return snapshot.data!.isEmpty
                ? const Center(
                    child: Text('No existen restaurantes aún')
                  )
                : ListView(
                    children: _itemList(snapshot.data!),
                  );
          } else {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
        }),
      ),
    );
  }
}

List<Widget> _itemList(List<BarData> data) {
  return data.map((item) {
    return BarCard(
      id: item.id,
      thumbnail: item.img,
      title: item.name,
      direction: item.address,
      hour: '${item.openingHour} - ${item.closingHour}',
      favorite: item.favorite,
    );
  }).toList();
}