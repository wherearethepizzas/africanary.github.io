<template>
    <div>  
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="slide1" class="d-block w-100"  alt="...">
      <div class="carousel-caption d-none d-block">
        <h5>Engage</h5>
        <p class="text-light">Practice a variety of exercises and be able to access a wide database of knowledge through Canary.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="slide2" class="d-block w-100"  alt="...">
      <div class="carousel-caption d-block">
        <h5 class="text-dark">Share</h5>
        <p class="text-dark">Work with others and share experiences with them.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="slide3" class="d-block w-100"  alt="...">
      <div class="carousel-caption d-block">
        <h5>Grow</h5>
        <p class="text-lg-center">Through Canary, a user's progress is measured and they are able to track their progress.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="slide4" class="d-block w-100"  alt="...">
      <div class="carousel-caption d-block">
        <h5 class="text-dark">Go Further</h5>
        <p class="text-light">A tool is only as good as its wielder.<br> We urge you to be curious and strive to learn more.</p>
      </div>
    </div>
  </div>
  
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<header>
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" :src="videoback">
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-3">Sign Up</h1>
        <p class="lead mb-0">Get connected to access our resources and start learning now.</p>
        <button class="btn btn-dark btn-lg m-5"><router-link to='/signup' class="text-white">Sign Up</router-link></button>
        <p>Already have an account?<router-link class="link" to="/signin">Sign in</router-link></p>
      </div>
    </div>
  </div>
</header>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data(){
    return{
      slide1:'',
      slide2:'',
      slide3:'',
      slide4:'',
      videoback:''
    }
  },
  mounted: function(){
    var page = this
    firebase.storage().ref().child('homepage/slide1.jpg').getDownloadURL().then(function(url){
      page.slide1 = url

    })
    firebase.storage().ref().child('homepage/slide2.jpg').getDownloadURL().then(function(url){
      page.slide2 = url

    })
    firebase.storage().ref().child('homepage/slide3.jpg').getDownloadURL().then(function(url){
      page.slide3 = url

    })
    firebase.storage().ref().child('homepage/slide4.jpg').getDownloadURL().then(function(url){
      page.slide4 = url

    })
    firebase.storage().ref().child('homepage/typing.mp4').getDownloadURL().then(function(url){
      page.videoback = url

    })
  }

}
</script>

<style scoped>
header {
  position: relative;
  background-color: black;
  height: 30vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.2;
  z-index: 1;
}

div img {
  max-height: 620px;
  min-height: 350px;
}

#pcontent {
  color:gainsboro;
  opacity: 1;
  
}



</style>