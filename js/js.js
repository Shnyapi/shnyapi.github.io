$(document).ready(function () {

  $(".valuation-list-item").on("click", function(){
    $(".valuation-list-item").removeClass("active");    
    $(this).prevAll().addClass("active");
    $(this).addClass("active");
  })

  $(".valuation-list-item").hover(
    function(){
      $(this).prevAll().addClass("bgHover");
      $(this).addClass("bgHover");
    },
    function(){
      $(".valuation-list-item").removeClass("bgHover")
    });
  $(".valuation-button").on("click", function () {
    alert("Ваша оценка " + $(".valuation-list-item.active").length + " принята")
  })
})
