document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
  
    // Add click event listener to each navigation link
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
  
        // Get the target section's ID from the link's href attribute
        const targetId = this.getAttribute("href").substring(1);
  
        // Scroll smoothly to the target section
        document.getElementById(targetId).scrollIntoView({
          behavior: "smooth",
        });
  
        // Adjust scroll position to show content below the header
        const headerHeight = document.querySelector("header").offsetHeight;
        window.scrollBy(0, -headerHeight);
      });
    });
  });
  