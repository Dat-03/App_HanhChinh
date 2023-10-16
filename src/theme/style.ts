import {createTheme} from '@rneui/themed';
import {useAppSelector} from '../hooks';

declare module '@rneui/themed' {
  export interface Colors {
    red: string;
    colorMain: string;
  }
}

export const theme = createTheme({
  lightColors: {
    primary: '#F89300',
    secondary: '#FFF7EB',
    greyOutline: '#F9f9f9',
    background: '#FFFFFF',
    grey5: '#B0B3B8',
    grey4: '#727272',
    divider: '#e3f3ff',
    grey1: '#212121',
    black: '#212121',
    grey0: '#FFFFFF',
    grey2: '#90939B',
    white: '#FFFFFF',
    red: '#FF0000',
    colorMain: '#ec449c',
  },
  darkColors: {
    primary: '#F89300',
    secondary: '#FFF7EB',
    greyOutline: '#F9f9f9',
    grey5: '#B0B3B8',
    grey4: '#f1f1f4',
    divider: '#e3f3ff',
    grey1: '#212121',
    black: '#FAFAFA',
    grey0: '#181A20',
    grey2: '#90939B',
    white: '#FFFFFF',
    background: '#181A20',

    red: '#FF0000',
  },
  components: {
    Button: (props, theme) => ({
      containerStyle: {
        backgroundColor: theme.colors.background,
        height: 100,
        width: 100,
      },
      titleStyle: {
        fontSize: 20,
      },
    }),
  },
});
