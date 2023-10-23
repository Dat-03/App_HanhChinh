import React from 'react';
import {Text, View} from 'react-native';
import useStyles from './styles';

const RatingScreen: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>Phòng kỹ thuật</Text>
      
    </View>
  );
};

export default RatingScreen;
