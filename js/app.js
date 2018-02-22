$(function() {
    "use strict";

    var leftArrow = $(".arrow-left");
    var rightArrow = $(".arrow-right");
    var baners = $(".baner");
    var blocks = $(".block");
    var counter = 0;

    function skipForward() {
        counter++;
        if (counter > baners.length - 1) {
            counter = 0;
            baners.first().addClass("active");
            baners.eq(baners.length -1).removeClass("active");
            blocks.first().addClass("active-block");
            blocks.eq(blocks.length -1).removeClass("active-block");
        } else {
            baners.eq(counter).addClass("active");
            baners.eq(counter-1).removeClass("active");
            blocks.eq(counter).addClass("active-block");
            blocks.eq(counter-1).removeClass("active-block");
        }
    }


    setInterval(function() {
        skipForward();
    }, 4000);

    rightArrow.on("click", function() {
            skipForward();
    });

    leftArrow.on("click", function() {
            counter--;
            if (counter < 0) {
                counter = baners.length - 1;
                baners.eq(counter).addClass("active");
                baners.first().removeClass("active");
                blocks.eq(counter).addClass("active-block");
                blocks.first().removeClass("active-block");
            } else {
                baners.eq(counter+1).removeClass("active");
                baners.eq(counter).addClass("active");
                blocks.eq(counter+1).removeClass("active-block");
                blocks.eq(counter).addClass("active-block");
            }
    });

    var thirdElNav = $(".main-nav").find("li").eq(2);
    var submenu = $(".main-nav-submenu");

    thirdElNav.on("click", function (){
            submenu.slideToggle();
    });

    var testHeader = function() {
        var top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);

        if (top > 0) {
            header.classList.add("header-scroll");
        } else {
            header.classList.remove("header-scroll");
        }
    };

    var header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        testHeader();
    });

    var testDescription = function() {
        var top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);

        if (top > 0) {
            descriptionSection.style.marginTop = 50 + top + "px";
        } else {
            descriptionSection.style.marginTop = "20px";
        }
    };

    var descriptionSection = document.querySelector(".description-section");
    if (descriptionSection !== null) {
        window.addEventListener("scroll", function() {
            testDescription();
        });
    }

    var body = $("body");
    $(".toggle-nav").on("click", function() {
        body.toggleClass("show-main-nav");
    });

    var realizationsBoxes= $(".realization-box");

    realizationsBoxes.on("mouseenter", function() {
        $(this).find("div").css("height", "100%");
        $(this).find("div").css("opacity", ".8");
        $(this).find("div").children().css("display", "inline");
    })
    realizationsBoxes.on("mouseleave", function() {
        $(this).find("div").css("height", "0");
        $(this).find("div").children().css("display", "none");
    })

});
