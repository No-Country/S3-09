
class BarData {
  final int id;
  final String name;
  final String address;
  final String description;
  final String openingHour;
  final String closingHour;
  final int lowestPrice;
  final int highestPrice;
  final String img;
  final bool favorite;

  BarData ({ 
    required this.id, 
    required this.name, 
    required this.address, 
    required this.description, 
    required this.openingHour, 
    required this.closingHour, 
    required this.lowestPrice, 
    required this.highestPrice, 
    required this.img,
    required this.favorite, 
  });
  
  factory BarData.fromJson(Map<String, dynamic> json) {
  
    return BarData(
      id: json['id'],
      name: json['name'],
      address: json['address'],
      description: json['description'],
      openingHour: timeFix(json['opening_hour']),
      closingHour: timeFix(json['closing_hour']),
      lowestPrice: json['lowest_price'],
      highestPrice: json['highest_price'],
      img: json['img'],   
      favorite: json['favorite']??false,  
    );
  }
}

String timeFix(String hour) {
  final time = hour.split(':');
  String timeFixed = "${time[0]}:${time[1]}";

  return timeFixed;
}
