<template>
   <div id="teacher">
                            
                            <div class="form-group row">
                                <label for="staticEmail" class="col-md-2 col-form-label">School:</label>
                                <div class="col-md-10">
                                    <input type="text" class="form-control" id="staticEmail" placeholder="School teaching" v-model="teachers.school">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Subjects teaching:</label>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-lg-4" v-for="(subject,i) in subjectsAvailable" :key="subject">
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
            this.$store.commit('teacherSubjectsAdd', this.$store.state.subjectsAvailable[i])
        }
    },
    computed:{
        teachers(){
            return this.$store.state.teachers
        },
        subjectsAvailable(){
            return this.$store.state.subjectsAvailable
        }
    }

}
</script>

<style>

</style>