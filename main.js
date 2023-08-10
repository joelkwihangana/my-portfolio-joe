AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  // Read more accordion functionality
  const readMoreButtons = document.querySelectorAll(".read-more");
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
      this.textContent =
        content.style.display === "block" ? "Read less" : "Read more";
    });
  });
});
