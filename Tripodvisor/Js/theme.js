// Je crée un nouveau module nommé 'theme'
// Je lui ajoute une méthode init afin d'appeler
// toutes les méthodes à charger au démarrage du module
const theme = {
    // Ensuite je crée une propriété pour récupérer le bouton
    // permettant de gérer l'affichage du dark-mode
    themeSwitchButton: document.getElementById("theme-switch"),
  
    // Méthode d'initialisation du module
    init: function () {
      theme.themeSwitchButton.addEventListener("click", theme.handleThemeSwitch);
    },
  
    // Et je crée une méthode permettant d'écouter l'événement
    // de clic sur le bouton de theme afin soit d'appliquer
    // la classe 'dark-mode' sur le <body> ou de l'enlever
    // s'il est présent
    handleThemeSwitch: function () {
      document.body.classList.toggle("theme-dark")
    },
  };
  