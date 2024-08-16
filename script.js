// $(document).ready(function () {
//     $("a").on("click", function (event) {
//       if (this.hash !== "") {
//         event.preventDefault();

//         var hash = this.hash;
//         $("html, body").animate(
//           {
//             scrollTop: $(hash).offset().top,
//           },
//           800,
//           function () {
//             window.location.hash = hash;
//           }
//         );
//       }
//     });
//   });

//   $(".menu-items a").click(function () {
//     $("#checkbox").prop("checked", false);
//   });

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Add click event listener to all anchor tags
  document.querySelectorAll("a").forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      // Check if the anchor has a hash (i.e., is linking to an ID on the page)
      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        // Smooth scroll to the element with the corresponding ID
        var targetElement = document.querySelector(hash);
        if (targetElement) {
          window.scroll({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });

          // Update the URL hash after the scrolling
          setTimeout(function () {
            window.location.hash = hash;
          }, 800); // Match the scroll duration
        }
      }
    });
  });

  // Add click event listener to menu items
  document.querySelectorAll(".menu-items a").forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      var checkbox = document.getElementById("checkbox");
      if (checkbox) {
        checkbox.checked = false; // Uncheck the checkbox
      }
    });
  });
});

// Get the best-seller container
const bestSellerContainer = document.querySelector(".best-seller");

// Get all the best-p1 elements
const bestP1Elements = document.querySelectorAll(".best-p1");

// Set the animation duration
const animationDuration = 5000; // 5 seconds

// Set the animation delay
const animationDelay = 5000; // 5 seconds

// Create a function to animate the best-p1 elements
function animateBestP1Elements() {
  // Loop through each best-p1 element
  bestP1Elements.forEach((element, index) => {
    // Set the animation delay for each element
    const delay = animationDelay * index;

    // Set the animation duration for each element
    const duration = animationDuration;

    // Animate the element
    element.style.animation = `slide ${duration}ms ${delay}ms infinite`;
  });
}

// Call the animate function
animateBestP1Elements();
