import React from 'react';
import { Pressable } from 'react-native';
import { useTheme } from 'hooks/useTheme';
import { TypographyStyle } from 'themes/typography';
import { authStyles } from '../styles';
import Typography from 'components/atoms/Typography/Typography';
import GoogleIcon from 'assets/icons/auth/GoogleIcon';
type GoogleSignInButtonProps = {
  onPress: () => void;
};

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ onPress }) => {
    const {theme, colors} = useTheme();

    const styles = authStyles(theme, colors);
  return (
    <Pressable onPress={onPress} style={[styles.button, styles.row]}>
      <GoogleIcon />
      <Typography
        style={[styles.socialText, TypographyStyle.bodyMedium as any]}>
        GOOGLE
      </Typography>
    </Pressable>
  );
};

export default GoogleSignInButton;
