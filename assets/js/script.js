$(function(){

  $('a').on('click', function(event){
    if(this.hash !== "" && this.hash !== "#top"){
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  $("a[href='#top']").click(function(e){
    e.preventDefault();
    $("html, body").animate({scrollTop:0}, "slow");
    return false;
  });
});
