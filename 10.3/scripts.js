$(document).ready(function () {
    var carouselList = $("#carousel ul");
    setInterval(changeSlideNext, 6000);
    function changeSlideNext() {
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    }
    function changeSlidePrevious() {
        carouselList.animate({'marginLeft': -400}, 500, moveLastSlide);
    }
    $('#next').click(function() {
       changeSlideNext();
    });
    $('#previous').click(function() {
        changeSlidePrevious();
    });

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }
    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.after(lastItem);
        carouselList.css({marginLeft:0});
    }
});