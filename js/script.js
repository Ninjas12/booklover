document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}


$(document).ready(() => {

  $('.hamburger-menu').click(() => {
    $('.navigation').toggleClass('change');
  });
   
  lightbox.option({
    'wrapAround': true
  });

  $(window).scroll(() => {
    let position = $(this).scrollTop();
    
    if(position >= 350){
      $('.gallery').addClass('change');
    } else {
      $('.gallery').removeClass('change');
    }
  })

  $('.writers-accordion').click(function(event){
    if(event.target.id.split('-')[0] === "button"){
      $('#book-1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
      $('#book-2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
    }
  });


})

































