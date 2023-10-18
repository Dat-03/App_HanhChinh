import {createTheme} from '@rneui/themed';

declare module '@rneui/themed'{
  export interface Colors {
    redcolor: string;
    background1: string;
    textBtnColor:string
  }
}
export const theme = createTheme({
  lightColors: {
    background1:'#ec449c',
    redcolor:'#FF0000',
    primary: '#F89300',
    secondary: '#FEF4E6',
    greyOutline: '#F9f9f9',
    grey5: '#B0B3B8',
    grey4: '#727272',
    divider: '#e3f3ff',
    grey1: '#F5F5F5',
    black:'#000',
    grey0:'#FFFFFF',
    textBtnColor:'#EC449C'
  },
  darkColors: {
    primary: '#F89300',
    secondary: '#FEF4E6',
    greyOutline: '#F9f9f9',
    grey5: '#B0B3B8',
    grey4: '#f1f1f4',
    divider: '#e3f3ff',
    grey1: '#1f222a',
    black:'#E4E6EB',
    grey0:'#FFFFFF'
  },
  mode: 'light',
  components:{
    
  }
 
  
   
});
