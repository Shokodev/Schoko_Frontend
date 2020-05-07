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
    iconfont: 'md', // default - only for display purposes
  },
});
