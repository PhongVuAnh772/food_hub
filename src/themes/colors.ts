import {MD3LightTheme as LightTheme, MD3DarkTheme as DarkTheme} from "react-native-paper";
import {MD3Colors} from "react-native-paper/lib/typescript/types";

export const lightColors = {
  ...LightTheme.colors,
  primary: "rgb(64, 95, 144)",
  onPrimary: "rgb(255, 255, 255)",
  primaryContainer: "rgb(214, 227, 255)",
  onPrimaryContainer: "rgb(0, 27, 61)",

  secondary: "rgb(85, 95, 113)",
  onSecondary: "rgb(255, 255, 255)",
  secondaryContainer: "rgb(218, 226, 249)",
  onSecondaryContainer: 'rgb(19, 28, 43)',
  tertiary: "rgb(111, 85, 117)",
  onTertiary: "rgb(255, 255, 255)",
  tertiaryContainer: "rgb(249, 216, 253)",
  onTertiaryContainer: "rgb(40, 19, 46)",


  error: "rgb(186, 26, 26)",
  onError: "rgb(255, 255, 255)",
  errorContainer: "rgb(255, 218, 214)",
  onErrorContainer: "rgb(65, 0, 2)",

  surface: 'rgb(249, 249, 255)',
  surfaceBright: 'rgb(249, 249, 255)',
  surfaceDim: 'rgb(217, 217, 224)',
  

  outline: 'rgb(116, 119, 127)',
  outlineVariant: 'rgb(196, 198, 207)',
  surfaceVariant: "rgb(25, 28, 32)",
  onSurfaceVariant: "rgb(68, 71, 78)",
  surfaceContainerLowest: "rgb(255, 255, 255)",
  surfaceContainerLow: "rgb(243, 243, 250)",
  surfaceContainer: "rgb(237, 237, 244)",
  surfaceContainerHigh: "rgb(231, 232, 238)",
  surfaceContainerHighest: "rgb(226, 226, 233)",
  shadow: "rgb(0, 0, 0)",
  scrim: "rgb(0, 0, 0)",
  inverseSurface: "rgb(46, 48, 54)",
  inverseOnSurface: "rgb(240, 240, 247)",
  inversePrimary: "rgb(169, 199, 255)",
  background: "rgba(249, 249, 255, 1)",

};

export const darkColors = {
  ...DarkTheme.colors,
  primary: "rgb(169, 199, 255)",
  onPrimary: "rgb(9, 48, 95)",
  primaryContainer: "rgb(39, 71, 119)",
  onPrimaryContainer: "rgb(214, 227, 255)",
  secondary: "rgb(190, 199, 220)",
  onSecondary: "rgb(40, 49, 65)",
  secondaryContainer: "rgb(62, 71, 89)",
  onSecondaryContainer: 'rgb(218, 226, 249)',
  background: "rgba(17, 19, 24, 1)",
  tertiary: "rgb(220, 188, 225)",
  onTertiary: "rgb(63, 40, 69)",
  tertiaryContainer: "rgb(86, 62, 92)",
  onTertiaryContainer: "rgb(249, 216, 253)",

  error: "rgb(255, 180, 171)",
  onError: "rgb(105, 0, 5)",
  errorContainer: "rgb(147, 0, 10)",
  onErrorContainer: "rgb(255, 218, 214)",

  surface: 'rgb(17, 19, 24)',
  surfaceBright: 'rgb(55, 57, 62)',
  surfaceDim: 'rgb(17, 19, 24)',


  outline: 'rgb(142, 144, 153)',
  outlineVariant: 'rgb(68, 71, 78)',
  surfaceVariant: "rgb(226, 226, 233)",
  onSurfaceVariant: "rgb(196, 198, 207)",
  surfaceContainerLowest: "rgb(12, 14, 19)",
  surfaceContainerLow: "rgb(25, 28, 32)",
  surfaceContainer: "rgb(29, 32, 36)",
  surfaceContainerHigh: "rgb(40, 42, 47)",
  surfaceContainerHighest: "rgb(51, 53, 58)",
  shadow: "rgb(0, 0, 0)",
  scrim: "rgb(0, 0, 0)",
  inverseSurface: "rgb(226, 226, 233)",
  inverseOnSurface: "rgb(46, 48, 54)",
  inversePrimary: "rgb(64, 95, 144)",
};

export type Colors = typeof lightColors & typeof darkColors & MD3Colors;
