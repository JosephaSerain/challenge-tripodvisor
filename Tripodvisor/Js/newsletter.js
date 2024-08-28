// Je souhaite créer un objet qui s'appelle app
// et qui contient une méthode 'init'
// Cette méthode contient une instruction
// console.log("module chargé")
const newsletter = {
    //* Propriétés
    // On crée une propriété pour récupérer le lien de newsletter
    // dont l'id est "newsletter-btn"
    newsletterBtn: document.getElementById("newsletter-btn"),
  
    // On récupère le bloc newsletter dont la classe est "newsletter"
    newsletterBlock: document.querySelector(".newsletter"),
  
    // On crée une nouvelle propriété afin de stocker l'élément qui
    // comporte la croix de notre newsletter
    newsletterCloseBtn: document.querySelector(".newsletter__close"),
  
    // On stocke notre liste de mails interdits dans une propriété
    forbiddenDomains: [
      "@yopmail.com",
      "@yopmail.fr",
      "@yopmail.net",
      "@cool.fr.nf",
      "@jetable.fr.nf",
      "@courriel.fr.nf",
      "@moncourrier.fr.nf",
      "@monemail.fr.nf",
      "@monmail.fr.nf",
      "@hide.biz.st",
      "@mymail.infos.st",
    ],
  
    // On récupère le formulaire avec son type de balise (<form>) et
    // on le stocke dans une propriété
    newsletterForm: document.querySelector("form"),
  
    // * Méthodes
  
    // Méthode à charger au chargement de notre page
    // Loading method when the page has been charged
    init: function () {
      newsletter.eventListeners();
    },
  
    // Méthode appelant tous les eventListeners
    eventListeners: function () {
      newsletter.handleNewsletterLinkClick();
      newsletter.handleNewsletterCloseBtnClick();
      window.addEventListener("scroll", newsletter.handleWindowScroll);
      newsletter.newsletterForm.addEventListener(
        "submit",
        newsletter.handleFormSubmit
      );
    },
  
    // Méthode à créer permettant de récupérer la valeur qui est située
    // dans l'input du formulaire
    handleFormSubmit: function (event) {
      // On va neutraliser le comportement par défaut du formulaire
      event.preventDefault();
  
      // Je récupère la valeur de l'élément de la cible à l'index 0
      // soit le champ de saisie de mon formulaire
      const inputValue = event.target[0].value;
  
      // L'email passé en argument de ma méthode emailsChecker est retrouvé
      // dans le tableau des mails suspicieux
      // alors, je renvoie un message d'erreur à mon utilisateur
      if (newsletter.emailsChecker(inputValue)) {
        window.alert("Attention ! Vous utilisez un mail frauduleux !");
      }
      // Sinon, l'email semble être "clean" et donc, je peux dire à mon utilisateur
      // qu'il est inscrit à ma newsletter
      else {
        window.alert("Youpi ! Vous êtes inscrit à la newsletter");
      }
    },
  
    // Méthode qui va checker ce que contient une chaîne de caractères
    // et va la comparer à des éléments qui se situe dans un tableau (forbiddenDomains)
    emailsChecker: function (email) {
      // 1- On va utiliser la méthode Array.find() sur notre tableau
      // forbiddenDomains afin de le parcourir
      // MDN : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find
      return newsletter.forbiddenDomains.find(
        (domain) => email.includes(domain)
        // 2 - Pour trouver si un mail correspond à un domaine inclus
        // dans le tableau, on utilise la méthode includes afin de
        // comparer chaque élément de notre tableau à un mail proposé par
        // un utilisateur (), on peut utiliser un paramètre de fonction
        // ou une chaîne de caractères pour tester
        // MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
      );
    },
  
    // Méthode qui affiche le bloc de newsletter au scroll
    // On doit ajouter un événement sur la fenêtre (window)
    handleWindowScroll: function () {
      // Ici, on va indique que si la propriété window.scrollY
      // est supérieur à 299, alors on affiche notre bloc de
      // newsletter
      // Pour rappel, la propriété window.scrollY contient la hauteur
      // de la page en pixel où nous sommes dans le défilement de la page
      // MDN :https://developer.mozilla.org/fr/docs/Web/API/Window/scrollY
      if (window.scrollY > 299) {
        newsletter.newsletterBlock.classList.remove("newsletter--hidden");
  
        // Mettez la méthode qui permet de retirer un écouteur d'événement
        window.removeEventListener("scroll", newsletter.handleWindowScroll);
      }
    },
  
    // ON doit connaître le nombre de pixels défilé
    //et donc afficher le bloc quand on arrive à 300px
  
    // Méthode qui va permettre de cacher le bloc newsletter
    // lorsque l'on clique sur la croix
    handleNewsletterCloseBtnClick: function () {
      newsletter.newsletterCloseBtn.addEventListener("click", function () {
        newsletter.newsletterBlock.classList.add("newsletter--hidden");
      });
    },
  
    // Méthode afin d'afficher notre newsletter
    // lorsque l'on clique
    // sur le lien en haut de page
    handleNewsletterLinkClick: function () {
      newsletter.newsletterBtn.addEventListener("click", function (event) {
        // Je préviens du comportement par défaut d'un lien
        // qui est censé me rediriger vers une autre page / une ancre
        event.preventDefault();
  
        // On retire la classe "newsletter--hidden"
        newsletter.newsletterBlock.classList.remove("newsletter--hidden");
  
        // Avec assignation de la propriété lié à l'élément
        //   newsletter.newsletterBlock.className = "newsletter";
      });
    },
  };
  