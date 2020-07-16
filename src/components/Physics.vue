<template>
  
    <div>
        <div class="jumbotron">

            <h1>Physics</h1>
            <p>The ultimate aim of physics is to find a unified set of laws governing matter, motion, and energy at small (microscopic) subatomic distances, at the human (macroscopic) scale of everyday life, and out to the largest distances (e.g., those on the extragalactic scale). This ambitious goal has been realized to a notable extent. Although a completely unified theory of physical phenomena has not yet been achieved (and possibly never will be), a remarkably small set of fundamental physical laws appears able to account for all known phenomena. The body of physics developed up to about the turn of the 20th century, known as classical physics, can largely account for the motions of macroscopic objects that move slowly with respect to the speed of light and for such phenomena as heat, sound, electricity, magnetism, and light. The modern developments of relativity and quantum mechanics modify these laws insofar as they apply to higher speeds, very massive objects, and to the tiny elementary constituents of matter, such as electrons, protons, and neutrons.</p>
        </div>
        <div class="container">
            <div class="row">

                <div class="col-md m-2 border">
                
                    <h4 class="text-center mx-auto border-bottom">Form 1</h4>

                    <div class="border border-dark m-3">   
                        <div class="bg-secondary p-3"> 
                            <h6 class="p-3">Introduction to Physics.</h6>
                            <div class="row">
                                <button class="btn btn-dark btn-sm col-md m-1"  data-toggle="collapse" data-target="#demo">Toggle subtopics</button>
                                <button class="btn btn-primary btn-sm float-right col-md m-1"  data-toggle="modal" data-target="#F1T1notes">Read notes</button>
                                    <div class="modal fade" id="F1T1notes" tabindex="-1" role="dialog" aria-labelledby="F1T1notesLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="F1T1notesLabel">Introduction to Physics</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim magnam vel nulla molestiae quasi nihil ab magni at, fugiat incidunt, culpa nemo illo velit voluptatum ut eveniet? Quas, quisquam soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum corrupti pariatur corporis fugit ratione. Consequuntur mollitia nam, aspernatur quo incidunt maxime minima laudantium tempora, reiciendis tempore, autem vel ipsum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolorem aliquam dolor? Eaque maiores porro atque molestias cumque quod voluptate corrupti, illo laudantium beatae fugiat quasi, expedita rem provident ducimus?</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <button class="btn btn-primary btn-sm float-right col-md m-1" data-toggle="modal" data-target="#F1T1vids">Watch video</button>
                                    <div class="modal fade" id="F1T1vids" tabindex="-1" role="dialog" aria-labelledby="F1T1vidsLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg" role="document" style="max-width:500px;">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="F1T1vidsLabel">Introduction to Physics</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                </div>
                                                <div class="modal-body">
                                                   <video src="../assets/typing.mp4" width="500"></video>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div id="demo" class="collapse bg-light p-3">
                            <p>Physics as a science.</p>
                            <p>Meaning of physics.</p>
                            <p>Branches of physics.</p>
                            <p>Relashionship between physics and other objects.</p>
                            <p>Basic laboratory rules.</p>
                        </div> 
                    </div>

                    <div class="border border-dark m-3">  
                        <div class="bg-secondary p-3">   
                            <h6 class="p-3">Measurement 1</h6>
                            <button class="btn btn-dark btn-sm"  data-toggle="collapse" data-target="#demo1">Toggle subtopics</button>
                        </div>
                        <div id="demo1" class="collapse bg-light p-3">
                            <p>Length.</p>
                            <p>Area.</p>
                            <p>Volume.</p>
                            <p>Mass.</p>
                            <p>Density.</p>
                            <p>Time.</p>
                        </div>
                    </div>

                    <div class="border border-dark m-3">  
                        <div class="bg-secondary p-3">   
                            <h6 class="p-3">Force</h6>
                            <button class="btn btn-dark btn-sm"  data-toggle="collapse" data-target="#demo2">Toggle subtopics</button>
                        </div>
                        <div id="demo2" class="collapse bg-light p-3">
                            <p>Types of Forces.</p>
                            <p>Grvitational force.</p>
                            <p>Tension.</p>
                            <p>Upthrust.</p>
                            <p>Cohesive and Adhesive forces.</p>
                            <p>frictional force.</p>
                            <p>Magnetic force.</p>
                            <p>Ekectrostatic force.</p>
                            <p>Centripetal force.</p>
                            <p>Surface tension.</p>
                            <p>Action and Reaction.</p>
                            <p>Mass and Weight.</p>
                            <p>Scalar and Vector Quantities.</p>
                        </div>
                    </div>


                </div>

                <div class="col-md m-2 border">



                </div>


            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>