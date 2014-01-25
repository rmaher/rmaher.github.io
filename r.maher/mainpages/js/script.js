$(document).ready(function(){
  $('#container').masonry({
    isAnimated: true,
    bindResize: true,
    columWidth: 340,
    isOriginLeft: false,
    itemSelector: '.item'	
  }).imagesLoaded(function(){
    $(this).masonry('reload');
  });
});