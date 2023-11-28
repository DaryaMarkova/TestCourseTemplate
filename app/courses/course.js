(function() {
  const header$ = $('.course-sub_header');
  const startLink$ = $('.course-start__link')

  $('.course-topic__list-item').hover(function(event) {
    const currentLink = event.currentTarget.getElementsByClassName('course-topic__list-item__title')[0];

    header$.text(currentLink.innerHTML);
    startLink$.attr('href', currentLink.getAttribute('href'))
  })
})();
