<template>
  <div>
      <institutionhome style="display:none;" id="institutionhome"></institutionhome>
      <teacherhome style="display:none;" id="teacherhome"></teacherhome>
      <studentSchooledhome style="display:none;" id="studentSchooledhome"></studentSchooledhome>
      <studentNotSchooledhome style="display:none;" id="studentNotSchooledhome"></studentNotSchooledhome>
      
  </div>
</template>

<script>
import firebase, { auth, firestore } from 'firebase'
export default {
    
    data(){
        return{
            email: auth().currentUser.email,
            accountType:'',
            page:''
        }
    },
    mounted: function(){
        var page = this
        firestore().collection('Users').doc(page.email).get().then(function(doc){
            page.accountType = doc.data().accountType
        }).then(function(){
            if(page.accountType == 'Institution'){
               var institutionhome = document.getElementById('institutionhome').style.display = 'block'
            }
            if(page.accountType == 'Teacher'){
               var institutionhome = document.getElementById('teacherhome').style.display = 'block'
            }
            if(page.accountType == 'Student(in a school)'){
               var institutionhome = document.getElementById('studentSchooledhome').style.display = 'block'
            }
            if(page.accountType == 'Student(independent)'){
               var institutionhome = document.getElementById('studentNotSchooledhome').style.display = 'block'
            }
        })
        .catch(function(error){
            alert(error)
        })
    }


}
</script>

<style>

</style>