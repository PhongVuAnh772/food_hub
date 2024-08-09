import React from 'react';
import Svg, {Path, Defs, ClipPath, Rect} from 'react-native-svg';
import { useTheme } from 'hooks/useTheme';

const GoogleIcon = () => {
      const {theme, colors} = useTheme();

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Defs>
        <ClipPath id="clip0_3088_1048">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
      <Path
        d="M3.064 7.51C3.89601 5.85324 5.17237 4.46051 6.75043 3.48747C8.32849 2.51443 10.1461 1.99942 12 2C14.695 2 16.959 2.99 18.69 4.605L15.823 7.473C14.786 6.482 13.468 5.977 12 5.977C9.395 5.977 7.19 7.737 6.405 10.1C6.205 10.7 6.091 11.34 6.091 12C6.091 12.66 6.205 13.3 6.405 13.9C7.191 16.264 9.395 18.023 12 18.023C13.345 18.023 14.49 17.668 15.386 17.068C15.9054 16.726 16.3501 16.2822 16.6932 15.7635C17.0363 15.2448 17.2706 14.6619 17.382 14.05H12V10.182H21.418C21.536 10.836 21.6 11.518 21.6 12.227C21.6 15.273 20.51 17.837 18.618 19.577C16.964 21.105 14.7 22 12 22C10.6866 22.0005 9.38604 21.7422 8.17254 21.2399C6.95905 20.7375 5.85645 20.0009 4.92776 19.0722C3.99907 18.1436 3.2625 17.041 2.76013 15.8275C2.25777 14.614 1.99948 13.3134 2 12C2 10.386 2.386 8.86 3.064 7.51Z"
        fill={colors.primary}
      />
    </Svg>
  );
};

export default GoogleIcon;
