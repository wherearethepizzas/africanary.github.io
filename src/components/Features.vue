<template>
    <div class="container">
        <div class="row">
    
            <div class="col-md mt-5 mb-2">
                <div class="card" style="max-width:25rem;">
                    <img :src="notesimg" class="img-fluid" alt="">
                        <div class="card-header">

                        <h4>Notes</h4> 

                        </div> 
                        <div class="card-body">

                            <p>Be able to access multiple notes that are proffessionally written to encourage maximum comprehension with minimal effort, with over 7 subjects to choose from there's alot to go around.</p>
    
                        </div>
                </div>
            </div>
    
            <div class="col-md mt-5 mb-2">
                <div class="card"  style="max-width:25rem;">
                    <img :src="videosimg" class="img-fluid" alt="">
                        <div class="card-header">

                        <h4>Videos</h4> 

                        </div> 
                        <div class="card-body">

                            <p>Nothing is as comprehensive as a practical experience to a concept, but what about the next best thing; Videos help to visualize a concept through imagery and sound.</p>
                
                        </div>
                </div>
            </div>

            <div class="col-md mt-5 mb-2">
                <div class="card"  style="max-width:25rem;">
                    <img :src="connectimg" class="img-fluid" alt="">
                        <div class="card-header">

                        <h4>Connect</h4> 

                        </div> 
                        <div class="card-body">

                            <p>Human beings are social creatures and if history is to prove anything it is that two heads are better than one. Canary takes connection to the next level by encouraging teamwork between students and teachers with our Canary Chatroom.</p>
                
                        </div>
                </div>
            </div>

            <div class="col-md mt-5 mb-2">
                <div class="card"  style="max-width:25rem;">
                    <img :src="gamesimg" class="img-fluid" alt="">
                        <div class="card-header">

                        <h4>Games</h4> 
                    
                        </div> 
                        <div class="card-body">

                            <p>Take a break afterwards and play some classic games.</p>
                
                        </div>
                </div>
            </div>
    
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            notesimg:'',
            videosimg:'',
            connectimg:'',
            gamesimg:''
        }
    },
    mounted: function(){
        var page = this
        firebase.storage().ref().child('featurespage/notes.png').getDownloadURL().then(function(url){
            page.notesimg = url

        })
        firebase.storage().ref().child('featurespage/videos.png').getDownloadURL().then(function(url){
            page.videosimg = url

        })
        firebase.storage().ref().child('featurespage/connect.png').getDownloadURL().then(function(url){
            page.connectimg = url

        })
        firebase.storage().ref().child('featurespage/games.png').getDownloadURL().then(function(url){
            page.gamesimg = url

        })
    }
}
</script>

<style>

</style>