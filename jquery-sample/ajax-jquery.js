$(function(){
    let url = "https://jsonplaceholder.typicode.com/posts/";
    let randomNumber = Math.floor(Math.random()*100);
    url = url + randomNumber;
    $.get(url, (data) => {
        $("#quote").text(data.title);
    })
    let date = new Date();
    $("#btn").click(function(){
      let value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      $("#showDate").text(value);
    });	
})