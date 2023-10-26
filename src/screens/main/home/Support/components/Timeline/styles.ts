import {normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  descriptionStyle: {
    fontSize: normalize(15),
    fontWeight: 'bold',
    color: 'black',
    marginStart: normalize(20),
  },
  titleStyle: {
    marginStart: normalize(20),
  },
  circleStyle: {
    width: normalize(50),
    height: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(25),
    backgroundColor: 'gray',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: normalize(20),
    marginBottom: normalize(20),
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: normalize(40),
    top: normalize(10),
  },
});
export default styles;
