$(function(){
      
  // Settings
  var sliderWidth = 200,
      animationSpeed = 1000,
      duration = 4000,
      currentSlide = 1;
    
  // DOM
  var $slider = $('#slider'),
      $sliderContainer = $slider.find('.slides'),
      $slides = $sliderContainer.find('.slide');
      
  // Clone the first slide and then add it at the end of sliderContainer
  var $firstSlide = $slides.first().clone();
  $sliderContainer.append($firstSlide);
    
  
  setInterval(function() {
      
    $sliderContainer.animate({'margin-left': '-='+sliderWidth}, animationSpeed, function(){
      
      currentSlide++;
      
      if(currentSlide === ($slides.length+1)){
        currentSlide = 1;
        $sliderContainer.css({'margin-left': 0});
      }
      
    });
    
  }, duration);
              
});