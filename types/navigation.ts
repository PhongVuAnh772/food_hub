import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  CreatingPIN: undefined; 
  ReEnteringPIN: {code: string}
};

export type CreatingPINScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreatingPIN'>;
export type ReEnteringPINScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreatingPIN'>;

export type Props = {
  navigation: CreatingPINScreenNavigationProp;
};
