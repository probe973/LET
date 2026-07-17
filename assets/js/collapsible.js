(function() {
  // Grab all buttons and all content boxes on the page
  var buttons = document.getElementsByClassName("collapsible");
  var contents = document.getElementsByClassName("content");
  
  if (buttons.length === 0) return;

  // Loop through every button by its index number (0, 1, 2, etc.)
  for (var i = 0; i < buttons.length; i++) {
    (function(index) {
      buttons[index].addEventListener("click", function() {
        this.classList.toggle("active");
        
        // Match the button directly to the content box with the exact same index number
        var content = contents[index];
        
        if (content) {
          if (this.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
          } else {
            content.style.maxHeight = null;
          }
        }
      });
    })(i);
  }
})();

