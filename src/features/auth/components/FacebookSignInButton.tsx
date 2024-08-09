import React from 'react';
import {Pressable} from 'react-native';
import {useTheme} from 'hooks/useTheme';
import {TypographyStyle} from 'themes/typography';
import {authStyles} from '../styles';
import FacebookIcon from 'assets/icons/auth/FacebookIcon';
import Typography from 'components/atoms/Typography/Typography';

type FacebookSignInButtonProps = {
  onPress: () => void;
};

const FacebookSignInButton: React.FC<FacebookSignInButtonProps> = ({
  onPress,
}) => {
  const {theme, colors} = useTheme();

  const styles = authStyles(theme, colors);
  return (
    <Pressable onPress={onPress} style={[styles.button, styles.row]}>
      <FacebookIcon />
      <Typography
        style={[styles.socialText, TypographyStyle.bodyMedium as any]}>
        FACEBOOK
      </Typography>
    </Pressable>
  );
};

export default FacebookSignInButton;
