import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {CreatingPINScreenNavigationProp} from 'types/navigation';
import {useLoadingContent} from 'components/common/loading/LoadingOverlay';
GoogleSignin.configure({
  webClientId: `656671118341-3u6ai43knmsqbrcuvnmvievpjj6jn0ft.apps.googleusercontent.com`,
});

export const useGoogleAuthViewModel = () => {
  const [userGoogle, setUser] = useState(null);
  const navigation = useNavigation<CreatingPINScreenNavigationProp>();
  const {hideLoadingContent, showLoadingContent} = useLoadingContent();
  const onGoogleButtonPress = async () => {
    showLoadingContent();
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = (await auth().signInWithCredential(
        googleCredential,
      )) as any;
      setUser(userCredential.user);
      hideLoadingContent();

      navigation.navigate('CreatingPIN');
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  };

  return {
    userGoogle,
    onGoogleButtonPress,
  };
};
