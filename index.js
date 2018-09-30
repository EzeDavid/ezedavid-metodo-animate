$(document).ready(function(){

    $('#box1').animate({
        marginBottom:0,
    },5000,function (){
        $('#box1').animate({
            marginTop: -100,
            opacity: 0.5
        })
    })
})