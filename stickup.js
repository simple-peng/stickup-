$.fn.stick = function(){
    $('.nav').each(function(){
    var $nav=$(this),

    // height=$nav.height(),
    width=$nav.width(),
    offsetTop=$nav.offset().top,
    offsetLeft=$nav.offset().left;
    var $navClone=$nav.clone().css({opacity: '0',display:'none'}).insertBefore($nav);

    $(window).on('scroll',function(){
      var scrollTop=$(this).scrollTop();
      if(scrollTop>=offsetTop){
        if(!isFixed()){
          setFixed();
        }
      }else{
        if(isFixed()){
          unsetFixed();
        }
      }
    });

    function isFixed(){
      return $nav.data('fixData');
    }
    function setFixed(){
      $nav.data('fixData', true);
      $nav.css({
        position:'fixed',
        width:width,
        top: '0',
        left: offsetLeft,
        marginTop:'0',
        'z-index': 9999
      });
      $navClone.show();
    }
    function unsetFixed(){
      $nav.data('fixData', false);
      $nav.removeAttr('style');
      $navClone.hide();
    }
  });
}