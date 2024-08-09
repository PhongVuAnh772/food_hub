import React, { ReactNode, forwardRef } from 'react';
import { Text as RNText, StyleSheet, TextProps as RNTextProps, TextStyle } from 'react-native';
import { useTheme } from 'hooks/useTheme';

type FontFamily = 'Roboto-Black' | 'Roboto-BlackItalic' | 'Roboto-Bold' | 'Roboto-BoldItalic' | 'Roboto-Italic';
type FontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'normal' | 'bold';

type ChildrenProps = {
  children: ReactNode;
};

type TextProps = RNTextProps &
  ChildrenProps & {
    color?: string;
    fontSize?: number;
    textAlign?: TextStyle['textAlign'];
    fontFamily?: FontFamily;
    fontWeight?: FontWeight;
    style?: TextStyle | TextStyle[];
  };

const Typography = forwardRef<RNText, TextProps>(
  (
    {
      color,
      textAlign = 'left',
      children,
      fontWeight,
      fontFamily = 'Roboto-Black',
      style,
      ...props
    },
    ref
  ) => {
    const { colors } = useTheme();

    const componentStyle: TextStyle = {
      color: color ?? colors.onSurface,
      textAlign,
      fontWeight,
      fontFamily,
      ...(StyleSheet.flatten(style as TextStyle) || {}),
    };

    return (
      <RNText allowFontScaling={false} ref={ref} style={componentStyle} {...props}>
        {children}
      </RNText>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
export type { TextProps };
