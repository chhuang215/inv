var submitted=false;
var contactSubmitted=false;
var formSubmit = function(){
    if(submitted)  {
        $('#tabnav a[href="#infobox"]').tab('show');
        $('#msgTY').modal('toggle');
        $('#mG61Hd')[0].reset();
    }
}

var contactSubmit = function(){
    if(contactSubmitted)  {
        $('#contactForm')[0].reset();
        $('#msgConfirm').fadeIn(1500).delay(2000).fadeOut(1000);
    }
}

$('#chkCy').change(function(){
    if($(this).is(':checked')){
        $('#txtAttendCy').val('');
        $('#attendCy').show(400);
        $('#txtAttendCy').focus();
        // $('#attendCy').attr();
    }
    else{
        $('#attendCy').hide(400);
        $('#txtAttendCy').val(0);
    }
});

$('#chkTp').change(function(){
    if($(this).is(':checked')){
        $('#txtAttendTp').val('');
        $('#attendTp').show(400);
        $('#txtAttendTp').focus();
    }
    else{
        $('#attendTp').hide(400);
        $('#txtAttendTp').val(0);
    }
});

$('#cbNeed').change(function(){
    if($(this).is(':checked')){
        $('#inputMailingAddr').show(350);
        $("#inputMailingAddr input").attr('required', ''); 
    }
    else{
        $('#inputMailingAddr').hide(350);
        $('#inputMailingAddr input').val("");
        $("#inputMailingAddr input").removeAttr('required'); 
    }
});


$('.rbNeedChair').change(function(){
    if($(this).val()==1){
        $('#inputKidsChair').show(400);
        $("#inputKidsChair input").attr('required', ''); 
    }
    else{
        $('#inputKidsChair').hide(400);
        $('#inputKidsChair input').val("");
        $("#inputKidsChair input").removeAttr('required'); 
    }
})

$('.rbVegan').change(function(){
    if($(this).val()==1){
        $('#inputVegan').show(400);
        $("#inputVegan input").removeAttr('required'); 
    }
    else{
        $('#inputVegan').hide(400);
        $('#inputVegan input').val("");
        $("#inputVegan input").removeAttr('required'); 
    }
})

$(document).ready(function () {
    $('.imgs').delay(150).animate({'opacity':'.99'}, 850, function(){
        $('.formcontain').animate({'opacity':'1'},600);
    });
});
