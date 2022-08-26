import 'dart:convert';
import 'dart:async';
import 'package:http/http.dart' as http;

import 'package:reserbar/data_types/bar_data.dart';


class _FavoritesListProvider{

  _FavoritesListProvider(){
    //
  }

  Future <List<BarData>> getData(int user) async{
    List<BarData> bars = [];
    final data = await http.get(Uri.parse('https://aqueous-castle-47771.herokuapp.com/api/v1/users/$user/favorites'));
    Map jsonResponse = jsonDecode(data.body);

    jsonResponse['favorites'].forEach(
      (element) {
        element['favorite']=true;
        bars.add(BarData.fromJson(element));
      }
    ); 
      
    return bars;
  }
}

final favoritesListProvider= _FavoritesListProvider();