import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAppDispatch} from '../../../../hooks';
import {AuthActions, ReportActions} from '../../../../redux';
import {LogOut} from '../../../../utils/google';

const SettingNVHC: React.FC = () => {
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(AuthActions.Logout());
    dispatch(ReportActions.clearListHistoryAdm());
    LogOut();
  };
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <TouchableOpacity onPress={signOut} style={{backgroundColor: 'blue'}}>
        <Text style={{fontSize: 40}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingNVHC;
