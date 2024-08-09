import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignInBallMedium from 'assets/icons/stickers/auth/SignInBallMedium';
import SignInBallRight from 'assets/icons/stickers/auth/SignInBallRight';
import SignInBallSmall from 'assets/icons/stickers/auth/SignInBallSmall';
import BackIcon from 'assets/icons/generals/BackIcon';
import {SafeAreaView} from 'react-native-safe-area-context';
import CodingInput from '../components/CodingInput';

const fill = {flex: 1};
const CreatingPIN = () => {
  return (
    <View style={styles.container}>
      <SignInBallMedium />
      <SignInBallRight />
      <SignInBallSmall />
      <BackIcon />
      <View style={styles.content}>
        <CodingInput title="creating-pin-title" description="creating-pin-description"/>
      </View>
    </View>
  );
};

export default CreatingPIN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16
  }
});
