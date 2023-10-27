import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SelectDropDown from '../../../../components/customs/SelectList';
import styles from './styles';
import {
  BigButton,
  ButtonCustom,
  HeaderCustom,
  HeaderMain,
} from '../../../../components';
import InputCustom from '../../../../components/customs/InputCustom';
import UpImage from './components/UpImage';
import {backScreen} from '../../../../utils';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {
  ReportActions,
  getAuthIdUser,
  getAuthUser,
  getListRoom,
  getListTypeReport,
} from '../../../../redux';

const CreateReport = () => {
  const listRoom = useAppSelector(getListRoom);
  const listTypeReport = useAppSelector(getListTypeReport);
  const dataUserApi = useAppSelector(getAuthUser);
  const idUser = useAppSelector(getAuthIdUser);
  const [selected, setSelected] = React.useState('');
  const [selectedType, setSelectedType] = React.useState('');
  const [valueInput, setValueInput] = React.useState('');

  const formdata = new FormData();
  const dispatch = useAppDispatch();

  formdata.append('user_create', idUser);
  formdata.append('room', selected);
  formdata.append('type', selectedType);
  formdata.append('description', valueInput);

  const handlePostReport = () => {
    dispatch(ReportActions.postReport(formdata));
  };

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
          setSelected={setSelectedType}
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
        <UpImage formdata={formdata} />
      </View>
      <View style={{marginTop: 40}}>
        <ButtonCustom onPress={handlePostReport} title={'Gửi yêu cầu'} />
      </View>
    </View>
  );
};

export default CreateReport;
