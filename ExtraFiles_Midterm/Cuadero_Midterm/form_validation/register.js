$(window).on('load', function() {
    $('.preloader').fadeOut();
});
var myCursor = $(".mouse-cursor");
if (myCursor.length) {
    if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n,
            i = 0,
            o = !1;
        (window.onmousemove = function(s) {
            o ||
                (t.style.transform =
                    "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (e.style.transform =
                    "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (n = s.clientY),
                (i = s.clientX);
        }),
        $("body").on("mouseenter", "a, .cursor-pointer", function() {
                e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
            }),
            $("body").on("mouseleave", "a, .cursor-pointer", function() {
                ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                (e.classList.remove("cursor-hover"),
                    t.classList.remove("cursor-hover"));
            }),
            (e.style.visibility = "visible"),
            (t.style.visibility = "visible");
    }
}
$("#ContactForm2_contact-form-submit.contact-form-button-submit").click(function(e) {
    e.preventDefault();
    if (
        $(".contact-form-name").val() != "" ||
        $(".contact-form-email").val() != "" ||
        $(".contact-form-message").val() != ""
    ) {
        var regexEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email = $(".contact-form-email").val();
        if (regexEmail.test(email)) {
            $.ajax({
                url: "https://www.frontendforever.com/api/api.php",
                type: "POST",
                data: {
                    mode: "contactMessage",
                    name: $(".contact-form-name").val(),
                    email: $(".contact-form-email").val(),
                    message: $(".contact-form-message").val(),
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

  window.onload = function() {
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