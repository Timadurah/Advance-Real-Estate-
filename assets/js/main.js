
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
    $(this).closest(".detail_scroll").find('.imgAdd').before('<div class="col-sm-4 col-8 imgUp m-2 border"><div class="imagePreview" style="background: url(./assets/image/banner_.svg);"></div><label class="p-2 f-center btn-primary bg-light text-center"><span class="fw-bold bi-file-earmark-image "></span><input type="file" class="uploadFile img" value="Upload Photo" style="width: 0px;height: 0px;overflow: hidden;"></label><i class="bi-trash3 del p-2 f-center text-danger"></i></div>');
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