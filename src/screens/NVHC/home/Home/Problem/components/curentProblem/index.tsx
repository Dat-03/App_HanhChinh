import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {normalize} from 'path';
import {images} from '../../../../../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../../../../../navigation';
import DetailProblem from '../detailProblem';
import {routes} from '../../../../../../../constants';
import ItemListProblem from './ItemListProblem';
import {useAppDispatch, useAppSelector} from '../../../../../../../hooks';
import {ReportActions, getListReportAdm} from '../../../../../../../redux';
import {ReportType} from '../../../../../../../redux/types/report.type';

const CurrentProblem: React.FC = () => {
  const dipatch = useAppDispatch();
  const dataListReport = useAppSelector(getListReportAdm);

  useEffect(() => {
    dipatch(
      ReportActions.getListReportAdm({
        myHandle: 0,
        page: 1,
        pageSize: 20,
      }),
    );
  }, []);

  const render = ({item}: {item: ReportType}) => <ItemListProblem {...item} />;

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

export default CurrentProblem;
