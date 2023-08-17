//open btn jQuery Code
$("#openSlider").click(function () {
    $(".sliderBar").animate({ width: '250px' }, 50);
    $(".layOut").animate({ marginLeft: '250px' }, 50);
})
//close btn jQuery Code
$(".closebtn").click(function () {
    $(".sliderBar").animate({ width: '0px' }, 50);
    $(".layOut").animate({ marginLeft: '0px' }, 50);
})

//sliderDown jQuery Code
$(document).ready(function () {
    $(".accordion").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).next(".content").slideUp("fast")
        }
        else{
            $(".accordion.active").removeClass("active");
            $(".content").slideUp("fast");
            $(this).addClass("active");
            $(this).next(".content").slideDown("fast");
        }
    })
})





var countDownDate = new Date("Aug 4, 2024 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML =  " -"+days + " d " ;
  document.getElementById("hours").innerHTML = hours + " h ";
  document.getElementById("mins").innerHTML = minutes + " m ";
  document.getElementById("secs").innerHTML = seconds + " s ";
 
  if (distance < 0) {
    clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("mins").innerHTML = "0";
        document.getElementById("secs").innerHTML = "0";
    }
}, 1000);



