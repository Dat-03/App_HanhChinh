import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {NavigationService} from '../../../../../../../navigation';
import {routes} from '../../../../../../../constants';
import styles from './styles';
import {images} from '../../../../../../../assets';
import {ReportType} from '../../../../../../../redux/types/report.type';
import {getImageUser} from '../../../../../../../redux';
import {useAppSelector} from '../../../../../../../hooks';

const ItemListReceiving: React.FC<ReportType> = props => {
  const {
    __v,
    _id,
    accept_report,
    createdAt,
    deleteAt,
    description,
    done_report,
    images,
    mistake,
    room,
    status,
    type,
    updatedAt,
    user_create,
  } = props;

  const imageUser = useAppSelector(getImageUser);

  const GotoDetail = () => {
    NavigationService.navigate(routes.DONEPROBLEM, {_id: _id});
  };
  return (
    <View>
      <TouchableOpacity onPress={GotoDetail}>
        <View style={styles.itemProlem}>
          <View style={styles.nameProblem}>
            <Text style={styles.problem}>{type.name}</Text>
            <Text style={styles.timeOut}>10':02"</Text>
          </View>
          <View style={styles.info}>
            <Image source={{uri: imageUser}} style={styles.img} />
            <View style={{marginStart: 10}}>
              <Text style={styles.name}>{user_create.name}</Text>
              <View style={styles.location}>
                <Text>Tòa: P</Text>
                <Text style={styles.marginItem}>Phòng: {room.name}</Text>
                <Text style={styles.marginItem}>{createdAt}</Text>
                {/* <Text style={styles.marginItem}>{date}</Text> */}
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemListReceiving;
