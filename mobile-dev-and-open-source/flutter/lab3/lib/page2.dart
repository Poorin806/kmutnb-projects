import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

class Page2 extends StatefulWidget {
  const Page2({super.key});

  @override
  State<Page2> createState() => _Page2State();
}

class _Page2State extends State<Page2> {
  final ImagePicker _picker = ImagePicker();
  XFile? image;
  late String result = "n/a";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Page 2')),

      body: SafeArea(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextButton(
                onPressed: () => filePicker(ImageSource.gallery),
                child: Text('Select Image from Gallery'),
              ),
              TextButton(
                onPressed: () => filePicker(ImageSource.camera),
                child: Text('Select Image from Camera'),
              ),

              const SizedBox(height: 20),

              image == null
                  ? Text('No image selected.')
                  : Image.file(
                      File(image!.path),
                      width: 200,
                      height: 200,
                      fit: BoxFit.cover,
                    ),
              image != null ? Text('Image path: ${image!.path}') : Container(),

              // Go back
              ElevatedButton(
                onPressed: () => Navigator.pop(context),
                child: Text('Go back'),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void filePicker(ImageSource src) async {
    final XFile? pickedFile = await _picker.pickImage(
      source: src,
      // source: ImageSource.gallery,
    );
    setState(() {
      result = pickedFile != null ? pickedFile.path : "No image selected.";
    });
    setState(() {
      image = pickedFile;
    });
  }
}
