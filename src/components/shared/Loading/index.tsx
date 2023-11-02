import React, {FunctionComponent} from 'react';

import {Text} from '@rneui/themed';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {useAppSelector} from '../../../hooks';

import useStyles from './styles';

import {jsonFiles} from '../../../assets/json';
import {getIsLoading} from '../../../redux';

const AnimatedView = Animated.createAnimatedComponent(View);

const Loading: FunctionComponent = () => {
  // hooks
  const styles = useStyles();
  const progress = useSharedValue(0.5);
  const isLoading: boolean = useAppSelector(getIsLoading);

  const overlayStyle = useAnimatedStyle(() => {
    const background = interpolateColor(
      progress.value,
      [0, 1, 0],
      ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)'],
    );

    return {
      backgroundColor: background,
    };
  }, []);

  // when animation run => update containerStyle
  const containerStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1, 0],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale: scale}],
    };
  }, []);

  // if isShow = false => not show anything
  if (!isLoading) {
    return <View />;
  }

  return (
    <AnimatedView style={[styles.overlay, overlayStyle]}>
      <AnimatedView style={[styles.container, containerStyle]}>
        <LottieView
          style={styles.lottieView}
          source={jsonFiles.loading2}
          autoPlay
        />
      </AnimatedView>
    </AnimatedView>
  );
};

export default Loading;
