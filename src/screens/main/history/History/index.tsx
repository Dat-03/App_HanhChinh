import React, { FunctionComponent } from 'react';

import { View, Text } from 'react-native';

import useStyles from './styles';
import HisList from './component/HisList';
import InfoHis from './component/InfoHis';


const History: React.FC = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <View>
                <InfoHis />
            </View>
            <View>
                <HisList />
            </View>

        </View>

    );
};

export default History;
