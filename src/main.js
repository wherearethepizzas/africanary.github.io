import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/src/'

import firebase from 'firebase/app';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyApe_70XYeSXL-m5N2y3RQUcLe4ERRTE8M",
    authDomain: "africanary.firebaseapp.com",
    databaseURL: "https://africanary.firebaseio.com",
    projectId: "africanary",
    storageBucket: "africanary.appspot.com",
    messagingSenderId: "190607660729",
    appId: "1:190607660729:web:986a53aaab9381e4b26d68",
    measurementId: "G-4XGESZSXNG"
};

firebase.initializeApp(firebaseConfig);

let app;
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})


