<template>
   <div class="studentNotSchooled">
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
            this.$store.commit('studentNSSubjectsAdd', this.$store.state.subjectsAvailable[i])
        }
    },
    computed: {
        subjectsAvailable(){
            return this.$store.state.subjectsAvailable
        }
    }

}
</script>

<style>

</style>