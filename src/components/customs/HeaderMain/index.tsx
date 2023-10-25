import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header, Icon} from '@rneui/base';
import {CustomHeaderMainProps} from './type';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderMain: React.FunctionComponent<CustomHeaderMainProps> = props => {
  return (
    <View style={styles.container}>
      <Header
        barStyle="dark-content"
        centerComponent={
          <Text style={props.titleStyle || styles.textTitle}>
            {props.title}
          </Text>
        }
        centerContainerStyle={{
          justifyContent: 'center',
          paddingHorizontal: 0,
        }}
        containerStyle={styles.container}
        leftComponent={
          <TouchableOpacity onPress={props.onPressLeftIcon}>
            {props.leftIcon?.name && (
              <Icon
                type={props.leftIcon.type}
                name={props.leftIcon.name}
                size={24}
                color={props.leftIcon.color || styles.leftIcon.color}
              />
            )}
          </TouchableOpacity>
        }
        leftContainerStyle={{justifyContent: 'center'}}
        placement="left"
        rightComponent={
          <TouchableOpacity onPress={props.onPressRightIcon}>
            {props.rightIcon?.name && (
              <Icon
                type={props.rightIcon?.type}
                size={24}
                name={props.rightIcon?.name}
                color={props.rightIcon?.color || styles.rightIcon.color}
              />
            )}
          </TouchableOpacity>
        }
        rightContainerStyle={{justifyContent: 'center'}}
        hideStatusBar={true}
        backgroundColor="transparent"
      />
    </View>
  );
};

export default HeaderMain;
