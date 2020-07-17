<template >
  <div id="app">
    <div id="nav">
      
    <nav  class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark text-white">
       
      <a class="navbar-brand" href="/">
        <div class="logo-image">
            <img src="../src/assets/canarylogo3.jpg" class="img-fluid" alt="Canary">
        </div>
        
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
       <ul  class="navbar-nav">
        
          <li class="nav-item">
            <router-link v-if="isLoggedIn" to="/home/:username" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="!isLoggedIn" to="/features" class="nav-link">Features</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="!isLoggedIn" to="/contactus" class="nav-link">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <a v-if="isLoggedIn" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjC7Jr83tPqAhUID2MBHR5qBKUQFjAAegQIBhAB&url=https%3A%2F%2Femupedia.net%2Fbeta%2Femuos%2F&usg=AOvVaw360HQYbiDNRLDpp__Qkhyu" class="nav-link">Games</a>
          </li>
          <li class="nav-item">
            <a v-if="isLoggedIn" href="http://wherearethepizzas-chatroom.glitch.me" class="nav-link">Connect</a>
          </li>
          <li class="nav-item">
            <button v-if="isLoggedIn" v-on:click="logout" class="btn btn-danger">Sign Out</button>
          </li>

        
          </ul>
    
      </div>
    </nav>

  </div>
 <router-view v-bind:key="$route.fullPath"/> 
  </div>
</template>

<style>
  .logo-image{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: -10px;
    margin-bottom: -13px;
}
  .can{
    text-anchor: end;
  }
  

</style>
<script>
import firebase from 'firebase' 
export default {

  data(){
    return{
      isLoggedIn: false
    }
  },
  created(){
    if(firebase.auth().currentUser) {
      this.isLoggedIn = true
      this.username = firebase.auth().currentUser.displayName
    }
  },
  methods:{
    homedirect:function(){
      
    },
    logout:function () {
            firebase
            .auth()
            .signOut()
            .then(() => {
                alert(this.username + ' signed out successfully')
                this.$router.push('/signin')
                this.$router.go() 
            }, function(error) {
                alert('Sign Out Error', error);
            });
    }
  }
}
</script>
