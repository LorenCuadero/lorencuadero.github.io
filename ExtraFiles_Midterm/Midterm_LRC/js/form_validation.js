$("#submitna").click(function(e) {
    e.preventDefault();
    if (
        $("#firstname").val() != "" ||
        $("#lastname").val() != "" ||
        $("#email").val() != "" 
       
    ) {
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
                success: function(data) {
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
});

var dismissBtn = document.querySelector('.dismiss-btn'),
adBlockPopup = document.querySelector(".cn-popup-box"),
btnS = document.querySelector('.btnS'),
cnBgEffect = document.querySelector(".cn-bg-effect");
dismissBtn.addEventListener("click", () => {
hidePopup();
});

function showPopup() {
adBlockPopup.classList.add("show");
cnBgEffect.classList.add("show");
bodyEl.style.overflowY = "hidden";
}

function hidePopup() {
adBlockPopup.classList.remove("show");
cnBgEffect.classList.remove("show");
bodyEl.style.overflowY = "auto";
}

window.onload = function () {
if (window.innerWidth < 800) {
  var googleplay = localStorage.getItem("googleplay");
  if (googleplay == null) {
    showPopup();
    btnS.addEventListener("click", (e) => {
      localStorage.setItem("googleplay", new Date().getTime());
    });
  } else {
    if (googleplay == "LifeTime") {
      hidePopup();
    } else {
      btnS.innerHTML = "Already installed";
      btnS.classList.add("already-installed");
      btnS.addEventListener("click", (e) => {
        localStorage.setItem("googleplay", "LifeTime");
      });
      showPopup();
    }
  }
}
};