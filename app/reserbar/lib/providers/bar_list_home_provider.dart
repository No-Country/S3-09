import 'dart:convert';
import 'dart:async';
import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;

import 'package:reserbar/data_types/bar_data.dart';
import 'package:reserbar/providers/favorites_list_provider.dart';


class _HomeBarListProvider{

  _HomeBarListProvider(){
    //
  }
  
  Future <List<BarData>> getData(int user)  async{
  List<BarData> bars = [];
    final favorites = await favoritesListProvider.getData(user);    
    final data = await http.get(Uri.parse('https://aqueous-castle-47771.herokuapp.com/api/v1/restaurants'));    
    Map jsonResponse = jsonDecode(data.body);
   
    jsonResponse['restaurants'].forEach((element) { 
      if (favorites.any((fav)=> fav.id == element['id'])){
        element['favorite'] = true;
      }
      bars.add(BarData.fromJson(element));    
    });
    return bars;
  }
}
final homeBarListProvider= _HomeBarListProvider();