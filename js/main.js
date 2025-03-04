$(document).ready(function () {
  const visual = $(".slick--visual");
  const progress = $(".visual__progress");

  // 슬라이드 변경 시 active 클래스 처리
  visual.on("afterChange", function (event, slick, currentSlide) {
    // 모든 슬라이드에서 active 클래스 제거
    $(".slick-slide").removeClass("active");

    // 현재 슬라이드에 active 클래스 추가
    $(".slick-slide").eq(currentSlide).addClass("active");
  });

  // 첫 번째 슬라이드에 active 클래스 추가 (초기 설정)
  $(".slick-slide").eq(0).addClass("active");

  // Initialize Slick carousel
  visual.slick({
    infinite: true,
    dots: true,
    prevArrow: ".visual-prev",
    nextArrow: ".visual-next",
    appendDots: ".slick--visual__paging",
    slidesToShow: 1,
    customPaging: function (slider, i) {
      return (
        "<span>" +
        (i + 1) +
        "</span><span>/</span><span>" +
        slider.slideCount +
        "</span>"
      );
    },
  });
});
