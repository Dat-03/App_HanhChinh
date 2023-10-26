import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {images} from '../../../../../../assets';

const Notification_Suport: React.FC = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View style={styles.viewbig}>
          <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Image style={styles.avatar} source={item.avatar} />
          </View>
          <Text style={styles.textContent}>
            Người tiếp nhận: {item.recipient}
          </Text>
          <View style={styles.viewDate}>
            <Text style={styles.textContent}>{item.date}</Text>
            <Text style={styles.textContent}>{item.time}</Text>
            <Text style={styles.textContent}>SĐT: {item.phone}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default Notification_Suport;
const data = [
  {
    title: 'Sự cố về cơ sở vật chất',
    avatar: images.avatar,
    recipient: 'Nguyễn Văn A',
    date: '8-2-2023',
    time: '09:05 am',
    phone: '0797151033',
  },
];
