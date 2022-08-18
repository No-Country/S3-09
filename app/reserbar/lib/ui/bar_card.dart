import 'package:flutter/material.dart';

class BarCard extends StatelessWidget {
  const BarCard({
    Key? key,
    required this.thumbnail,
    required this.title,
    required this.direction,
    required this.hour,
    required this.points,
    required this.favorite,
  }) : super(key: key);
  final String thumbnail;
  final String title;
  final String direction;
  final String hour;
  final String points;
  final String favorite;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => Navigator.pushNamed(context, '/home', arguments: title),
      child: Card(
            semanticContainer: true,
            clipBehavior: Clip.antiAliasWithSaveLayer,
            elevation: 10.0,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(15.0),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
                  _barCardTopImage(),
                ]),
                Container(
                  padding: const EdgeInsets.all(10.0),
                  color: const Color.fromRGBO(20, 57, 129, 0.9),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Expanded(
                        flex: 8,
                        child: _barCardData(),
                      ),
                      _barCardFavourite(),
                    ],
                  ),
                ),
              ],
            )),
    );
  }

  Widget _barCardTopImage() {
    return Expanded(
      flex: 6,
      child: FadeInImage.assetNetwork(
        placeholderCacheWidth: 10,
        placeholderCacheHeight: 10,
        placeholder: 'assets/loading.gif',
        image: thumbnail,
        fit: BoxFit.fitWidth,
        height: 100,
        alignment: Alignment.center,
        fadeInDuration: const Duration(milliseconds: 200),
      ),
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
              fontSize: 14.0,
              color: Colors.white,
            ),
          ),
          const Padding(padding: EdgeInsets.symmetric(vertical: 2.0)),
          Text(
            direction,
            style: const TextStyle(fontSize: 10.0, color: Colors.white),
          ),
          const Padding(padding: EdgeInsets.symmetric(vertical: 1.0)),
          Text(
            hour,
            style: const TextStyle(fontSize: 10.0, color: Colors.white),
          ),
        ],
      ),
    );
  }

  Widget _barCardFavourite() {
    return Padding(
      padding: const EdgeInsets.only(top: 8.0),
      child: Card(
        color: const Color.fromRGBO(217, 217, 217, 1),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(15.0),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 4.0, vertical: 1.0),
          child: Row(
            children: [ 
              favorite=='true' ? const Icon(Icons.favorite, color: Color.fromRGBO(233, 33, 189, 1), size: 25.0,) : const Icon(Icons.favorite_border, color: Color.fromRGBO(233, 33, 189, 1), size: 20.0,),
              Padding(
                padding: EdgeInsets.all(3.0),
                child: Text(points,
                  style: const TextStyle(
                    fontWeight: FontWeight.bold,
                  )),
            ),
          ]),
        ),
      ),
    );
  }
            
}
