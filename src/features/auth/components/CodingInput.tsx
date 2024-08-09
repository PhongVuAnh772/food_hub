import Typography from 'components/atoms/Typography/Typography';
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  Keyboard,
  Text,
  Animated as AnimatedView,
  Image,
  SafeAreaView,
} from 'react-native';
import i18n from 'translations';
import {TypographyStyle} from 'themes/typography';
import {useTheme} from 'hooks/useTheme';
import {useNavigation} from '@react-navigation/native';
import {CreatingPINScreenNavigationProp} from 'types/navigation';
import EncryptedStorage from 'react-native-encrypted-storage';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {useLoadingContent} from 'components/common/loading/LoadingOverlay';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {codingStyles} from '../styles';

interface CodingProps {
  title: string;
  description: string;
  pinCode?: string;
  reEntering?: boolean;
}

const CodingInput: React.FC<CodingProps> = ({
  title,
  description,
  pinCode,
  reEntering = false,
}) => {
  const {theme, colors} = useTheme();
  const [error, setError] = useState<boolean>(false);
  const {showLoadingContent, hideLoadingContent} = useLoadingContent();
  const styles = codingStyles(theme, colors, error);
  const navigation = useNavigation<CreatingPINScreenNavigationProp>();
  const offset = useSharedValue(0);
  const offsetStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });
  const fallbackOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  const inputs = useRef<Array<TextInput | null>>([]);
  const OFFSET = 15;
  const TIME = 80;
  const CELL_COUNT = 4;
  const [value, setValue] = useState<string>('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  useEffect(() => {
    if (value.length === CELL_COUNT) {
      handleCompletePin(value);
    }
    console.log(value.length);
  }, [value]);

  const handleCompletePin = async (completePin: string): Promise<void> => {
    if (!reEntering) {
      navigation.navigate('ReEnteringPIN', {code: completePin});
    } else {
      if (pinCode !== completePin) {
        setError(true);
        offset.value = withSequence(
          withTiming(-OFFSET, {duration: TIME / 2}),
          withRepeat(withTiming(OFFSET, {duration: TIME}), 4, true),
          withTiming(0, {duration: TIME / 2}),
        );
        ReactNativeHapticFeedback.trigger('impactLight', fallbackOptions);
      } else {
        try {
          Keyboard.dismiss();
          showLoadingContent();
          await EncryptedStorage.setItem('PIN', JSON.stringify(completePin));
          setTimeout(() => {
            hideLoadingContent();
            navigation.reset({
              index: 0,
              routes: [{name: 'Main'}],
            });
          }, 2000);
        } catch (error) {}
      }
    }
  };

  return (
    <View style={styles.container}>
      <Typography style={[TypographyStyle.displaySmall as any]}>
        {i18n.t(title)}
      </Typography>
      <Typography style={[TypographyStyle.bodyMedium as any]}>
        {i18n.t(description)}
      </Typography>
      <Animated.View style={[styles.codeView, offsetStyle]}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          autoFocus={true}
          onChangeText={value => {
            setError(false);
            setValue(value);
          }}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          testID="my-code-input"
          renderCell={({index, symbol, isFocused}) => {
            let textChild = null;

            if (symbol) {
              textChild =  '•';
            } else if (isFocused) {
              setError(false)
              textChild = <Cursor />;
            }
            return (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {textChild}
              </Text>
            );
          }}
        />
      </Animated.View>
    </View>
  );
};

export default CodingInput;
