// On récupère les éléments du DOM
const errorMessage = document.querySelector("#error-message");
const formulaire = document.querySelector("#form");
const commentList = document.querySelector("#comment-list");

// On prend un commentaire existant comme modèle
const sampleComment = document.querySelector("#comment-list > div");

// Afficher le message d'erreur
function showError() {
  errorMessage.style.display = "block";
}

// Cacher le message d'erreur
function hideError() {
  errorMessage.style.display = "none";
}

// Vérifier si un ou plusieurs champs sont vides
function checkErrors(firstName, lastName, message) {
  return firstName === "" || lastName === "" || message === "";
}

// Ajouter un nouveau commentaire
function addComment(firstName, lastName, message) {
  // On clone le commentaire modèle à chaque envoi
  const newComment = sampleComment.cloneNode(true);

  // On récupère les éléments à modifier dans le clone
  const content = newComment.querySelector(".flex-1");
  const title = newComment.querySelector("h3");
  const paragraph = newComment.querySelector("p");

  content.classList.add("border-t", "border-gray-200");

  // On remplace le contenu
  title.textContent = `${firstName} ${lastName}`;
  paragraph.textContent = message;

  // On ajoute le nouveau commentaire dans la liste
  commentList.appendChild(newComment);
}

// Gérer l'envoi du formulaire
function handleSubmit(event) {
  event.preventDefault();

  // On récupère les valeurs saisies
  const firstName = document.querySelector("#first-name").value.trim();
  const lastName = document.querySelector("#last-name").value.trim();
  const message = document.querySelector("#message").value.trim();

  // Vérification des champs vides
  if (checkErrors(firstName, lastName, message)) {
    showError();
    return;
  }

  // Si tout est rempli
  hideError();
  addComment(firstName, lastName, message);
  formulaire.reset();
}

// Écoute de la soumission du formulaire
formulaire.addEventListener("submit", handleSubmit);