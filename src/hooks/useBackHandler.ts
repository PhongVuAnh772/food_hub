
import { useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';
import i18n from 'translations';
const useBackHandler = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert(i18n.t("caution"), i18n.t("asking-exit"), [
        {
          text: i18n.t("cancel"),
          onPress: () => null,
          style: 'cancel',
        },
        { text: i18n.t("yes"), onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
};

export default useBackHandler;
