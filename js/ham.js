// hamburger menu
$(document).ready(function () {
  var menuOpen = false;

  // 메뉴 열기
  $("#hamburger-menu").click(function (event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");

    if (menuOpen) {
      $("#main").fadeIn(); // fadeIn 추가
      menuOpen = false;
    } else {
      $("#main").fadeOut(); // fadeOut 추가
      menuOpen = true;
    }

    $(".menu-list").fadeToggle(); // fadeToggle으로 변경
  });

  // 메뉴 닫기
  $("#hamburger-menu.open").click(function () {
    $("#hamburger-menu").removeClass("open");
    $("#main").removeClass("overflow-hidden");
    $("#menu-container .menu-list").removeClass("active");
    $(".menu-list").fadeOut(); // fadeOut 추가
  });
});

// fix box 숨기
$(window).on("scroll", function () {
  const documentHeight = $(document).height();
  const scrollPosition = $(window).height() + $(window).scrollTop();
  const fixElement = $(".fix");

  // 스크롤이 문서의 전체 높이에 도달했을 때만 .fix 요소 숨기기
  if (scrollPosition >= documentHeight) {
    fixElement.addClass("hidden"); // .fix 요소 숨기기기
  } else {
    fixElement.removeClass("hidden"); // .fix 요소 보이기
  }
});

// top button
$(document).ready(function () {
  // Top 버튼 특정 스크롤높이에서만 보이기 / 숨기기
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".top").fadeIn();
    } else {
      $(".top").fadeOut();
    }
  });

  // Top 버튼 클릭시 페이지 상단으로 이동
  $(".top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
