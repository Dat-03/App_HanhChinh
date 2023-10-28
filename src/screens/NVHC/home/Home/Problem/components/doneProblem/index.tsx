import { View, Text, Image, Touchable, SectionList } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { BigButton, HeaderCustom } from '../../../../../../../components'
import { NavigationService } from '../../../../../../../navigation'
import { images } from '../../../../../../../assets'
import { Icon } from '@rneui/base'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { SelectList } from 'react-native-dropdown-select-list'

const DoneProblem: React.FC = () => {
    const [value, onChangeText] = React.useState('');
    const handlePressGoback = () => {
        NavigationService.goBack();
    };
    const [selected, setSelected] = useState();
    const [selectedTime, setSelectedTime] = useState()
    const [problemFr, setProblemFr] = useState("");
    const [time, setTime] = useState("");
    const data = [
        { key: '1', value: 'Lỗi từ phía giáo viên' },
        { key: '2', value: 'Lỗi từ phía hệ thống' },
        { key: '3', value: 'Khác' },

    ]
    const dataTime = [
        { key: '1', value: '15 phút' },
        { key: '2', value: '30 phút' },
        { key: '3', value: '1 tiếng' },
        { key: '4', value: '2 tiếng' },
        { key: '5', value: '1 ngày' },

    ]

    return (
        <View style={styles.container}>
            <HeaderCustom
                leftIcon={{ name: 'left', type: 'antdesign', color: 'white' }}
                title='Sự cố về cơ sở vật chất'
                titleStyle={styles.title}
                onPressLeftIcon={handlePressGoback} />
            <View style={styles.content}>
                <Text style={styles.text}>Tên người yêu cầu:</Text>
                <View style={styles.info}>
                    <Image source={images.avatar} style={styles.avatar} />
                    <View style={{ marginEnd: 100 }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>Lê Văn Hiếu</Text>
                        <Text style={{ color: 'black', fontSize: 15 }}>0797151033</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.call}>
                            <Icon name='phone' type='font-awesome' />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <Text style={styles.text}>Thời gian:</Text>
                    <Text style={{ color: 'black', fontSize: 18, marginStart: 10 }}> 09:05 am</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <Text style={styles.text}>Phòng:</Text>
                    <Text style={{ color: 'black', fontSize: 18, marginStart: 10 }}> T1101</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10, width: '70%' }}>
                    <Text style={styles.text}>Mô tả sự cố:</Text>
                    <Text style={{ color: 'black', fontSize: 18, marginStart: 10 }}>Bóng đèn cháy, lỗi ti vi, lỗi điều hòa</Text>
                </View>
            </View>

            <View style={styles.dropdown}>
                <View style={{width:'60%'}}>
                    <SelectList
                        setSelected={(val: any) => setSelected(val)}
                        data={data}
                        save="value"
                        placeholder='Lỗi sự cố từ'
                    />
                </View>
                <View style={{width:'35%',marginHorizontal:10}}>
                    <SelectList
                        setSelected={(val: any) => setSelectedTime(val)}
                        data={dataTime}
                        save="value"
                        placeholder='Thời gian'
                    />
                </View>

            </View>
            <View style={styles.textinput}>
                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    onChangeText={text => onChangeText(text)}
                    placeholder='Ghi chú'
                    value={value}
                    style={{ padding: 10 }}
                    textAlignVertical='top'
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                <BigButton textButton='Hoàn thành' style={styles.btn} />
                <BigButton textButton='Chưa xử lý được' style={styles.btn1} />
            </View>
        </View>
    )
}

export default DoneProblem