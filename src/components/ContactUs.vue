<template>
  <div>
    <div class="card">
      <div class='row no-gutters'>
        <div class="col-md">
          <img :src="contactimg1" alt="Levi Nzamba" height='350' class='card-img-top'>
        </div>
        <div class="col-8">
          <div class="card-body">
            <h4>Levi Nzamba</h4>
            <p>Head Programmer</p>
            <p class="lean">For business enquiries please call:</p>
            <p>Phone Number: 07182215614</p>
            <p>Email: Picklebackblack@gmail.com</p>
          </div>
        </div>  
      </div>
    </div>
    <div class="card">
      <div class='row no-gutters'>
        <div class="col-md">
          <img :src="contactimg2" alt="Mark Kimani" height='350' class='card-img-top'>
        </div>
        <div class="col-8">
          <div class="card-body">
            <h4>Mark Kimani</h4>
            <p>Assistant Programmer</p>
            <p>Email: markmugokimani@gmail.com</p>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data(){
    return{
      contactimg1:'',
      contactimg2:''
    }
  },
  mounted: function(){
    var page = this
    firebase.storage().ref().child('contactuspage/img.jpg').getDownloadURL().then(function(url){
        page.contactimg1 = url

    })
    var page = this
    firebase.storage().ref().child('contactuspage/img2.jpg').getDownloadURL().then(function(url){
        page.contactimg2 = url

    })
  }
}
</script>

<style>

</style>