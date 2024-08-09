import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {useTheme} from 'hooks/useTheme';

const SignInBallRight = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Svg width="77" height="72" viewBox="0 0 77 72" fill="none">
        <Circle cx="90.5" cy="-18.5" r="90.5" fill={colors.primary} />
      </Svg>
    </View>
  );
};

export default SignInBallRight;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    zIndex: 2,
    elevation: 2,
    top: 0,
  },
});
