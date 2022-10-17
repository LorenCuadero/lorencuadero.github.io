$(document).ready(function(){
   
    $("#submit").click(function(m_input){
      
        var m_input = $("#month").val();
        var dt = new Date(m_input);
        if(dt.getDay() == 6 || dt.getDay() == 0)
        {
            $(".weekend-res").append("<b>The </b>" + m_input + "<b> is weekend <b>");
            
           
            
         } 
     else{
        
        $(".weekday-res").append("<b>The </b>" + m_input + "<b> is weekday <b>");
        
        
     }
     $("#month").val("");
        
      });

   
  });
