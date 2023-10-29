import React, { FunctionComponent } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';
import HisList from './component/HisList';
import InfoHis from './component/InfoHis';

const History: React.FC = () => {

    return (
        <View style={styles.container}>
            <InfoHis />
            <HisList />
        </View>

    );
};

export default History;
