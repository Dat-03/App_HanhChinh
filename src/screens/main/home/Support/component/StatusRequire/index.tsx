import { View, Text } from 'react-native'
import React from 'react'
import useStyles from './styles'
import { Icon } from '@rneui/base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { normalize } from 'path';

const StatusRequire: React.FC = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Trạng thái yêu cầu</Text>
            <View >
                <View style={{ marginTop: 10 }}>
                    <View style={styles.itemStatus}>
                        <TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.icon}>
                                    <Icon name='check' type='font-awesome' color={'white'} />
                                </View>
                                <View style={{ width: 2, height: 30, backgroundColor: 'red' }}></View>
                            </View>

                        </TouchableOpacity>
                        <View style={styles.content}>
                            <Text style={styles.statusName}>Yêu cầu xử lí</Text>
                            <Text style={styles.time}>09:20 am</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.itemStatus}>
                    <TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.icon}>
                                <Icon name='check' type='font-awesome' color={'white'} />
                            </View>
                            <View style={{ width: 2, height: 30, backgroundColor: 'red' }}></View>
                        </View>

                    </TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.statusName}>Yêu cầu đã được tiếp nhận</Text>
                        <Text style={styles.time}>09:40 am</Text>
                    </View>
                </View>
                <View style={styles.itemStatus}>
                    <TouchableOpacity>
                        <View style={styles.icon1}>
                            <Icon name='rotate-left' type='Font-Awesome' />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.statusName}>Yêu cầu đã hoàn thành</Text>
                        <Text style={styles.time}>_ _ : _ _ am</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default StatusRequire