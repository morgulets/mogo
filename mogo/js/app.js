// slider
$(document).ready(function () {
  $(".wrapper").slick();
});

// accordion
$(document).ready(function () {
  $(".accordion__logo").click(function () {
    $(".accordion__text").removeClass("accordion__text--main");
    const parent = $(this).parent();
    if (parent.hasClass("accordion--active")) {
      parent.removeClass("accordion--active");
    } else {
      $(".accordion").removeClass("accordion--active");
      parent.addClass("accordion--active");
    }
  });
});
// burger
let header = document.querySelector(".header"),
  intro = document.querySelector(".intro"),
  burger = document.querySelector(".burger"),
  nav = document.querySelector(".nav");
//Подключение Якорей//

let anchors = document.querySelectorAll('a[href*="#"]');

for (let navItem of anchors) {
  navItem.addEventListener("click", (e) => {
    e.preventDefault();

    let blockId = navItem.getAttribute("href");

    document.querySelector(blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

//Фиксация хедера//

let introH = (intro = window.innerHeight);

function checkScroll() {
  let scrollPoss = window.scrollY;

  if (scrollPoss > introH) {
    header.classList.add("headerFixed");
  } else {
    header.classList.remove("headerFixed");
  }
}

window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

//Выдача класса навигации при малом разрешении

burger.addEventListener("click", function () {
  nav.classList.toggle("nav--active");
});

//Убираем навигацию при скролле страницы
window.addEventListener("scroll", function () {
  nav.classList.remove("nav--active");
});

//При скролле страницы зажигаем кнопки в шапке\\
$(window).scroll(function () {
  let $tracked = $(".tracked");
  $tracked.each(function (i, el) {
    let top = $(el).offset().top - 50;
    let bottom = top + $(el).height();
    let scroll = $(window).scrollTop();
    let id = $(el).attr("id");
    if (scroll > top && scroll < bottom) {
      $("a.active-nav").removeClass("active-nav");
      $('a[href="#' + id + '"]').addClass("active-nav");
    }
  });
});

//Делаем слайдер на jquery//

//$(document).ready(function(){
//    let position = 0;
//    const slidesToShow = 1;
//    const slidesToScroll = 1;
//
//    const container = $('.slider-container');
//    const track = $('.slider-track');
//    const item = $('.slider-item');
//    const btn__left = $('.slick__btn--left');
//    const btn__right = $('.slick__btn--right');
//    const itemsCount = 3;
//    const itemWidth = container.width() / slidesToShow;
//    const movePosition = slidesToScroll * itemWidth
//    item.each(function(index, item){
//        $(item).css({
//            minWidth: itemWidth
//        })
//    })
//
//    btn__left.click(function(){
//        position += movePosition
//         setPosition();
//         checkBtns();
//    })
//   btn__right.click(function(){
//       position -= movePosition
//       setPosition();
//       checkBtns();
//   })
//
//    const setPosition = () => {
//        track.css({
//            transform: `translateX(${position}px)`
//        });
//    };
//    const checkBtns = () => {
//      btn__left.prop("disabled", position === 0);
//     btn__right.prop("disabled", position <= -(itemsCount - slidesToShow) * itemWidth );
//
//    };
//
//       if(position === 0){
//            btn__left.prop("disabled", true)
//        }else{
//             btn__left.remove("disabled", true)
//        }
//
//})
//
//
