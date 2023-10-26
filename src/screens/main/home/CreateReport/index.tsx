import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import SelectDropDown from '../../../../components/customs/SelectList';
import styles from './styles';
import {BigButton, HeaderCustom, HeaderMain} from '../../../../components';
import InputCustom from '../../../../components/customs/InputCustom';
import {TouchableOpacity} from 'react-native-gesture-handler';
import UpImage from './components/UpImage';
import {backScreen} from '../../../../utils';

const CreateReport = () => {
  const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: 'Mobiles'},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers'},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];
  return (
    <View style={styles.container}>
      <HeaderMain
        onPressLeftIcon={() => backScreen()}
        leftIcon={{name: 'chevron-back-outline', type: 'ionicon'}}
        title="Báo cáo sự cố"
      />
      <View style={styles.inputContainer}>
        <SelectDropDown
          boxStyles={styles.selectStyle}
          inputStyles={styles.inputStyle}
          search={true}
          setSelected={setSelected}
          data={data}
          searchPlaceholder="Search"
          placeholder="Phòng"
        />
        <SelectDropDown
          boxStyles={styles.selectStyle}
          inputStyles={styles.inputStyle}
          search={false}
          setSelected={setSelected}
          data={data}
          searchPlaceholder="Search"
          placeholder="Sự cố đang gặp phải"
        />
        <InputCustom multiline placeholder="Mô tả sự cố" />
        <UpImage />
      </View>
      <BigButton textButton="Gửi yêu cầu" />
    </View>
  );
};

export default CreateReport;
