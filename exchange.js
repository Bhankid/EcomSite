(function () {
  "use strict";

  // Form JS
  function verificationForm() {
    let current_fs, next_fs, previous_fs; // Fieldset
    let left, opacity, scale; // Fieldset properties for animation
    let animating = false; // Flag to prevent quick multi-click glitches

    document.querySelectorAll(".next").forEach((nextButton) => {
      nextButton.addEventListener("click", function () {
        if (animating) return false;
        animating = true;

        current_fs = this.parentElement;
        next_fs = this.parentElement.nextElementSibling;

        // Activate next step on progress bar
        const nextIndex = Array.from(
          document.querySelectorAll("fieldset")
        ).indexOf(next_fs);
        document
          .querySelectorAll("#progressbar li")
          [nextIndex].classList.add("active");

        // Show the next fieldset
        next_fs.style.display = "block";

        // Animate current fieldset out and next fieldset in
        const animateOut = current_fs.animate(
          [
            {
              opacity: 1,
              transform: "scale(1)",
              position: "relative",
              left: "0%",
            },
            {
              opacity: 0,
              transform: "scale(0.8)",
              position: "absolute",
              left: "50%",
            },
          ],
          {
            duration: 800,
            easing: "ease-in-out",
          }
        );

        const animateIn = next_fs.animate(
          [
            { opacity: 0, left: "50%" },
            { opacity: 1, left: "0%" },
          ],
          {
            duration: 800,
            easing: "ease-in-out",
          }
        );

        animateOut.onfinish = function () {
          current_fs.style.display = "none";
          animating = false;
        };
      });
    });

    document.querySelectorAll(".previous").forEach((prevButton) => {
      prevButton.addEventListener("click", function () {
        if (animating) return false;
        animating = true;

        current_fs = this.parentElement;
        previous_fs = this.parentElement.previousElementSibling;

        // Deactivate current step on progress bar
        const currentIndex = Array.from(
          document.querySelectorAll("fieldset")
        ).indexOf(current_fs);
        document
          .querySelectorAll("#progressbar li")
          [currentIndex].classList.remove("active");

        // Show the previous fieldset
        previous_fs.style.display = "block";

        // Animate current fieldset out and previous fieldset in
        const animateOut = current_fs.animate(
          [
            { opacity: 1, left: "0%" },
            { opacity: 0, left: "50%" },
          ],
          {
            duration: 800,
            easing: "ease-in-out",
          }
        );

        const animateIn = previous_fs.animate(
          [
            { opacity: 0, transform: "scale(0.8)" },
            { opacity: 1, transform: "scale(1)" },
          ],
          {
            duration: 800,
            easing: "ease-in-out",
          }
        );

        animateOut.onfinish = function () {
          current_fs.style.display = "none";
          animating = false;
        };
      });
    });

    document.querySelectorAll(".submit").forEach((submitButton) => {
      submitButton.addEventListener("click", function () {
        return false;
      });
    });
  }

  // Phone number select initialization
  function phoneNiceSelect() {
    if (document.getElementById("msform")) {
      const phoneInput = document.getElementById("phone");
      if (window.intlTelInput) {
        window.intlTelInput(phoneInput);
        phoneInput.value = "+233";
      }
    }
  }

  // Nice select initialization
  function nice_Select() {
    if (document.querySelector(".product_select")) {
      if (window.jQuery && window.jQuery.fn.niceSelect) {
        document.querySelectorAll("select").forEach((selectElement) => {
          window.jQuery(selectElement).niceSelect();
        });
      }
    }
  }

  // Function Calls
  verificationForm();
  phoneNiceSelect();
  nice_Select();
})();
