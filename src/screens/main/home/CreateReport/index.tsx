import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SelectDropDown from '../../../../components/customs/SelectList';
import styles from './styles';
import {BigButton, HeaderCustom, HeaderMain} from '../../../../components';
import InputCustom from '../../../../components/customs/InputCustom';
import UpImage from './components/UpImage';
import {backScreen} from '../../../../utils';
import {useAppSelector} from '../../../../hooks';
import {getListRoom, getListTypeReport} from '../../../../redux';

const CreateReport = () => {
  const listRoom = useAppSelector(getListRoom);
  const listTypeReport = useAppSelector(getListTypeReport);

  const [selected, setSelected] = React.useState('');
  const [valueInput, setValueInput] = React.useState('');

  console.log(valueInput);

  const dataRoom =
    listRoom?.map(room => ({
      key: room._id,
      value: room.name,
    })) || [];

  const dataTypeReport =
    listTypeReport?.map(type => ({
      key: type._id,
      value: type.name,
    })) || [];

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
          data={dataRoom}
          searchPlaceholder="Search"
          placeholder="Phòng"
        />
        <SelectDropDown
          boxStyles={styles.selectStyle}
          inputStyles={styles.inputStyle}
          search={false}
          setSelected={setSelected}
          data={dataTypeReport}
          searchPlaceholder="Search"
          placeholder="Sự cố đang gặp phải"
        />
        <InputCustom
          onChangeText={setValueInput}
          value={valueInput}
          multiline
          placeholder="Mô tả sự cố"
        />
        <UpImage />
      </View>
      <BigButton textButton="Gửi yêu cầu" />
    </View>
  );
};

export default CreateReport;
