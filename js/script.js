$(document).ready(function(){
    new WOW().init() 
})

/***************************************
    MAGNIFIC POPUP(Images Gallery) 
****************************************/
$(document).ready(function () {
    $('#id_or_class').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: { enabled: true }
        // other options
    });
});

/***************************************
                 OWL CAROUSEL(Multiple)
****************************************/
$(document).ready(function(){
    $("#customers-list").owlCarousel({
        items : 3,
        loop:true,
        autoplay : true,
        autoplayTimeout : 7000,
        autoplayHoverPause: true,
        smartSpeed : 800,
        responsive : {
            0 :{
                items : 1
            } ,
            480: {
                items : 2,
            },
            966 : {
                item : 3,
            }
        }
    });
})

/***************************************
                CounterUp
****************************************/
$(document).ready(function(){
    $("#id_or_class").counterUp({
        delay: 10,
        time: 3000
    })
})


/***************************************
                Bootstrap
****************************************/
$('.carousel').carousel({
    interval: 9000,
})

/***************************************
                AOS JS
****************************************/
AOS.init();

/***************************************
                NAV
****************************************/
window.addEventListener("scroll" ,function(e) {
   if (this.scrollY >= 80){
        this.document.querySelector("#mynav").classList.add('custom-nav')
        this.document.querySelector(".fixed-footer").classList.remove('hide')
    } else {
        this.document.querySelector("#mynav").classList.remove('custom-nav')
       this.document.querySelector(".fixed-footer").classList.add('hide')
    }
})

/**** remove nav after click for phones  */
toogle_btn = document.querySelector(".navbar-toggler")
links = document.querySelectorAll(".nav-item a")
for( let i = 0 ;i < links.length ; i++){
    links[i].addEventListener("click", function () {
        toogle_btn.click()
    })
}

// add smooth a tags moving
$(document).ready(function(){
    $('.custom-a').on('click' , function(e){
        e.preventDefault()
        let dest = $(this).attr("href")
        $('html ,body').animate({
            scrollTop: $(dest).offset().top
        }, 1200, "easeInOutExpo")
    })
})