import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useTheme } from 'hooks/useTheme';
const SignInBallSmall = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Svg width={50} height={75} viewBox="0 0 50 75" fill="none">
        <Circle cx={2} cy={27} r={30} stroke={colors.primary} strokeWidth={36} />
      </Svg>
    </View>
  );
};

export default SignInBallSmall;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    zIndex: 1, 
  elevation: 1,
  },
});