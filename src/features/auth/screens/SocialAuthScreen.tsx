import {ImageBackground, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {authStyles} from '../styles';
import {useTheme} from 'hooks/useTheme';
import GoogleSignInButton from '../components/GoogleSignInButton';
import {useGoogleAuthViewModel} from '../viewModels/GoogleAuthViewModal';
import FacebookSignInButton from '../components/FacebookSignInButton';
import {useFacebookAuthViewModel} from '../viewModels/FacebookAuthViewModal';
import background from 'assets/images/background.png';
import LinearGradient from 'react-native-linear-gradient';
import Typography from 'components/atoms/Typography/Typography';
import {TypographyStyle} from 'themes/typography';
import i18n from 'translations';
import {Divider} from 'react-native-paper';
const SocialAuthScreen = () => {
  const {userGoogle, onGoogleButtonPress} = useGoogleAuthViewModel();
  const {userFacebook, onFacebookButtonPress} = useFacebookAuthViewModel();
  const {theme, colors} = useTheme();
  const styles = authStyles(theme, colors);

  return (
    <ImageBackground
      style={styles.container}
      source={background}
      resizeMode="cover">
      <LinearGradient
        colors={['rgba(25, 27, 47, 1)', 'rgba(73, 77, 99, 0)']}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={styles.welcome}>
          <Typography
            style={[TypographyStyle.displayLarge as any, {fontWeight: '700'}]}>
            {i18n.t('welcome-to')}
          </Typography>
          <Typography
            style={[
              TypographyStyle.displayLarge as any,
              {fontWeight: '700', color: 'rgba(64, 95, 144, 1)'},
            ]}>
            {i18n.t('foodhub')}
          </Typography>
          <Typography
            style={[
              TypographyStyle.bodyLarge as any,
              {color: colors.background, width: 266},
            ]}>
            {i18n.t('social-description')}
          </Typography>
        </View>
        <View style={styles.bottom}>
          <View
            style={[
              styles.wrapSocial,
              {gap: 15, alignItems: 'center', paddingBottom: 15},
            ]}>
            <View style={styles.separator} />
            <Typography
              style={[
                {color: colors.background, paddingBottom: 5},
                TypographyStyle.bodyMedium as any,
              ]}>
              {i18n.t('signin-with')}
            </Typography>
            <View style={styles.separator} />
          </View>
          <View style={styles.wrapSocial}>
            <FacebookSignInButton onPress={onFacebookButtonPress} />
            <GoogleSignInButton onPress={onGoogleButtonPress} />
          </View>
          <Pressable onPress={onFacebookButtonPress} style={styles.navigating}>
            <Typography
              style={[
                {color: colors.background},
                TypographyStyle.bodyMedium as any,
              ]}>
              {i18n.t('navigating-social-auth')}
            </Typography>
          </Pressable>
          <View style={styles.row}>
            <Typography
              style={[styles.signin, TypographyStyle.bodyMedium as any]}>
              {i18n.t('ask-account-availible')}
            </Typography>
            <Pressable onPress={onFacebookButtonPress}>
              <Typography
                style={[
                  TypographyStyle.bodyMedium as any,
                  {color: colors.tertiary},
                ]}>
                {i18n.t('signin')}
              </Typography>
            </Pressable>
          </View>
        </View>
        <Pressable onPress={onFacebookButtonPress} style={styles.skip}>
            <Typography
              style={[
                {color: colors.onSecondaryContainer},
                TypographyStyle.bodyMedium as any,
              ]}>
              {i18n.t('skip')}
            </Typography>
          </Pressable>
      </LinearGradient>
    </ImageBackground>
  );
};

export default SocialAuthScreen;
