<template>
    <div class="body" v-bind:style="{ backgroundImage: 'url(' + backimg + ')' }">
                <div class=" form-group w-100 bg-transparent text-white p-5 mx-auto rounded">
                    
                    <label for="" class="lead">Account Type:</label>
                    <select class="form-control form-control-lg" id="accountType" v-on:click="pageload()">
                        <option>Institution</option>
                        <option>Teacher</option>
                        <option>Student(in a school)</option>
                        <option>Student(independent)</option>
                    </select>
                    <label class="lead" for="email">{{displayNameLabel}}</label>
                    <input type="email" v-model="username" class="form-control" name="username" id="" :placeholder="displayNameLabel">
                    <label class="lead" for="username" >Email Address:</label>
                    <input v-model="email" class="form-control" name="email" id="" aria-describedby="emailHelpId" placeholder="Email Address">
                    <label class="lead" for="password" >Password:</label>
                    <small id="emailHelpId" class="form-text text-danger">*For a stronger password make sure it reaches upto a minimum of 8 characters</small>
                    <input type="password" v-model="password" class="form-control" name="password" id="" placeholder="Password">
                    <label class="lead" for="confirmedpassword" >Confirm Password:</label>
                    <input type="password" v-model="confirmedpassword" class="form-control" name="confirmedpassword" id="" placeholder="Confirm Password">
                    <button class="btn btn-secondary btn-sm mt-2 mb-2" hidden>Choose avatar</button>
                    
                    <div class="border border-secondary m-2 p-3 rounded" id="categoryData">
                       <instituteSignUp id='institute'></instituteSignUp><teacherSignUp style="display:none;" id='teacher'></teacherSignUp><studentNotSchooledSignUp style="display:none;" id="studentNS"></studentNotSchooledSignUp><studentSchooledSignUp style="display:none;" id="studentS"></studentSchooledSignUp>
                    </div>
            
                
        <button type="submit" v-on:click="register()" class="btn btn-primary m-2s">Submit</button>      
             
        </div>
    </div>
  
</template>

<script>
import firebase, { firestore } from 'firebase/app'

            


