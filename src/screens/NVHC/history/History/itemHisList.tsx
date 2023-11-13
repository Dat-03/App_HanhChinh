import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {makeStyles, normalize} from '@rneui/themed';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {images} from '../../../../assets';
import colors from '../../../../assets/colors';
import {ReportType} from '../../../../redux/types/report.type';
import {useAppSelector} from '../../../../hooks';
import {getImageUser} from '../../../../redux';

const ItemHisList: React.FC<ReportType> = props => {
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
    user_handle,
  } = props;
  const imagesUser = useAppSelector(getImageUser);

  const clickDetail = () => {
    NavigationService.navigate(routes.TIME_LINE_NVHC, {_id: _id});
  };

  return (
    <View>
      <TouchableOpacity onPress={clickDetail}>
        <View style={styles.hislist}>
          <View>
            <Text style={styles.title1}>{type ? type.name : 'No type'}</Text>
            {user_handle ? (
              <Text style={{color: 'black'}}>
                Người tiếp nhận: {user_handle.name}
              </Text>
            ) : (
              <Text style={{color: 'black'}}>
                Người tiếp nhận: Chưa tiếp nhận
              </Text>
            )}
            <View style={styles.info}>
              <Text style={{color: 'black'}}>{createdAt}</Text>
              {/* <Text style={styles.text}>{time} am</Text> */}
              <Text style={styles.text}>Phòng: {room.name}</Text>
            </View>
          </View>
          <View style={styles.avatar}>
            <Image source={{uri: imagesUser}} style={styles.img} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemHisList;

const styles = StyleSheet.create({
  hislist: {
    height: normalize(100),
    backgroundColor: colors.itemColor,
    borderRadius: normalize(5),
    marginHorizontal: normalize(10),
    marginVertical: normalize(10),
    flexDirection: 'row',
    paddingLeft: normalize(10),
    justifyContent: 'space-between',
  },
  title1: {
    color: colors.black,
    fontSize: normalize(15),
    fontWeight: 'bold',
    marginBottom: normalize(15),
    marginTop: normalize(10),
  },
  info: {
    flexDirection: 'row',
    marginTop: normalize(5),
  },
  text: {
    color: colors.black,
    marginLeft: normalize(20),
  },
  avatar: {
    justifyContent: 'center',
    marginRight: normalize(20),
  },
  img: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(50),
  },
});
