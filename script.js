var submitted=false;

var formSubmit = function(){
    if(submitted)  {
        $('#msgTY').show();
        // $('#mG61Hd').reset();
        $('.formcontain').hide();
    }
}

var imgResize = function(){
    if ($(window).width() > $(window).height()){
        // $('#wed_img').css('height','');
        // $('#wed_img').width("100%");
    }
    else{
        // $('#wed_img').css('width','');
        // $('#wed_img').height("100%");
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

$(window).on('resize')


$(document).ready(function () {
    $('.imgs').delay(200).animate({'opacity':'.99'},850);
    $('.formcontain').delay(650).animate({'opacity':'1'},600);

    //imgResize();


});