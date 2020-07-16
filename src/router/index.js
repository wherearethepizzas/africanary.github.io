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


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
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
    component: accounthome
  },
  {
    path:'/home/:username/Subjects/:subject',
    name:'',
    component:subject
  }


]

const router = new VueRouter({
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

export default router
