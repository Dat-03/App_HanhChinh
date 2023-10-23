import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {ButtonContent, Header_home} from './components';

const HomeNVHC: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View>
        <Header_home />
      </View>
      <View style={styles.content}>
        <Text style={styles.textContent}>Dịch vụ trưc tuyến </Text>
        <View style={styles.button}>
          <View>
            <ButtonContent />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeNVHC;
