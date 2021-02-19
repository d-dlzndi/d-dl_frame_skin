$(window).ready(function(){

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500)
          $('#topBT').fadeIn();
        else
          $('#topBT').fadeOut();
    });

  $("#topBT").click(function(){
    $('html, body').animate({scrollTop : 0}, 400);
    $("#all").stop().animate({opacity : 1}, 300);
    $("#allin > *").stop().animate({opacity : 1}, 300);
    // return false;
  });

  var anh = $("a#page_prev").attr("href");
  var anp = $("a#rep_prev");
  if(anh != "undefined" || anh != undefined){
  anp.attr("href",anh);
  }else{
  anp.attr("href", "undefined");
  }

  anh = $("a#page_next").attr("href");
  anp = $("a#rep_next");
  if(anh != "undefined" || anh != undefined){
  anp.attr("href",anh);
  }else{
  anp.attr("href", "undefined");
  }
  // ▲ https://www.clien.net/service/board/lecture/4336515


var slider = $(".cover-slider").length;

for(i = 1; i<= slider; i++){
  $(".cover-slider").eq(i-1).addClass("cs"+i);
  var sel = $(".cs"+i+" li");
  $(".cover-slider").eq(i-1).attr("ct", sel.length).attr("now", 0);
    //for(j = 0; j<sel.length; j++){
    //  sel.eq(j).attr("num", j+1);
    //}
  sel.eq(0).css({"top":"0"});
}

}); //ready end

function allLoad() {
  //$("#all").slideDown(500);
  $('.tagcon').each(function () {
     var comma = $(this).html();
     $(this).html(comma.replace(/,/g, ''));
   }); //태그 내 콤마를 지워주는 스크립트.

  $("#allin > *").animate({opacity : 1}, 300);
  $(".br").animate({ width : "200px" }, 1000);
}

function toggle() {
  $("#side1").children().not(".blogInfo").not(".search").slideToggle();
  $("#side2").children().not(".blogInfo").not(".search").slideToggle();
}

function cs_next(e){
var select = $(e).closest(".cover-slider");
var sel = select.find("li");
var imgs = sel.length - 1;
var now = Number(select.attr("now"));
// alert(now);

now= now==imgs?0 :now+=1;
var noow = now==0?imgs :now-1;
sel.eq(noow).css({"top":"-150%"});
sel.eq(now).css({"top":"0"});
select.attr("now", now);
}
