import "../scss/app.scss";

// This block will be executed once the page is loaded and ready
  window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    var hot = document.querySelectorAll(".hot")

    hot.forEach(item => {
      item.innerHTML += "🔥"
    })
  })
