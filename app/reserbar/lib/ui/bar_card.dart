import 'package:flutter/material.dart';

class BarCard extends StatelessWidget {
  const BarCard({
    Key? key,
    required this.thumbnail,
    required this.title,
    required this.direction,
    required this.hour,
  }) : super(key: key);
  final String thumbnail;
  final String title;
  final String direction;
  final String hour;

  @override
  Widget build(BuildContext context) {
    return Card(
        semanticContainer: true,
        clipBehavior: Clip.antiAliasWithSaveLayer,
        elevation: 10.0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(15.0),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Row(crossAxisAlignment: CrossAxisAlignment.center, children: const [
              Expanded(
                flex: 6,
                child: FadeInImage(
                  placeholder: NetworkImage(''),
                  image: NetworkImage(
                      'https://img.freepik.com/foto-gratis/gran-tiro-botellas-vasos-vitrina-bar-hotel-scandic-copenhague-dinamarca_181624-2920.jpg?w=1060&t=st=1660362661~exp=1660363261~hmac=94f9a99cc8912d6fc9a6fbd2b544ee3e29e2a8ef1015805a180bbd236ec88fd5'),
                  fit: BoxFit.fitWidth,
                  height: 100,
                  alignment: Alignment.center,
                ),
              ),
            ]),
            Container(
              padding: const EdgeInsets.all(10.0),
              color: const Color.fromRGBO(20, 57, 129, 0.9),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Expanded(
                    flex: 8,
                    child: _BarCardData(
                      title: title,
                      direction: direction,
                      hour: hour,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 8.0),
                    child: Card(
                      color: const Color.fromRGBO(217, 217, 217, 1),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(15.0),
                      ),
                      child: Padding(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 4.0, vertical: 1.0),
                        child: Row(children: const [
                          Icon(
                            Icons.favorite_border,
                            color: Color.fromRGBO(233, 33, 189, 1),
                            size: 25,
                          ),
                          Padding(
                            padding: EdgeInsets.all(3.0),
                            child: Text('4.4',
                                style: TextStyle(
                                  fontWeight: FontWeight.bold,
                                )),
                          ),
                        ]),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ));
  }
}

class _BarCardData extends StatelessWidget {
  const _BarCardData({
    Key? key,
    required this.title,
    required this.direction,
    required this.hour,
  }) : super(key: key);

  final String title;
  final String direction;
  final String hour;

  @override
  Widget build(BuildContext context) {
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
}
