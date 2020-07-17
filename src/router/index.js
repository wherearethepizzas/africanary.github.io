import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/Home.vue'
import features from '@/components/Features.vue'
import contactus from '@/components/ContactUs.vue'
import signup from '@/components/Signup.vue'
import signin from '@/components/Signin.vue'
import accounthome from '@/components/AccountHome.vue'
import subject from '@/components/Subjects.vue'
import instituteSignup from '../components/subcomponents/signup/institutesignup.vue'
import teacherSignup from '../components/subcomponents/signup/teachersignup.vue'
import studentSchooledSignup from '../components/subcomponents/signup/studentSchooledsignup.vue'
import studentNotSchooledSignup from '../components/subcomponents/signup/studentNotSchooledsignup.vue'
import institutionhome from '../components/subcomponents/accounthome/institutionhome.vue'
import teacherhome from '../components/subcomponents/accounthome/teacherhome.vue'
import studentSchooledhome from '../components/subcomponents/accounthome/studentSchooledhome.vue'
import studentNotSchooledhome from '../components/subcomponents/accounthome/studentNotSchooledhome.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/features',
    name: 'features',
    component: features
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: contactus
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin
    
  },
  {
    path: '/home/:username',
    name: 'accounthome',
    component: accounthome,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/home/:username/Subjects/:subject',
    name:'',
    component:subject,
    meta: {
      requiresAuth: true
    }
  }


]

let router = new VueRouter({
  routes,
  mode:'history'
})

Vue.component('instituteSignUp',instituteSignup)
Vue.component('teacherSignUp',teacherSignup)
Vue.component('studentNotSchooledSignUp',studentNotSchooledSignup)
Vue.component('studentSchooledSignUp',studentSchooledSignup)
Vue.component('institutionhome',institutionhome)
Vue.component('teacherhome',teacherhome)
Vue.component('studentSchooledhome',studentSchooledhome)
Vue.component('studentNotSchooledhome',studentNotSchooledhome)

router.beforeEach((to, from, next) => {
  // Check for requiredAuth guard
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // Check if not logged in
    if(!firebase.auth().currentUser) {
      // Go to Login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to route
      next()
    }
  }
  else if(to.matched.some(record => record.meta.requiresGuest)) {
     // Check if logged in
     if(firebase.auth().currentUser) {
      // Go to accounthome
      next({
        path: '/home/:username',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to route
      next()
    }
  }
  else {
    // Proceed to route
    next()
  }
})

export default router
