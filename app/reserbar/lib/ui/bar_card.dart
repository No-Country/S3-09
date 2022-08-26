import 'package:flutter/material.dart';

class BarCard extends StatelessWidget {
  const BarCard({
    Key? key,
    required this.id,
    required this.thumbnail,
    required this.title,
    required this.direction,
    required this.hour,
    required this.favorite,
  }) : super(key: key);
  final int id;
  final String thumbnail;
  final String title;
  final String direction;
  final String hour;
  final bool favorite;

  @override
  Widget build(BuildContext context) {

    return GestureDetector(
      onTap: () => Navigator.pushNamed(context, '/home', arguments: title),
      child: Container(
        width:350,
        margin: const EdgeInsets.only(left: 10, right: 10, top: 10),
        child: Card(
        clipBehavior: Clip.antiAliasWithSaveLayer,
        elevation: 10.0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(15.0),
        ),
        child: Container(
          height: 200.0,
          alignment: Alignment.bottomCenter,
          decoration: BoxDecoration(
            image: DecorationImage(
              image: NetworkImage(thumbnail),
              fit: BoxFit.cover,
            ),
          ),
          child: Container(
                height: 85.0,
                padding: const EdgeInsets.all(10.0),
                color: const Color.fromRGBO(20, 57, 129, 0.9),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Expanded(
                      flex: 7,
                      child: _barCardData(),
                    ),
                    _barCardFavourite(),
                  ],
                ),
              ),
            
        )
      )
      )
    );    
    
  }


  Widget _barCardData() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(5.0, 0.0, 0.0, 0.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text(
            title,
            style: const TextStyle(
              fontWeight: FontWeight.w500,
              fontSize: 18.0,
              color: Colors.white,
            ),
          ),
          const Padding(padding: EdgeInsets.symmetric(vertical: 2.0)),
          Text(
            direction,
            style: const TextStyle(fontSize: 16.0, color: Colors.white),
          ),
          const Padding(padding: EdgeInsets.symmetric(vertical: 1.0)),
          Text(
            hour,
            style: const TextStyle(fontSize: 16.0, color: Colors.white),
          ),
        ],
      ),
    );
  }

  Widget _barCardFavourite() {
    return   Padding(
          padding: const EdgeInsets.all(20.0),
          child:  GestureDetector(
            onTap: () => { _toggleFavorite(id) },
            child: favorite ? 
              const Icon(Icons.favorite, color: Color.fromRGBO(233, 33, 189, 1), size: 25.0,) : 
              const Icon(Icons.favorite_border, color: Colors.white, size: 25.0,)                    
          ) 
    );
  } 

  void _toggleFavorite(int id) {
    //
  }           
}