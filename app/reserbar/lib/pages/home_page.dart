import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';

import 'package:reserbar/ui/perfil_screen.dart';
import 'package:reserbar/ui/qr_screen.dart';
import 'package:reserbar/ui/reserbar_screen.dart';
import 'package:reserbar/ui/search_screen.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  void initState() {
    _selectedIndex = 0;
    debugPrint("adsad $_selectedIndex"); // DEBUG
    super.initState();
  }

  int _selectedIndex = 0;

  var _currentPage;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
    switch (_selectedIndex) {
      case 0:
        setState(() {
          _currentPage = const ReserbarScreen();
        });
        break;
      case 1:
        setState(() {
          _currentPage = const QrScreen();
        });
        break;
      case 2:
        setState(() {
          _currentPage = const ProfileScreen();
        });
        break;
      case 3:
        setState(() {
          _currentPage = const SearchScreen();
        });
        break;
      default:
        setState(() {
          _currentPage = const ReserbarScreen();
        });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _currentPage,
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.restaurant_menu),
            label: 'ReserBar',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.qr_code),
            label: 'Mi ID',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.account_circle),
            label: 'Perfil',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: 'Buscar',
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: const Color.fromRGBO(20, 57, 129, 1),
        onTap: _onItemTapped,
      ),
    );
  }
}
