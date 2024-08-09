import React from 'react';
import Svg, { Path, Defs, ClipPath, Rect } from 'react-native-svg';
import { useTheme } from 'hooks/useTheme';

const FacebookIcon = () => {
  const {theme, colors} = useTheme();
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Defs>
        <ClipPath id="clip0">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
      <Path
        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
        fill={colors.primary}
        clip-path="url(#clip0)"
      />
    </Svg>
  );
};

export default FacebookIcon;
