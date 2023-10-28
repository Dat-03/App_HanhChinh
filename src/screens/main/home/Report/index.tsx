import { View, Image } from 'react-native';
import { Text } from '@rneui/base';
import React, { FunctionComponent, useState } from 'react';
import useStyles from './styles';
import { images } from '../../../../assets';
import { Icon } from '@rneui/themed';
import { TextInput } from 'react-native-gesture-handler';
import { normalize } from 'path/posix';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native';
import Button from './Components/Button';
import { Dropdown } from 'react-native-element-dropdown';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const Report: React.FC = () => {
    const [value, setValue] = useState(String);
    const styles = useStyles();
    const [selectImage, setSelectImage] = useState('');
    const handlenPressGoback =() => {
        NavigationService.goBack();
    }
    const renderItem = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };
    const ImagePicker = () => {
        let options = {
            storageOptions: {
                path: 'images'
            },
        }
        //@ts-ignore
        launchImageLibrary(options, response => {
            //@ts-ignore
            setSelectImage(response.assets[0].uri);

        });
    };
    const Cammera = () => {
        let options = {
            storageOptions: {
                path: 'images'
            },
        }
        //@ts-ignore
        launchCamera(options, response => {
            //@ts-ignore
        setSelectImage(response.assets[0].uri);

        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='chevron-left' type='font-awesome' onPress={handlenPressGoback} />
                <Text style={styles.text}>Báo cáo sự cố</Text>
            </View>
            <View style={{ alignItems: 'center' }} >
                <TextInput style={styles.textinput} placeholder='Phòng'></TextInput>
                <Dropdown
                    style={styles.textinput}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Sự cố đang gặp phải"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                />
                <View style={styles.viewInput}>
                    <TextInput style={styles.input} multiline placeholder='Mô tả sự cố'></TextInput>
                </View>

            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.image} onPress={() => { ImagePicker() }}>
                    <Icon name='image' type='font-awesome' style={{ alignItems: 'center', paddingTop: 12 }} />
                    <Image source={{ uri: selectImage }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.image} onPress={() => { Cammera() }}>
                    <Icon name='camera' type='font-awesome' style={{ alignItems: 'center', paddingTop: 12 }} />
                    <Image source={{ uri: selectImage }} />
                </TouchableOpacity>
            </View>
            <Button />
        </View>
    )
}

export default Report

