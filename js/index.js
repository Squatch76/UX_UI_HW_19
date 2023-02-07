// $('.active').on("click", function(){
    
//     $('#').scroll("<div id='workGrid'>")
// });


// function scroll_to_div("#pageTopic");
// {
//     $('html,body').animate(
//         {
//             scrollTop: $("#"+Work).offset().scrollTop
//         },
//         'slow');
    
// }
// $(".modal-btn").on("click", function(){
// $("#myModal").slideToggle;
// })
var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
// new code for background 
var navulliul= document.querySelector('.modal-bg');
// var modalClose = document.querySelector('.submit-btn');

modalBtn.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click',function(){
    modalBg.classList.remove('bg-active');
});
// modalClose.addEventListener('click',function(){
//     modalBg.classList.remove('bg-active');
// });

// new code for dropdown menu darken
modalBtn.addEventListener('click',function(){
    navulliul.classList.add('bg-active');
});
modalClose.addEventListener('click',function(){
    navulliul .classList.remove('bg-active');
});