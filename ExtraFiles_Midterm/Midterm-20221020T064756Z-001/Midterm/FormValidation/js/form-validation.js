function myFunction() {
 
    if(
      $("#firstname").val() == "" ||
      $("#lastname").val() == "" ||
      $("#email").val() == ""
   
    ){
      var regexEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email = $("#email").val();
        if (regexEmail.test(email)) {
          $.ajax({
            url: "https://www.frontendforever.com/api/api.php",
            type: "POST",
            data: {
              mode: "contactMessage",
              name: $("#firstname").val(),
              email: $("#email").val(),
              message: $("#lastname").val(),
            },
            success: function (data) {
              if (data.error.code == "#200") {
                swal({
                  title: 'Success',
                  text: "Contact form has been sent successfully",
                  icon: 'success',
                  confirmButtonText: 'Ok'
                });
              } else {
                swal({
                  title: 'Error',
                  text: "Something went wrong",
                  icon: 'error',
                  confirmButtonText: 'Ok'
                });
              }
            },
          });
        } else {
          swal({
            title: 'Error',
            text: "Please enter a valid email",
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      } else {
        swal({
          title: 'Error',
          text: "Please fill all the fields",
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
      if(
        $("#firstname").val() != "" ||
        $("#lastname").val() != "" ||
        $("#email").val() != ""
     
      ){
        var regexEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          var email = $("#email").val();
          if (regexEmail.test(email)) {
            $.ajax({
              url: "https://www.frontendforever.com/api/api.php",
              type: "POST",
              data: {
                mode: "contactMessage",
                name: $("#firstname").val(),
                email: $("#email").val(),
                message: $("#lastname").val(),
              },
              success: function (data) {
                if (data.error.code == "#200") {
                  swal({
                    title: 'Success',
                    text: "Account Created",
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });
                } else {
                  swal({
                    title: 'Error',
                    text: "Something went wrong",
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  });
                }
              },
            });
          } else {
            swal({
              title: 'Error',
              text: "Please enter a valid email",
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
        } else {
          swal({
            title: 'Error',
            text: "Please fill all the fields",
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      
    }

  

// function myFunction() {
// //   // Get the value of the input field with id="numb"
// //   let x = document.getElementById("firstname").value;
// //   // If x is Not a Number or less than one or greater than 10
// //   let text;
// //   if (isNaN(x) || x < 1 || x > 10) {
// //     text = "Please enter a valid name";
// //   } else {
// //     text = "";
// //   }
// //   document.getElementById("demo").innerHTML = text;
// // }

// //  Wait for the DOM to be ready
// $(function () {
// //   $('.restrict').on('keypress', function (event) {
// //     var regex = new RegExp("^[a-zA-Z0-9]+$");
// //     var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
// //     if (!regex.test(key)) {
// //        event.preventDefault();
// //        return false;
// //     }
// // });
// var regex = /^[a-zA-Z][a-zA-Z\\s]+$/;
// var input = $('#firstname').val();
// var output = $('#lastname').val();

// if (regex.test(input) && regex.test(output)) {
//   $('#firstname').val() == "" 
//   || $('#lastname').val() == "" 
//   || $('#lastname').val() == regex
//   || $('#firstname').val() == regex
//   alert("Please enter a valid name");
  

// };

//   $("form[name='registration']").validate({
//     // Specify validation rules
    
//     rules: {
//       // The key name on the left side is the name attribute
//       // of an input field. Validation rules are defined
//       // on the right side
//       firstname: "required",
//       lastname: "required",
//       birthdate: "required",
//       phonenumber: "required",
//       email: {
//         required: true,
//         // Specify that email should be validated
//         // by the built-in "email" rule
//         email: true,
        
        
//       },
//       password: {
//         required: true,
//         minlength: 8,
//       },
//       phonenumber:{
//         required: true,
//         minlength: 15,
//       }
//     },
//     // Specify validation error messages
//     messages: {
//       firstname: "Please enter a valid name",
//       lastname: "Please enter a valid name",
//       birthdate: "You must be 18 years old and above to create an account.",
//       phonenumber: "Please enter a valid phone number",
//       password: {
//         required: "Please provide a password",
//         minlength: "Your password must have 8 characters or more, and contain at least one special character, number, uppercase letter, and lowercase letter.",
//       },
//       email: "Please enter a valid email",
//     },
//     // Make sure the form is submitted to the destination defined
//     // in the "action" attribute of the form when valid
//     submitHandler: function (form) {
   
//       // function isOverEighteen(year, month, day) {
//       //     var now = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ''));
//       //     var dob = year * 10000 + month * 100 + day * 1; // Coerces strings to integers
        
//       //     return now - dob > 180000;
//       //   }
//         form.submit();
//     },
    
//   });
// });



