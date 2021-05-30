$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.scroll-up-btn').addClass("show");
            $('.navbar').addClass("sticky");
        }else{
            $('.scroll-up-btn').removeClass("show");
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 300){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        
        
    })
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop : 0})
    })

    // toggle menubar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    $("#hire").click(function(e){
        alert("Send Mail To Email mentioned in contact section");
    })

    //typing animation

    var typed = new Typed(".typing" , {
        strings : ["Software Developer" ,  "Engineer","PepCoder","Student" ],
        typeSpeed : 100,
        backSpeed: 60,
        loop : true
    })

    var typed = new Typed(".typing-2" , {
        strings : ["Software Developer" ,  "Engineer", "PepCoder","Student" ],
        typeSpeed : 100,
        backSpeed: 60,
        loop : true
    })

    //owl-carousel script
    $('.carousel').owlCarousel({
        margin : 20,
        loop : false,
        autoplayTimeOut : 2000,
        autoplayHoverPause : true,
        reponsive : {
            0:{
                items : 1,
                nav : false,
            },
            600:{
                items:2,
                nav : false,
            },
            1000:{
                items:3,
                nav : false,
            }
        }
    })

    $('#img').mouseenter(function (e) {
        if(e.button == 2) { // right click
          return false; // do nothing!
        }
    })
});
