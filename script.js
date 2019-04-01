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

$('.rbNeedChair').change(function(){
    if($(this).val()==1){
        $('#inputKidsChair').show(400)
    }
    else{
        $('#inputKidsChair').hide(400);
        $('#inputKidsChair input').val("");
    }
})

$('.rbVegan').change(function(){
    if($(this).val()==1){
        $('#inputVegan').show(400)
    }
    else{
        $('#inputVegan').hide(400);
        $('#inputVegan input').val("");
    }
})

$(document).ready(function () {
    $('#wed_img').delay(200).animate({'opacity':'1'},700);
    $('.formcontain').delay(600).animate({'opacity':'1'},600);
});