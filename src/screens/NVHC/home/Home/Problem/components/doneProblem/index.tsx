import {View, Text, Image, Touchable, SectionList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {BigButton, HeaderCustom} from '../../../../../../../components';
import {NavigationService} from '../../../../../../../navigation';
import {images} from '../../../../../../../assets';
import {Icon} from '@rneui/base';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {SelectList} from 'react-native-dropdown-select-list';
import colors from '../../../../../../../assets/colors';
import {useAppDispatch, useAppSelector} from '../../../../../../../hooks';
import {ReportActions, getDetail} from '../../../../../../../redux';
import {useRoute} from '@react-navigation/native';
import {routes} from '../../../../../../../constants';
interface RouteParamsIdReport {
  _id: string;
}
const DoneProblem: React.FC = () => {
  const route = useRoute();
  const _idReport = (route.params as RouteParamsIdReport)._id;
  const [value, onChangeText] = React.useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(ReportActions.getDetailReport(_idReport));
  }, []);
  const dataAccept = useAppSelector(getDetail);

  const handlePressGoback = () => {
    NavigationService.navigate(routes.PROBLEM);
  };

  const [selected, setSelected] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [problemFr, setProblemFr] = useState('');
  const [time, setTime] = useState('');
  const data = [
    {key: '1', value: 'Lỗi từ phía giáo viên'},
    {key: '2', value: 'Lỗi từ phía hệ thống'},
    {key: '3', value: 'Khác'},
  ];
  const dataTime = [
    {key: dataAccept?.type._id, value: dataAccept?.type.time_handle},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePressGoback}>
          <Icon name="chevron-left" type="feather" />
        </TouchableOpacity>
        <Text style={styles.title}>{dataAccept?.type.name}</Text>
        <Text style={styles.can}>.</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Tên người yêu cầu:</Text>
        <View style={styles.info}>
          <Image source={images.avatar} style={styles.avatar} />
          <View style={{marginEnd: 120}}>
            <Text style={styles.name}>{dataAccept?.user_create.name}</Text>
            <Text style={styles.infomation1}>
              {dataAccept?.user_create.phone}
            </Text>
          </View>
          <TouchableOpacity>
            <View style={styles.call}>
              <Icon
                name="phone"
                type="font-awesome"
                color={colors.btnPhoneCall}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.itemChild}>
          <Text style={styles.text}>Thời gian:</Text>
          <Text style={styles.infomation}>{dataAccept?.createdAt}</Text>
        </View>
        <View style={styles.itemChild}>
          <Text style={styles.text}>Phòng:</Text>
          <Text style={styles.infomation}>{dataAccept?.room.name}</Text>
        </View>
        <View style={styles.itemLastChild}>
          <Text style={styles.text}>Mô tả sự cố:</Text>
          <Text style={styles.infomation}>{dataAccept?.description}</Text>
        </View>
      </View>

      <View style={styles.dropdown}>
        <View style={{width: '60%'}}>
          <SelectList
            setSelected={(val: any) => setSelected(val)}
            data={data}
            save="value"
            placeholder="Lỗi sự cố từ"
            search={false}
            maxHeight={100}
          />
        </View>
        <View style={{width: '35%', marginHorizontal: 10}}>
          <SelectList
            setSelected={(val: any) => setSelectedTime(val)}
            data={dataTime}
            save="value"
            placeholder="Thời gian"
            search={false}
            maxHeight={100}
            defaultOption={{
              key: dataAccept?.type._id,
              value: dataAccept?.type.time_handle,
            }}
          />
        </View>
      </View>
      <View style={styles.textinput}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          onChangeText={text => onChangeText(text)}
          placeholder="Ghi chú"
          value={value}
          style={{padding: 10}}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.containerBtn}>
        <BigButton textButton="Hoàn thành" style={styles.btn} />
        <BigButton textButton="Chưa xử lý được" style={styles.btn1} />
      </View>

      <Text>{JSON.stringify(dataAccept)}</Text>
    </View>
  );
};

export default DoneProblem;
