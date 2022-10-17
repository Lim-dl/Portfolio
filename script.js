window.onload = function () {
  document.documentElement.scrollTop = 0;
  document.getElementById("scrollCards").scrollTop = 0;

  //Класс для прелоадера
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

//Отслеживание позиции скролла и переключение стилей активной страницы
window.addEventListener('scroll', event => {
  document.querySelector('.bubble__body--middle').style.backgroundPosition = '50% -' + (window.pageYOffset / 2.5) + "px";
  document.querySelector('.bubble__body--top').style.backgroundPosition = '50% -' + (window.pageYOffset / 1.5) + "px";

  let navigationLinks = document.querySelectorAll('ul li a');
  let fromTop = window.scrollY;
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

//Запрет показа якорей в адресной строке
$('a[href^="#"]').on('click', function (e) { // Если ссылка является якорем, то выполняем следующее:
  let link = $(this).attr('href'), // берём ссылку якоря. Она же по факту id элемента
    el = $(document).find(link); // ищем элемент
  if (el.length > 0) { // если он существует
    el = el.eq(0).offset().top; // берём ПЕРВЫЙ элемент
    $(window).scrollTop(el); // выполняем к нему скролл
  }
  return false; // Отменяем переход по ссылке => и вывод якоря в адресную строку
});

//Показ стартово хэдинга побуквенно (эффект печати)
let textHeading = document.querySelector(".text-animated").innerText;
document.querySelector(".text-animated").innerText = "";

function fun1(num, txt) {
  if (num++ < txt.length) {
    if (num > txt.length - 1) return 0;
    document.querySelector(".text-animated").innerText += txt[num];
    setTimeout(fun1, 30, num, txt);
  }
}
fun1(-1, textHeading);

//кнопка перемотки карточек
$("#scrollCards").on('scroll', function () {
  if ($("#scrollCards").scrollTop() <= 5) {
    $(".scroll-top-but").addClass('hide');
  } else {
    $(".scroll-top-but").removeClass('hide');
  }
});