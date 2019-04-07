var submitted=false;

var formSubmit = function(){
    if(submitted)  {
        $('#tabnav a[href="#infobox"]').tab('show');
        $('#msgTY').modal('toggle');
        $('#mG61Hd')[0].reset();
        
    }
}

$('#chkCy').change(function(){
    if($(this).is(':checked')){
        $('#attendCy input').val('');
        $('#attendCy').show(400);

        // $('#attendCy').attr();
    }
    else{
        $('#attendCy').hide(400);
        $('#txtAttendCy').val(0);
    }
});

$('#chkTp').change(function(){
    if($(this).is(':checked')){
        $('#attendTp input').val('');
        $('#attendTp').show(400)
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
    $('.imgs').delay(200).animate({'opacity':'.99'},850);
    $('.formcontain').delay(650).animate({'opacity':'1'},600);

    //imgResize();


});