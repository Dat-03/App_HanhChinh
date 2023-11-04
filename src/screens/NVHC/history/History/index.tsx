import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import useStyles from './styles';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ReportActions, getHistoryAdm} from '../../../../redux';

const HistoryNVHC: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(getHistoryAdm);

  const styles = useStyles();
  useEffect(() => {
    dispatch(ReportActions.getListHistoryAdm({pageSize: 10, page: 1}));
  }, []);

  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  );
};

export default HistoryNVHC;
