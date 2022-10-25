function reloadni(){
  let url = "https://jsonplaceholder.typicode.com/todos";
  let randomNumber = Math.floor(Math.random()*100);
  url = url + randomNumber;
  $.get(url, (data) => {
      $("#results").text(data.title);
  })
}
function updateNumbers() {  
var lists = document.querySelectorAll("number");  
for(var i = 0; i < lists.length; i++) {  
  $(lists[i]).html(i+1 + ") ");  
}  
}  
updateNumbers();  
$("ul").on("click", "li", function () {  
$(this).toggleClass("completed");  
});  
$("ul").on('click', "span", function (e) {  
e.stopPropagation();  
$(this).closest("li").fadeOut(500,function() {  
$(this).remove();  
updateNumbers();  
});  
});  
$(".removeall").on('click', function (e) {  
$("li").fadeOut(500, function() {  
  $(this).remove();  
});  
});  
$("input[type='text']").keypress(function(e) {  
if(e.which === 13) {  
var todoText = $(this).val();  
if( $(this).val() !== "") {  
$("ul").append("<li> <span> <i class='fa fa-trash'> </i> </span>" + "<number></number>" + todoText + "</li>");  
  }  
updateNumbers();  
$(this).val("");  
}  
});  
$(".add").click(function() {  
$("input[type='text']").fadeToggle(200);  
});