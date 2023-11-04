import {View, Text, Image} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {getAuthUser, getImageUser} from '../../../../../../redux';
import {useAppSelector} from '../../../../../../hooks';
import {Icon} from '@rneui/base';

const InfoHis = () => {
  const styles = useStyles();
  const imageUser = useAppSelector(getImageUser);
  const dataUserApi = useAppSelector(getAuthUser);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.image} source={{uri: imageUser}} />
        <Text style={styles.textName}>{dataUserApi.name}</Text>
      </View>
      <Icon name="bell" type="simple-line-icon" color={'white'} size={20} />
    </View>
  );
};

export default InfoHis;
