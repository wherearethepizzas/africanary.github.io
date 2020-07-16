<template>
  <div>
        <div class="jumbotron">
          <h2 id="subjectname">{{subjectname}}</h2>
          <p id="subjectdesc">{{subjectdesc}}</p>
        </div>
        <div class="container">
            
            <div class="row">

                <div class="col-md-6" v-bind:key="form" v-for="form in forms">
                        
                    <h4 class="text-center border-bottom">{{form.name}}</h4>
                      <div class="border border-dark m-3">  
                        <div class="bg-secondary p-3" id="topics" v-bind:key="topic" v-for="topic in form.topics">
                          <h6 class="p-3">{{topic.topicName}}</h6>
                            <div class="row">
                              <button class="btn btn-primary btn-sm float-right col-md m-1"  data-toggle="modal" :data-target="'#demo'+ topic.notesId">Read notes</button>
                                <div class="modal fade" :id="'demo' + topic.notesId" tabindex="-1" role="dialog" aria-labelledby="F1T1notesLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="F1T1notesLabel">{{topic.topicName}}</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Lorem </p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               <button class="btn btn-primary btn-sm float-right col-md m-1" data-toggle="modal" :data-target="'#demo'+ topic.vidId">Watch video</button>
                             <div class="modal fade" :id="'demo' + topic.vidId" tabindex="-1" role="dialog" aria-labelledby="F1T1notesLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="F1T1notesLabel" >{{topic.topicName}} - Video</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                </div>
                                                <div class="modal-body bg-dark">
                                                    <video id='video' :src="topic.vidLink" width='100%' controls></video>
                                                </div>
                                            </div>
                                        </div>
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
            subjectname:'',
            subjectdesc:'',
            forms:[
              {name:'Form 1',topics:[]},
              {name:'Form 2',topics:[]},
              {name:'Form 3',topics:[]},
              {name:'Form 4',topics:[] },
            ]
        }
    },
    mounted: function () {
         var page = this
           firebase.firestore().collection("SubjectData").doc(this.$route.params.subject).get().then(function(doc){
             page.subjectname = doc.data().name
             page.subjectdesc = doc.data().desc
             for(var i = 0;i < doc.data().formOneTopics.length;i++){
               var vidid  = i + 'F1vids'
               var notesid  = i + 'F1notes'
               var topicname = doc.data().formOneTopics[i].topicName
               var topic = {topicName:topicname,notesId:notesid,vidId:vidid,vidLink:'temp'}
               page.forms[0].topics.push(topic)
               var vidpath = doc.data().formOneTopics[i].vidLink
                firebase.storage().ref().child(vidpath).getDownloadURL().then(function(url){
                  page.forms[0].topics[i - 1].vidLink = url
                }).catch(function(err){
                  alert(err)
                })
               
             }
             for(var i = 0;i < doc.data().formTwoTopics.length;i++){
               var vidid  = i + 'F2vids'
               var notesid  = i + 'F2notes'
               var topicname = doc.data().formTwoTopics[i].topicName
               var topic = {topicName:topicname,notesId:notesid,vidId:vidid}
               page.forms[1].topics.push(topic)
             }
             for(var i = 0;i < doc.data().formThreeTopics.length;i++){
               var vidid  = i + 'F3vids'
               var notesid  = i + 'F3notes'
               var topicname = doc.data().formThreeTopics[i].topicName
               var topic = {topicName:topicname,notesId:notesid,vidId:vidid}
               page.forms[2].topics.push(topic)
             }
             for(var i = 0;i < doc.data().formFourTopics.length;i++){
               var vidid  = i + 'F4vids'
               var notesid  = i + 'F4notes'
               var topicname = doc.data().formFourTopics[i].topicName
               var topic = {topicName:topicname,notesId:notesid,vidId:vidid}
               page.forms[3].topics.push(topic)
             }
           })
    }
    
}
</script>

<style>

</style>