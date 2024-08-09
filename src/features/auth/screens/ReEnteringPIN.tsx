import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignInBallMedium from 'assets/icons/stickers/auth/SignInBallMedium';
import SignInBallRight from 'assets/icons/stickers/auth/SignInBallRight';
import SignInBallSmall from 'assets/icons/stickers/auth/SignInBallSmall';
import BackIcon from 'assets/icons/generals/BackIcon';
import {SafeAreaView} from 'react-native-safe-area-context';
import CodingInput from '../components/CodingInput';
import {useRoute} from '@react-navigation/native';
import {ReEnteringPINScreenNavigationProp} from 'types/navigation';
const fill = {flex: 1};
const ReEnteringPIN = () => {
  const route = useRoute<ReEnteringPINScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <SignInBallMedium />
      <SignInBallRight />
      <SignInBallSmall />
      <BackIcon />
      <View style={styles.content}>
        <CodingInput
          title="creating-pin-title"
          description="creating-pin-description"
          pinCode={route.params?.code}
          reEntering={true}
        />
      </View>
    </View>
  );
};

export default ReEnteringPIN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
