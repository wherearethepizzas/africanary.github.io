<template>
  <div>
    <div class="text-center m-5">
      <h4>Name: {{username}}</h4>
      <h6>Account type: {{accountType}}</h6>
      
    </div>
    
    <div class="container mt-5 border p-5">

      <div class="row">

          <div class="col-md-6 mt-3 mb-3" v-bind:key="subject" v-for="subject in subjects" >
              <div class="card bg-dark text-white">
                  <img height="250" src="https://i.pinimg.com/736x/46/f8/ea/46f8eafb5eef12b3f3c3e957ffde5958.jpg" class="card-img" alt="...">
          
                  <div class="card-img-overlay text-center mx-auto d-block">
                      <h3 class="card-title">{{subject}}</h3>
                      <button v-on:click="subjectdirect(subject)" class="btn btn-secondary">Discover more</button>
                  </div>
          
              </div>

          </div>

    </div>
            
    
            </div>
  </div>
</template>

<script>

import firebase from 'firebase/app'
export default {


    data (){
        return{

            username: firebase.auth().currentUser.displayName, 
            email: firebase.auth().currentUser.email,
            accountType:'',

            subjects:[]

        }
    },
    methods: {
        pageload:function (){
        var page = this

            firebase.firestore().collection('studentsNotSchooled').doc(firebase.auth().currentUser.displayName).get().then(function(doc){
                page.accountType = doc.data().accountType
                page.subjects = doc.data().subjects
            })
        },
        subjectdirect: function(subject){

            this.$router.push('/home/' + this.username + '/Subjects' + '/' + subject )
            
        },
        signout:function(){
            firebase
            .auth()
            .signOut()
            .then(() => {
                alert(this.username + ' signed out successfully')
                this.$router.push('/') 
            }, function(error) {
                alert('Sign Out Error', error);
            });
        }

    },
    mounted: function(){
        this.pageload()
    }

}
</script>

<style>

</style>