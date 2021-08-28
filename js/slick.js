$(document).ready(function(){
$('.gallery__slide').slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
    variableWidth: true
  });
}); 
$('.gallery__slide').on('init reInit',function(e,slick){
    if(slick.slideCount<=slick.options.slidesToShow){
      slick.slickAdd(slick.$slides.clone())
    }
})                 