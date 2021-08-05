//JAVASCRIPT JQUERY SLIDESHOW
$(function(){
    $('#l2').click(function(){
        $('#i2').fadeIn(1000);
        $('#i1').hide();
        $('#i3').hide();
    })
    $('#l3').click(function(){
        $('#i3').fadeIn(1000);
        $('#i1').hide();
        $('#i2').hide();
    })
    $('#l1').click(function(){
        $('#i1').fadeIn(1000);
        $('#i2').hide();
        $('#i3').hide();
    })

});