export default {
    data() {
        return {
            location:'',
            displayNameLabel: 'Institution Name',
            email:'',
            password:'',
            username:'',
            confirmedpassword:'',
            backimg:''



        }
    },
    methods: {
        addsubject: function(){



        },
        pageload: function(){
            
  
            var categoryData = document.getElementById('categoryData');
            var institute = document.getElementById('institute');
            var teacher = document.getElementById('teacher');
            var studentNS = document.getElementById('studentNS');
            var studentS = document.getElementById('studentS');

            institute.style.display = 'none'
            teacher.style.display = 'none'
            studentNS.style.display = 'none'
            studentS.style.display = 'none'

  

            if( accountType.options[accountType.selectedIndex].value == 'Institution'){
                this.displayNameLabel = accountType.options[accountType.selectedIndex].value + ' Name';
                institute.style.display = 'block'

            }
            if( accountType.options[accountType.selectedIndex].value == 'Teacher'){
                this.displayNameLabel = accountType.options[accountType.selectedIndex].value + ' Name';
                teacher.style.display = 'block'
            }
            if( accountType.options[accountType.selectedIndex].value == 'Student(in a school)'){
                this.displayNameLabel = 'Student Name(in a school)';
                studentS.style.display = 'block'
            }
            if( accountType.options[accountType.selectedIndex].value == 'Student(independent)'){
                this.displayNameLabel = 'Student Name(independent)';
                studentNS.style.display = 'block'
                
            }
            
            this.$store.commit('clearsubjects')

        },
        register: function() {
            var accounttype = document.getElementById('accountType')
            var store = this.$store;
          
                if(this.confirmedpassword == this.password){
                        var accountType = accounttype.options[accounttype.selectedIndex].value
                        var username = this.username
                        var email = this.email
                        var password = this.password
                        var router = this.$router

                        firebase.auth().createUserWithEmailAndPassword(email,password).then(function(result) {
                        
                            return result.user.updateProfile({
                            
                                displayName: username
                            
                            })
                        
                        }).then(function(){
                            firebase.firestore().collection('Users').doc(email).set({
                                accountType:accountType
                            })
                            firebase.auth().signInWithEmailAndPassword(email,password).then(function () {

                                if (accountType == 'Institution'){
                                    
                                    firebase.firestore().collection("Institutions").doc(username.trim()).set({
                                        
                                        schoolName: username,
                                        accountType: accountType,
                                        location: store.state.institutions.location,
                                        postalAddress: store.state.institutions.postalAddress
                                    
                                    }).catch(function(error) {
                                        var errorMessage = error.message;
                                        alert(errorMessage)
                                    })
                                }
                                if (accountType == 'Teacher'){
                                    var teacher = {name:username,subjects:store.state.teacherSubjects};
                                    firebase.firestore().collection("Teachers").doc(username.trim()).set({
                                        
                                        teacherName: username,
                                        accountType: accountType, 
                                        school: store.state.teachers.school,
                                        subjects: store.state.teacherSubjects

                                    }).catch(function(error) {
                                        var errorMessage = error.message;
                                        alert(errorMessage)
                                    }).then(function(){
                                        firebase.firestore().collection('Institutions').doc(store.state.teachers.school).update({
                                            teachers: firebase.firestore.FieldValue.arrayUnion(teacher)
                                        })
                                    })

                                }
                                if (accountType == 'Student(in a school)'){
                                    var student = {name:username,form:store.state.studentSchooled.form,admission: store.state.studentSchooled.admission,subjects: store.state.studentSchooledSubjects}
                                    firebase.firestore().collection("studentsSchooled").doc(username.trim()).set({
                                        
                                        studentName: username,
                                        accountType: accountType,
                                        school: store.state.studentSchooled.school,
                                        form: store.state.studentSchooled.form,
                                        admission: store.state.studentSchooled.admission,
                                        subjects: store.state.studentSchooledSubjects
                
                                    }).catch(function(error) {
                                        var errorMessage = error.message;
                                        alert(errorMessage)
                                    }).then(function(){
                                        if(store.state.studentSchooled.form == 'Form 1'){
                                            firebase.firestore().collection('Institutions').doc(store.state.studentSchooled.school).update({
                                                Form1: firebase.firestore.FieldValue.arrayUnion(student)
                                            })

                                        }
                                        if(store.state.studentSchooled.form == 'Form 2'){
                                            firebase.firestore().collection('Institutions').doc(store.state.studentSchooled.school).update({
                                                Form2: firebase.firestore.FieldValue.arrayUnion(student)
                                            })

                                        }
                                        if(store.state.studentSchooled.form == 'Form 3'){
                                            firebase.firestore().collection('Institutions').doc(store.state.studentSchooled.school).update({
                                                Form3: firebase.firestore.FieldValue.arrayUnion(student)
                                            })

                                        }
                                        if(store.state.studentSchooled.form == 'Form 4'){
                                            firebase.firestore().collection('Institutions').doc(store.state.studentSchooled.school).update({
                                                Form4: firebase.firestore.FieldValue.arrayUnion(student)
                                            })

                                        }
                                        firebase.firestore().collection('Institutions').doc(store.state.studentSchooled.school).update({
                                            students: firebase.firestore.FieldValue.arrayUnion(student)
                                        })
                                    })

                                }
                                if (accountType == 'Student(independent)'){

                                    firebase.firestore().collection("studentsNotSchooled").doc(username.trim()).set({
                                        
                                        studentName: username,
                                        accountType: accountType,
                                        subjects: store.state.studentNotSchooledSubjects
                
                                    }).catch(function(error) {
                                        var errorMessage = error.message;
                                        alert(errorMessage)
                                    })

                                }
                            alert('Signed up Successfully')
                            router.push('/home/' + firebase.auth().currentUser.displayName)
                            
                        })
                        .catch(function(error) {
                            var errorMessage = error.message;
                            alert(errorMessage)
                        })

                       
                
                        }).catch(function(error) {
                            var errorMessage = error.message;
                            alert(errorMessage)
                        })

                }        
                else{
                    alert('Passwords do not match!!')
                }  
            }
            
        },
        mounted: function(){
            var page = this
            firebase.storage().ref().child('signuppage/signupback.jpg').getDownloadURL().then(function(url){
                page.backimg = url

            })
        }
        


    }



</script>

<style scoped>

.body{
    padding:5.92%;
    background-size: cover;
    background-position: right;


}
#formarea{
    background: rgba(0, 0, 0, 0.5);
}

</style>