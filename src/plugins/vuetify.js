
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#424242',
    secondary: '#283593',
    success: '#3cd1c2',
    info: '#ffaa2c',
    error: '#f83e70'
  }
})

export default new Vuetify({
  icons: {
    iconfont: 'md',// default - only for display purposes
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#1b262c',
        secondary: '#27333e',
        accent: '#e4e3e3',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        text: 'black',
        background: '#1b262c',
      },
      dark: {
        primary: '#1b262c',
        secondary: '#27333e',
        accent: '#e4e3e3',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        text: 'black',
        background: '#1b262c',
      },
    },
  },
});
