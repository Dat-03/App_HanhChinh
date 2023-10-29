import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {NavigationService} from '../../../../../../../navigation';
import {routes} from '../../../../../../../constants';
import styles from './styles';
import {images} from '../../../../../../../assets';

interface Item {
  problem: string;
  name: string;
  time: string;
  building: string;
  room: string;
  date: string;
}
const ItemListProblem: React.FC<Item> = (props: any) => {
  const {problem, name, time, building, room, date} = props;
  const GotoDetail = () => {
    NavigationService.navigate(routes.DETAILPROBLEM);
  };
  return (
    <View>
      <TouchableOpacity onPress={GotoDetail}>
        <View style={styles.itemProlem}>
          <View style={styles.nameProblem}>
            <Text style={styles.problem}>{problem}</Text>
            <Text style={styles.timeOut}>10':02"</Text>
          </View>
          <View style={styles.info}>
            <Image source={images.avatar} style={styles.img} />
            <View style={{marginStart: 10}}>
              <Text style={styles.name}>{name}</Text>
              <View style={styles.location}>
                <Text>Tòa: {building}</Text>
                <Text style={styles.marginItem}>Phòng: {room}</Text>
                <Text style={styles.marginItem}>{time}</Text>
                <Text style={styles.marginItem}>{date}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemListProblem;
