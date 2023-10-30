import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {images} from '../../../../../../../assets';
import ItemListReceiving from './ItemListReceiving';
import {useAppDispatch, useAppSelector} from '../../../../../../../hooks';
import {
  ReportActions,
  getListAccptReportAdm,
  getListReportAdm,
} from '../../../../../../../redux';
import {ReportType} from '../../../../../../../redux/types/report.type';

const Receiving: React.FC = () => {
  const dataListReport = useAppSelector(getListAccptReportAdm);
  const dipatch = useAppDispatch();
  useEffect(() => {
    dipatch(
      ReportActions.getListAccptReportAdm({
        myHandle: 1,
        page: 1,
        pageSize: 20,
      }),
    );
  }, []);

  const render = ({item}: {item: ReportType}) => (
    <ItemListReceiving {...item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={dataListReport}
        renderItem={render}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Receiving;
