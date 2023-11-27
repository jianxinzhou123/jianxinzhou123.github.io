// Menu icon navbar
$(document).ready(function () {
  $("#menu-icon").click(function () {
    $(this).toggleClass("bx-x");
    $(".navbar").toggleClass("open");
  });

  // Scroll sections open link
  $(window).scroll(function () {
    $("section").each(function () {
      var top = $(window).scrollTop();
      var offset = $(this).offset().top - 150;
      var height = $(this).outerHeight();
      var id = $(this).attr("id");

      if (top >= offset && top < offset + height) {
        $(".hero .navbar a").removeClass("open");
        $('.hero .navbar a[href*="' + id + '"]').addClass("open");
      }
    });

    // stickyNav navbar
    $(".hero").toggleClass("stickyNav", $(window).scrollTop() > 100);
  });

  // Remove menu icon navbar when click navbar link (scroll)
  $(".navbar a").click(function () {
    $("#menu-icon").removeClass("bx-x");
    $(".navbar").removeClass("open");
  });

  // Swiper (no changes needed if Swiper is not a jQuery plugin)
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
  });

  // Dark light mode
  $("#darkMode-icon").click(function () {
    $(this).toggleClass("bx-sun");
    $("body").toggleClass("darkMode");
  });

  // Scroll reveal (no changes needed if ScrollReveal is not a jQuery plugin)
  ScrollReveal({
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".main-content, .heading", { origin: "top" });
  ScrollReveal().reveal(
    ".main-img img, .services-container, .project-box, .witness-wrapper, .connect form",
    { origin: "bottom" }
  );
  ScrollReveal().reveal(".main-content h1, .about-img img", { origin: "left" });
  ScrollReveal().reveal(".main-content h3, .main-content p, .about-content", {
    origin: "right",
  });
});
