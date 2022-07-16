const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 5000,
  },
});
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tab-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click' , function(event) {

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tabs-item').forEach(function(tabsNumber) {
        tabsNumber.classList.remove('active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('active')

      document.querySelectorAll('.tab-btn').forEach(function(tabBtnRemove) {
        tabBtnRemove.classList.remove('active')
      })

      tabsBtn.classList.add('active')
    })
  })
})
$(document).ready( function() {
  $('.question-item-header').click(function() {
    $(this).next('.question-item-content').slideToggle();
    $(this).toggleClass('question-item-header-active');
  });
});