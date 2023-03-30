$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 18,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        lazyLoad: true,
        stagePadding: 80,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
        loop: true,
      },
    },
  });
});
