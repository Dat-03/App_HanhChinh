import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Image} from '@rneui/base';

const UpImage = () => {
  const [imgUrl, setImgUrl] = useState(
    'https://images2.thanhnien.vn/zoom/686_429/528068263637045248/2023/10/19/edit-suzygaythatvonghopbaodoona3-16976827455272043218806-0-0-745-1192-crop-16976827525551485782264.jpeg',
  );

  const openCamera = async () => {
    console.log('run');
    const options = {
      mediaType: 'photo' as const,
      saveToPhotos: true,
    };

    const result = await launchCamera(options);
    if (result?.assets && result.assets[0].uri) {
      setImgUrl(result.assets[0].uri);
      console.log(result);
    } else {
      console.log('No assets or uri in result:', result);
    }
  };

  const openGallery = async () => {
    console.log('run openGallery');
    const options = {
      mediaType: 'photo' as const,
      selectionLimit: 0,
    };

    const result = await launchImageLibrary(options);
    if (result?.assets && result.assets[0].uri) {
      setImgUrl(result.assets[0].uri);
      console.log(result);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Image
        onPress={openGallery}
        resizeMode="contain"
        style={{width: 200, height: 200}}
        source={{
          uri: imgUrl,
        }}
      />

      <TouchableOpacity
        style={{width: 100, height: 100, backgroundColor: 'green'}}
        onPress={openCamera}>
        <Text>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{width: 100, height: 100, backgroundColor: 'green'}}
        onPress={openGallery}>
        <Text>Open Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpImage;
