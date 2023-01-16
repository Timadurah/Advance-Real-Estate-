const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const webcam_div = document.querySelector("#webcam_div");
const submit_btn = document.querySelector("#submit_btn");
const cancle_btn = document.querySelector("#cancle_btn");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

submit_btn.addEventListener("click", () => { 
   webcam_div.classList.remove("display_none");
  webcam_div.classList.add("diplay_block");
});

cancle_btn.addEventListener("click", () => { 
   webcam_div.classList.remove("display_block");
  webcam_div.classList.add("diplay_none");
});



   // Configure a few settings and attach camera
   function configure(){
    Webcam.set({
       width: 320,
       height: 240,
       image_format: 'jpeg',
       jpeg_quality: 90
    });
    Webcam.attach( '#my_camera' );
 }
 // A button for taking snaps


 // preload shutter audio clip
 var shutter = new Audio();
 shutter.autoplay = false;
 shutter.src = navigator.userAgent.match(/Firefox/) ? 'shutter.ogg' : 'shutter.mp3';

 function take_snapshot() {
    // play sound effect
    shutter.play();

    // take snapshot and get image data
    Webcam.snap( function(data_uri) {
       // display results in page
       document.getElementById('results').innerHTML = 
           '<img id="imageprev" src="'+data_uri+'"/>';
     } );

     Webcam.reset();
 }

function saveSnap(){
   // Get base64 value from <img id='imageprev'> source
   var base64image = document.getElementById("imageprev").src;

   Webcam.upload( base64image, 'upload.php', function(code, text) {
        console.log('Save successfully');
       //console.log(text);
   });
   

}
