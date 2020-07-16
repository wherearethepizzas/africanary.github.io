<template>
  <div id="app">
    <div id="nav">
      
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark text-white">
       
      <a class="navbar-brand" href="/">
        <div class="logo-image">
            <img src="../src/assets/canarylogo3.jpg" class="img-fluid" alt="Canary">
        </div>
        
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav">
        
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/features" class="nav-link">Features</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contactus" class="nav-link">Contact Us</router-link>
          </li>
        
          </ul>
    
      </div>
    </nav>

  </div>
  <router-view/>
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

    }
  },
  methods:{
    homedirect:function(){
      
    }
  }
}
</script>
