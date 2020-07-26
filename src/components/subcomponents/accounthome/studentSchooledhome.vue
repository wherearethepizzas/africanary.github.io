<template>
  <div>
    <div class="text-center text-white  p-5 " id="inf">
      <h4>Name: {{username}}</h4>
      <h6>Form: {{form}}</h6>
      <h6>Admission Number: {{admission}}</h6>
      <h6>Account type: {{accountType}}</h6>
      
    </div>
    
    <div class="container mt-5 border p-5">

      <div class="row">

          <div class="col-md-6 mt-3 mb-3" v-bind:key="subject" v-for="subject in subjects" >
                  <img  height="250" class="card-img" alt="..." src="https://i.pinimg.com/736x/46/f8/ea/46f8eafb5eef12b3f3c3e957ffde5958.jpg">

              <div class="card text-white">
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
            form:'',
            admission:'',
            accountType:'',

            subjects:[],
        }
    },
    methods: {
        pageload:function (){
        var page = this

            firebase.firestore().collection('studentsSchooled').doc(firebase.auth().currentUser.displayName).get().then(function(doc){
                page.accountType = doc.data().accountType,
                page.form = doc.data().form
                page.admission = doc.data().admission
                page.subjects = doc.data().subjects

            })
         

        },    
        
        subjectdirect: function(subject){

            this.$router.push('/home/' + this.username + '/Subjects' + '/' + subject )
            
        }

    },
    mounted: function(){
        this.pageload()
        
        
    }
    

}

</script>

<style>
#inf {
    background-color: rgba(78, 54, 23, 0.45);
}
</style>
