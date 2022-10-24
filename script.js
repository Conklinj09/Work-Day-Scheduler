

moment().calendar(); 

moment().format('LLLL');
console.log(moment().format( "hA"));
console.log(moment())
$("#currentDay").text(moment().format("dddd, MMMM Do"))
$(".saveBtn").on("click", function(){
  console.log($(this).siblings(".description").attr("id"))

var task= $(this).siblings(".description").val()
var time= $(this).siblings(".description").attr("id")
localStorage.setItem(time,task)
})
$("#9").val(localStorage.getItem(9))
$("#10").val(localStorage.getItem(10))
$("#11").val(localStorage.getItem(11))
$("#12").val(localStorage.getItem(12))
$("#13").val(localStorage.getItem(13))
$("#14").val(localStorage.getItem(14))
$("#15").val(localStorage.getItem(15))
$("#16").val(localStorage.getItem(16))
$("#17").val(localStorage.getItem(17))

if (moment().format("H")== $(".description").attr("id")) {
console.log('flower')
  $("#"+moment().format('H')).parent().addClass('present')
$("#"+moment().format('H')).parent().addClass('present')
}