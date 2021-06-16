import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  created() {

    // Google Sign-in initial
    console.log('window www', window.gapi);
    console.log('window www', window.gapi.load);
    // eslint-disable-next-line
    // console.log('www', gapi);
    
    window.gapi.load('auth2', () => {
      console.log('auth2',window.gapi.auth2.init);
      window.gapi.auth2.init({
        client_id: '1068270626453-di1gfrn0f7b7rjg0dnm2trt6qhva1e82.apps.googleusercontent.com',
      });
    });
  },
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
