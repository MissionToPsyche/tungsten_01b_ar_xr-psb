import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    purple: {
      '50': '#F7EDF6',
      '100': '#EACDE5',
      '200': '#DCADD5',
      '300': '#CE8DC4',
      '400': '#C06CB3',
      '500': '#B34CA3',
      '600': '#8F3D82',
      '700': '#6B2E62',
      '800': '#471F41',
      '900': '#240F21'
    },
    darkPurple: {
      '50': '#F2EEF7',
      '100': '#DACFE8',
      '200': '#C1B0D9',
      '300': '#A991CA',
      '400': '#9172BB',
      '500': '#7953AC',
      '600': '#614389',
      '700': '#493267',
      '800': '#302145',
      '900': '#181122'
    },
    magenta: {
      '50': '#F8EDF0',
      '100': '#EBCBD4',
      '200': '#DFAAB9',
      '300': '#D2899D',
      '400': '#C56881',
      '500': '#B94666',
      '600': '#943851',
      '700': '#6F2A3D',
      '800': '#4A1C29',
      '900': '#250E14'
    },
    mustard: {
      '50': '#FFF6E5',
      '100': '#FFE5B8',
      '200': '#FFD58A',
      '300': '#FFC55C',
      '400': '#FFB42E',
      '500': '#FFA400',
      '600': '#CC8300',
      '700': '#996200',
      '800': '#664200',
      '900': '#332100'
    },
    gold: {
      '50': '#FEEFE7',
      '100': '#FBD3BB',
      '200': '#F9B890',
      '300': '#F79C64',
      '400': '#F48039',
      '500': '#F2640D',
      '600': '#C2500A',
      '700': '#913C08',
      '800': '#612805',
      '900': '#301403'
    },
    coral: {
      '50': '#FDE8EA',
      '100': '#F9BEC3',
      '200': '#F5949C',
      '300': '#F16A76',
      '400': '#ED404F',
      '500': '#E91629',
      '600': '#BA1221',
      '700': '#8C0D18',
      '800': '#5D0910',
      '900': '#2F0408'
    }
  },
  components: {
    Button: {
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px'
        }
      }
    }
  },
  fonts: {
    heading: 'Helvetica, sans-serif',
    body: 'Helvetica, sans-serif'
  },
  textStyles: {
    title: {
      fontFamily: 'Helvetica, sans-serif',
      fontSize: '12pt',
      lineHeight: '15pt',
      letterSpacing: '50%',
      color: 'magenta.500'
    },
    headline: {
      // Helvetica / Light, 32pt/38, +20 Tracking
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 'light',
      fontSize: '32pt',
      lineHeight: '38pt',
      letterSpacing: '20%',
      color: 'darkPurple.500'
    },
    bodyCopy: {
      // Helvetica / Light, 14pt/20, +20 Tracking
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 'light',
      fontSize: '14pt',
      lineHeight: '20pt',
      letterSpacing: '20%',
      color: 'darkPurple.500'
    },
    caption: {
      // Helvetica / Regular, 10pt/14, +20 Tracking
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 'regular',
      fontSize: '10pt',
      lineHeight: '14pt',
      letterSpacing: '20%',
      color: 'darkPurple.500'
    }
  }
});

export default theme;
