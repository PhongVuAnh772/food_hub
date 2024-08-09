import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from 'hooks/useTheme';
import {Pressable, StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackIcon = ({size = 24}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  }
  return (
    <Pressable style={styles.container} onPress={handleBack}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M15 20.67C14.81 20.67 14.62 20.6 14.47 20.45L7.95 13.93C6.89 12.87 6.89 11.13 7.95 10.07L14.47 3.55C14.76 3.26 15.24 3.26 15.53 3.55C15.82 3.84 15.82 4.32 15.53 4.61L9.01 11.13C8.53 11.61 8.53 12.39 9.01 12.87L15.53 19.39C15.82 19.68 15.82 20.16 15.53 20.45C15.38 20.59 15.19 20.67 15 20.67Z"
          fill={colors.onBackground}
        />
      </Svg>
    </Pressable>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14.6,
    backgroundColor:'white',
    zIndex: 5,
    elevation: 5,
    position:"absolute",
    top: 35,
    left: 20,
  },
});
