import {createContext, PropsWithChildren, useContext, useEffect, useMemo, useState} from 'react';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {MD3DarkTheme, MD3LightTheme, MD3Theme} from "react-native-paper";
import { darkColors, lightColors } from 'themes/colors';

type Theme = "light" | "dark"

type Context = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
  paperTheme: MD3Theme;
  navigationTheme: NavigationTheme;
};

export const ThemeContext = createContext<Context>({
  theme: 'light',
  changeTheme: () => {
  },
  paperTheme: MD3LightTheme,
  navigationTheme: NavigationLightTheme,
});

export const useThemeContext = () => useContext(ThemeContext);

type Props = PropsWithChildren;

export default function ThemeProvider({children}: Props) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    AsyncStorage.getItem('theme').then((theme: any) => {
      if (!theme) {
        AsyncStorage.setItem('theme', 'light');
        setTheme("light");
      } else {
        setTheme(theme);
      }
    });
  }, []);

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
    AsyncStorage.setItem('theme', theme);
  };

  const colors = theme === 'light' ? lightColors : darkColors;

  const paperTheme: MD3Theme = {
    ...(theme === 'light' ? MD3LightTheme : MD3DarkTheme),
    colors: {
      ...(theme === 'light' ? MD3LightTheme.colors : MD3DarkTheme.colors),
      ...colors,
    },
  };

  const navigationTheme: NavigationTheme = {
    ...(theme === 'light' ? NavigationLightTheme : NavigationDarkTheme),
    colors: {
      ...(theme === 'light' ? NavigationLightTheme.colors : NavigationDarkTheme.colors),
      primary: colors.primary,
      background: colors.background,
      card: colors.background,
    },
  };

  const value = useMemo(() => {
    return {theme, changeTheme, paperTheme, navigationTheme};
  }, [changeTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

