
function $trigger(location) {
    $("#"+location).focus().trigger('click');
  }
  
  
  
  
  // end of trigger
  
  
  
  // file geting with js
  
  
  
  
  function $Fgetter(input,Flink) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
    
        reader.onload = function (e) {
        $('#'+Flink).attr('src', e.target.result);
       
        }
    
        reader.readAsDataURL(input.files[0]);
    }
    }
  
  
  $(".imgAdd").click(function(){
    $(this).closest(".detail_scroll").find('.imgAdd').before('<div class="col-sm-4 col-8 imgUp m-2 border"> <label class="p-2 f-center btn-primary bg-light text-center"><div class="imagePreview" style="background: url(./assets/image/banner_.svg);"></div><span class="fw-bold bi-file-earmark-image "></span><input type="file" class="uploadFile img" value="Upload Photo" style="width: 0px;height: 0px;overflow: hidden;"></label><i class="bi-trash3 del p-2 f-center text-danger"></i></div>');
});
    
    $(document).on("click", "i.del" , function() {
        $(this).parent().remove();
    });

    $(function() {
        $(document).on("change",".uploadFile", function()
        {
                var uploadFile = $(this);
            var files = !!this.files ? this.files : [];
            if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
     
            if (/^image/.test( files[0].type)){ // only image file
                var reader = new FileReader(); // instance of the FileReader
                reader.readAsDataURL(files[0]); // read the local file
     
                reader.onloadend = function(){ // set image data as background of div
                    //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
    uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
                }
            }
          
        });
    });


    // clear input 
    function clearform() {
        $("#filterform :input").prop("value", null);
    }
   
// range

function customRange(rangerid,absolute_range) {

    const customRange1data =  document.getElementById(""+rangerid+"").value;
    document.getElementById(""+absolute_range+"").innerHTML = "₦20,000 - ₦"+customRange1data;

}


// side bar
function openNav() {
    document.getElementById("mySidenav").style.display = "flex";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }
  
  function getVals(){
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }
  
  window.onload = function(){
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
          let sliders = sliderSections[x].getElementsByTagName("input");
          for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              // Manually trigger event first time to display values
              sliders[y].oninput();
            }
          }
        }
  }