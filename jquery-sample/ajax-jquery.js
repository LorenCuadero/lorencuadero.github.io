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
$.ajax({
  url: 'https://api.weatherstack.com/current',
  data: {
    access_key: 'YOUR_ACCESS_KEY',
    query: 'New York'
  },
  dataType: 'json',
  success: function(apiResponse) {
    console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  }
  
});
var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    document.write(time);
    
    $.get(url, (data) => {
      $("#startdate").text(data.title);}
    )


