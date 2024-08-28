const app = {
    init: function () {
      newsletter.init();
      theme.init();
    },
  };
  
  document.addEventListener("DOMContentLoaded", app.init);