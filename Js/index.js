

jQuery(function(){

    $(".loading").fadeOut(6000 , function(){
        $("body").css("overflow" , "auto");
    });

    let aboutScrollTOP = $("#about").offset().top;
    $(window).on("scroll" , function(){
        if($(window).scrollTop() > aboutScrollTOP){
            $(".navbar").addClass("nav-fixed");
            $(".scroll-to-top ").show("1000");
        }else{
            $(".navbar").removeClass("nav-fixed");
            $(".scroll-to-top ").hide("1000");
        }
    })
    
    
    $(".scroll-to-top ").on("click" , function(){
        $("html , body").animate({scrollTop: 0 } , 2000 );
    })
    
    
    $(".navbar ul a").on("click" , function(){
        const currentSection = $(this).attr("href")
        const sectionOffect = $(currentSection).offset().top;
        $("html , body").animate({scrollTop: sectionOffect} , 2000 )
    })
    
    
    const colorBoxWhith = $(".settings").outerWidth();
    let isShow = false; 
    $(".settings").css({ left : `-${colorBoxWhith}px`})
    $(".gear-icon").on("click" , function(){
        if(isShow == true){
            $(".settings").animate({ left : `-${colorBoxWhith}px`}, 500);
            $(".gear-icon i").removeClass("fa-xmark").addClass("fa-gear fa-spin");
            isShow = false;
        }else{
            $(".settings").animate({ left : 0}, 500);
            $(".gear-icon i").addClass("fa-xmark").removeClass("fa-gear fa-spin");
            isShow = true;
        }
    })
    
    
    $(".colors li").on("click" , function(){
        const currenetColor = $(this).css("backgroundColor");
        $("h1 , h2 ,h3 ,h4 ,h5 ,h6").css({color : currenetColor});
        $(":root").css("--main-color" , currenetColor);
    })
})