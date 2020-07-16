<template>
    <div class="body" v-bind:style="{ backgroundImage: 'url(' + backimg + ')' }">
                
                <div class="form-group w-75 bg-transparent text-white p-5 mx-auto ">
                    
                    <label class="lead m-2" for="email">Email address:</label>
                    <input type="email" class="form-control" v-model="email" name="email" id="" aria-describedby="emailHelpId" placeholder="">
                    <label class="lead m-2" for="password" >Password:</label>
                    <input type="password" class="form-control" v-model="password" name="password" id="" placeholder="">
                    <button type="submit" class="btn btn-outline-warning m-2" v-on:click="signin()">Submit</button>
                
                </div>
       
    </div>
</template>

<script>
import firebase from 'firebase/app'
export default {
    data (){
        return{

            
            email:'',
            password:'',
            backimg:''
        }
    },
    methods: {
        signin:function () {

            var router = this.$router
            var email = this.email
            var password = this.password
                            
            
            firebase.auth().signInWithEmailAndPassword(email,password).then(user => {
                
                alert('Welcome ' + firebase.auth().currentUser.displayName)
                router.push('/home/' + firebase.auth().currentUser.displayName)    

            })
            
            .catch(function(error) {
                var errorMessage = error.message;
                alert(errorMessage)
                
            });
        

            
        }
    },
  mounted: function(){
    var page = this
    firebase.storage().ref().child('signinpage/signinback.jpg').getDownloadURL().then(function(url){
        page.backimg = url

    })
  }
}
</script>

<style>

.body{
    padding:11%;
    background-size: cover;

}

</style>