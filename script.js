var submitted=false;

var formSubmit = function(){
    if(submitted)  {
        $('#msgTY').show()
    }
}

$('#chkCy').change(function(){
    if($(this).is(':checked')){
        $('#attendCy').show(400)
    }
    else{
        $('#attendCy').hide(400);
        $('#txtAttendCy').val(0);
    }
});

$('#chkTp').change(function(){
    if($(this).is(':checked')){
        $('#attendTp').show(400)
    }
    else{
        $('#attendTp').hide(400);
        $('#txtAttendTp').val(0);
    }
});

$(document).ready(function () {
    $('#wed_img').delay(200).animate({'opacity':'1'},700);
    $('.formcontain').delay(600).animate({'opacity':'1'},600);
});