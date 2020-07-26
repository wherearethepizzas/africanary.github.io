<template>
    <div>
        <div class="text-center p-5" id="inf">
            <h1>School: {{institution.name}}</h1>
            <h6>Population: {{institution.population}}</h6>
            
        </div>
        <div class="container">
            <div class="row border border-light">
            
                <div class="col-md-6">
                    <h3 class="text-center m-3">Teachers</h3>
                    <hr>
                    <div :key='teacher' v-for="(teacher,i) in teachers">
                        <div class="p-3 m-1 bg-light mx-auto border border-secondary rounded">
                            <h5 class="mx-auto">{{teacher.name}}</h5>
                            <button class="btn btn-secondary btn-sm mx-auto" type="button" data-toggle="collapse" :data-target="'#collapseteacher' + i" aria-expanded="false" aria-controls="multiCollapseExample2">View Info</button>
                           
                            <div class="collapse mt-3" :id="'collapseteacher' + i">
                                <hr>
                                <h6>Subjects teaching:</h6>
                                <div :key='subject' v-for="subject in teacher.subjects">
                                    <p>{{subject}}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-6">
                    <h3 class="text-center m-3">Students</h3>
                    <hr>

                    <div :key='student' v-for="(student,i) in students">
                        <div class="p-3 m-1 bg-light mx-auto border border-secondary rounded">
                            <h5>{{student.name}}</h5>
                            <button class="btn btn-secondary btn-sm" type="button" data-toggle="collapse" :data-target="'#collapsestudent' + i" aria-expanded="false" aria-controls="multiCollapseExample2">View Info</button>
                            
                            <div class="collapse mt-3" :id="'collapsestudent' + i">
                                <hr>
                                <p>Admission number: {{student.admission}}</p>
                                <p>{{student.form}}</p>

                                <h6>Subjects learning:</h6>
                                <div :key='subject' v-for="subject in student.subjects">
                                    <p>{{subject}}</p>
                                </div>
                            </div>

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
    data(){
        return{
            institution:{
                name:'',
                population:''
            },
            teachers:[],
            students:[]

        }
    },
    mounted: function(){
            var page = this
            firebase.firestore().collection('Institutions').doc(firebase.auth().currentUser.displayName).get().then(function(doc){
                page.institution.name = doc.data().schoolName
                page.institution.population = doc.data().students.length 
                page.teachers = doc.data().teachers
                page.students = doc.data().students
            })
    }
    
        


}
</script>

<style>

</style>