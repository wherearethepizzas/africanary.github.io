<template>
  <div id="studentSchooled">
        <div class="form-group row">
            <label for="staticEmail" class="col-md-2 col-form-label">School:</label>
            <div class="col-md-10">
                <input type="text" class="form-control" id="staticEmail" placeholder='School learning' v-model="studentSchooled.school">
            </div>
        </div>
        
        <div class="form-group row">
            <label for="staticEmail" class="col-md-2 col-form-label">Form:</label>
                <select class="form-control col-md-10" id="studentForm" v-on:click="addform()">
                    <option>Form 1</option>
                    <option>Form 2</option>
                    <option>Form 3</option>
                    <option>Form 4</option>
                </select>
        </div>
        
        <div class="form-group row">
            <label for="staticEmail" class="col-md-2 col-form-label">Admission Number:</label>
            <div class="col-md-10">
                <input type="text" class="form-control" id="staticEmail" placeholder="Admission number" v-model="studentSchooled.admission">
            </div>
        </div>
        
       <div class="form-group row">
            <label for="inputPassword" class="col-md-2 col-form-label">Subjects learning:</label>
            <div class="col-md-10">
                <div class="row">
                    <div class="col-lg-4" v-for="(subject , i) in subjectsAvailable" :key="subject">
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input" v-on:click="addsubject(i)">
                            </div>
                        </div>
                        <input type="text" class="form-control form-control-sm" readonly aria-label="Text input with checkbox" :value="subject">
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        addsubject:function(i){
            this.$store.commit('studentSSubjectsAdd', this.$store.state.subjectsAvailable[i])
        },
        addform:function(){
            var studentForm = document.getElementById('studentForm')
            this.$store.commit('addform',studentForm.options[studentForm.selectedIndex].value)
        }
    },
    computed: {
        subjectsAvailable(){
            return this.$store.state.subjectsAvailable
        },
        studentSchooled(){
            return this.$store.state.studentSchooled
        },
    }
}
</script>

<style>

</style>