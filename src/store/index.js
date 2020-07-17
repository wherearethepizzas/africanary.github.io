import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{

        subjectsAvailable:['Mathematics','English','Kiswahili','Physics','Chemistry','Biology','History','Geography',],
        
        studentSchooled:{
            school:'',
            form:'',
            admission:'',

        },
        teachers:{
            school:'',
            subjects:[]
        },
        institutions:{
            location:'',
            postalAddress:''
        },

        teacherSubjects:[],
        studentNotSchooledSubjects:[],
        studentSchooledSubjects:[]
    },
    getters: {

    },
    mutations: {
        studentNSSubjectsAdd(state, subject) {
            if(!state.studentNotSchooledSubjects.includes(subject)){
                state.studentNotSchooledSubjects.push(subject)
            }
            else{
                var removed = state.studentNotSchooledSubjects.indexOf(subject)
                state.studentNotSchooledSubjects.splice(removed,1)
            }

        },
          teacherSubjectsAdd(state, subject) {
            if(!state.teacherSubjects.includes(subject)){
                state.teacherSubjects.push(subject)
            }
            else{
                var removed = state.teacherSubjects.indexOf(subject)
                state.teacherSubjects.splice(removed,1)
            }

        },
        studentSSubjectsAdd(state, subject) {
            if(!state.studentSchooledSubjects.includes(subject)){
                state.studentSchooledSubjects.push(subject)
            }
            else{
                var removed = state.studentSchooledSubjects.indexOf(subject)
                state.studentSchooledSubjects.splice(removed,1)
            }

        },
        clearsubjects(state){
            state.teacherSubjects.length = 0
            state.studentSchooledSubjects.length = 0
            state.studentNotSchooledSubjects.length =  0
        },
        addform(state,form){
            state.studentSchooled.form = form
        }
    }


})