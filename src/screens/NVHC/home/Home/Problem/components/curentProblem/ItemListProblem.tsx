import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {NavigationService} from '../../../../../../../navigation';
import {routes} from '../../../../../../../constants';
import styles from './styles';
import {images} from '../../../../../../../assets';
import {
  ListReportAdmType,
  ReportType,
} from '../../../../../../../redux/types/report.type';
import {useAppSelector} from '../../../../../../../hooks';
import {getImageUser, getIsLoadingPage} from '../../../../../../../redux';

const ItemListProblem: React.FC<ReportType> = props => {
  const {
    _id,
    createdAt,
    deleteAt,
    description,
    images,
    room,
    status,
    type,
    updatedAt,
    user_create,
  } = props;
  const imageUser = useAppSelector(getImageUser);

  const GotoDetail = () => {
    NavigationService.navigate(routes.DETAILPROBLEM, {_id: _id});
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
            <View style={{paddingStart: 10}}>
              <Text style={styles.name}>{user_create.name}</Text>
              <View style={styles.location}>
                <Text style={styles.marginItem}>Tòa:T</Text>
                <Text style={styles.marginItem}>Phòng: {room.name}</Text>
                {/* <Text style={styles.marginItem}>{time}</Text> */}
                <Text style={styles.marginItem}>{createdAt}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemListProblem;
