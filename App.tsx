import 'react-native-gesture-handler';
import './src/translations/index.js';
import React, {useEffect} from 'react';
import {Platform, UIManager,StatusBar,BackHandler,Alert} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Root from 'Root';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ComposeProviders from 'components/providers/ComposeProviders';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {PaperProvider} from 'react-native-paper';
import ThemeProvider from 'components/providers/ThemeProvider';
import {useTheme} from 'hooks/useTheme';
import SplashScreen from 'react-native-splash-screen'
import useBackHandler from 'hooks/useBackHandler';
import {LoadingContentProvider} from "components/common/loading/LoadingOverlay";

const fill = {flex: 1};

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function AppInner() {
  const {paperTheme} = useTheme();
  useBackHandler();

  return (
    <GestureHandlerRootView style={fill}>
      <PaperProvider theme={paperTheme}>
        <LoadingContentProvider>
        <StatusBar barStyle="dark-content" translucent backgroundColor="transparent"/>
        <Root />
        </LoadingContentProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, [])
  
  return (
    <ComposeProviders components={[
      SafeAreaProvider, 
      ThemeProvider
      ]}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppInner />
        </PersistGate>
      </Provider>
    </ComposeProviders>
  );
};

export default App;
