var submitted=false;
var contactSubmitted=false;

var formSubmit = function(){
    if(submitted)  {
        $('#tabnav a[href="#infobox"]').tab('show');
        $('#msgTY').modal('toggle');
        $('#mG61Hd')[0].reset();
        $('#mG61Hd input:radio').prop('checked', false).parent().removeClass('active');
        $('#mG61Hd input:checkbox').prop('checked', false).parent().removeClass('active');
        $('#mG61Hd input:radio').trigger('change');
        $('#mG61Hd input:checkbox').trigger('change');
    }
}

var contactSubmit = function(){
    if(contactSubmitted)  {
        $('#contactForm')[0].reset();
        $('#msgConfirm').fadeIn(1500).delay(2000).fadeOut(1000);
    }
}

function toggleSpecialNeeds(){
    if ($('#chkCy').is(':checked') || $('#chkTp').is(':checked')) {
        $('#specialNeeds').show(150);
    }
    else{
        $('#specialNeeds').hide(150);
        $('#specialNeeds input:radio').prop('checked', false).parent().removeClass('active');
        $('#specialNeeds input:radio').trigger( "change");
    }
}

$(document).ready(function () {
    
    $('.rbAttend').change(function(){
        if($('#rdAttendWedding').is(':checked')){
            $('#attendWedding').show(200);
            $('#specialNeeds input:radio').attr('required','');
        }else{
            $('#chkCy').prop('checked', false).parent().removeClass('active');
            $('#chkTp').prop('checked', false).parent().removeClass('active');
            $('#chkCy').trigger( "change");
            $('#chkTp').trigger( "change");
            $('#attendWedding').hide(200);
            $('#specialNeeds input:radio').removeAttr('required',);
        }
    });

    $('#chkCy').change(function(){
        if($(this).is(':checked')){
            $('#txtAttendCy').val('');
            $('#attendCy').show(400);
            $('#txtAttendCy').focus();
        }
        else{
            $('#attendCy').hide(400);
            $('#txtAttendCy').val(0);
        }
        toggleSpecialNeeds();
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
        toggleSpecialNeeds();
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
        if($('#rbNeedKidChair').is(':checked')){
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
        if($('#rbNeedVegan').is(':checked')){
            $('#inputVegan').show(400);
            $("#inputVegan input").attr('required', ''); 
        }
        else{
            $('#inputVegan').hide(400);
            $('#inputVegan input').val("");
            $("#inputVegan input").removeAttr('required'); 
        }
    })

    $('.imgs').delay(150).animate({'opacity':'.99'}, 850, function(){
        $('.formcontain').animate({'opacity':'1'},600);
    });

});
