import {MD3Theme, useTheme as useThemePaper} from "react-native-paper";

import {useThemeContext} from "components/providers/ThemeProvider";
import {Colors} from "themes/colors";

export const useTheme = () => {
  return {
    ...useThemeContext(),
    ...useThemePaper<Omit<MD3Theme, "colors"> & {
      colors: Colors
    }>(),
  };
};
