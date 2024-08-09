import {StyleSheet, Platform} from 'react-native';

export const authStyles = (theme: any, colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    backdrop: {
      paddingHorizontal: 14,
      flex: 1,
    },
    welcome: {
      position: 'absolute',
      top: '15%',
      left: 0,
      width: '100%',
      paddingHorizontal: 20,
      gap: 10,
    },
    bottom: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      width: '100%',
      paddingHorizontal: 20,
      gap: 15,
    },
    button: {
      width: 130,
      height: 50,
      backgroundColor: colors.primaryContainer,
      borderRadius: 27.41,
      alignItems: 'center',
    },
    wrapSocial: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    navigating: {
      width: '100%',
      backgroundColor: colors.primary,
      height: 54,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
      borderRadius: 27.41,
    },
    signin: {
      textAlign: 'center',
      color: colors.primary,
    },
    row: {
      flexDirection: 'row',
      gap: 5,
      justifyContent: 'center',
    },
    socialText: {
      color: colors.onSecondaryContainer,
    },
    separator: {
      flex: 1,
      backgroundColor: 'white',
      height: 1,
    },
    skip: {
      paddingVertical: 5,
      paddingHorizontal: 12,
      backgroundColor: colors.secondaryContainer,
      position: 'absolute',
      top: 50,
      right: 20,
      borderRadius: 27.41,
    },
  });

export const loginStyles = (theme: any, colors: any) => StyleSheet.create({});

export const codingStyles = (theme: any, colors: any, errorHandler: boolean) => {
  const CELL_SIZE = 70;
  const CELL_BORDER_RADIUS = 8;

  return StyleSheet.create({
    container: {
      backgroundColor: colors.background
    },
    codeFieldRoot: {
      height: CELL_SIZE,
      marginTop: 30,
      paddingHorizontal: 20,
      justifyContent: 'center',
    },
    cell: {
      marginHorizontal: 8,
      height: CELL_SIZE,
      width: CELL_SIZE,
      lineHeight: CELL_SIZE - 5,
      ...Platform.select({web: {lineHeight: 65}}),
      fontSize: 30,
      textAlign: 'center',
      borderRadius: CELL_BORDER_RADIUS,
      color: errorHandler ? "red" : colors.primary,
      backgroundColor: colors.background,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
      borderWidth: 2,
      borderColor: errorHandler ? "red" : colors.background
    },
    focusCell: {
      borderWidth: 2,
      borderColor: colors.primary
    },
    root: {
      minHeight: 800,
      padding: 20,
    },
    title: {
      paddingTop: 50,
      color: colors.primary,
      fontSize: 25,
      fontWeight: '700',
      textAlign: 'center',
      paddingBottom: 40,
    },
    icon: {
      width: 217 / 2.4,
      height: 158 / 2.4,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    subTitle: {
      paddingTop: 30,
      color: colors.primary,
      textAlign: 'center',
    },
    nextButton: {
      marginTop: 30,
      borderRadius: 60,
      height: 60,
      backgroundColor: '#3557b7',
      justifyContent: 'center',
      minWidth: 300,
      marginBottom: 100,
    },
    nextButtonText: {
      textAlign: 'center',
      fontSize: 20,
      color: '#fff',
      fontWeight: '700',
    },
    codeView: {

    }
  });
};
