$(function(){
	// 轮播图      
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    initialSlide :2,
			loop : true,
			loopAdditionalSlides : 1,
			autoplay:3000,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
  })  
  var inner = $('.header-inner');
  if(inner.height){
    
  }
})