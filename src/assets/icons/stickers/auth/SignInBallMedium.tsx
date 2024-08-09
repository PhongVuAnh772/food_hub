import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {useTheme} from 'hooks/useTheme';
const SignInBallMedium = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Svg width="160" height="66" viewBox="0 0 160 66" fill="none">
        <Circle cx="77.5" cy="-16.5" r="82.5" fill={colors.primaryContainer} />
      </Svg>
    </View>
  );
};

export default SignInBallMedium;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    elevation: 2,
  },
});
