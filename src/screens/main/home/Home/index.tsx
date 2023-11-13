import {Icon, Text} from '@rneui/base';
import {Image, View} from 'react-native';

import React, {FunctionComponent, useEffect} from 'react';

import {ButtonContent} from './components';
import styles from './styles';

import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ReportActions, getAuthUser, getImageUser} from '../../../../redux';

const Home: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const dataUserApi = useAppSelector(getAuthUser);
  const imageUser = useAppSelector(getImageUser);

  useEffect(() => {
    dispatch(ReportActions.getListCreateReport());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.image} source={{uri: imageUser}} />
          <Text style={styles.textName}>{dataUserApi.name}</Text>
        </View>

        <Icon name="bell" type="simple-line-icon" color={'white'} size={20} />
      </View>
      <View style={styles.content}>
        <Text style={styles.textContent}>Dịch vụ trưc tuyến </Text>
        <View style={styles.button}>
          <ButtonContent />
        </View>
      </View>
    </View>
  );
};

export default Home;
