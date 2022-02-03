function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const closeModalBtn = document.querySelector("#closeModal");

const submit = document.querySelector("#submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fermeture de la modale
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// Implémenter les entrées du formulaire

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', validate);

// Expression régulière:
let myRegexName = /^[a-zA-Z-\s]+$/;
let myRegexEmail = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
let myRegexDate = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
let myRegexQuantity = /^[0-9]+$/;

// Vérification du Prénom
function ValidFirst() {
  let checkFirst = document.getElementById('first');
  let myErrorFirst = document.getElementById('errorFirst');

  if (checkFirst.value == "" || checkFirst.value.length < 2) {
    myErrorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    checkFirst.className = "incorrect";
    console.log('Prénom: ERREUR');
    e.preventDefault();
  } else if (myRegexName.test(checkFirst.value) == false) {
    myErrorFirst.innerHTML = "Les chiffres ne sont pas autorisé";
    checkFirst.className = "incorrect";
    console.log('Prénom: ERREUR');
    e.preventDefault();
  } else {
    myErrorFirst.innerHTML = "";
    checkFirst.className = "";
    console.log('Prénom: OK');
    return true;
  }
}

// Vérification du Nom
function ValidLast() {
  let checkLast = document.getElementById('last');
  let myErrorLast = document.getElementById('errorLast');

  if (checkLast.value == "" || checkLast.value.length < 2) {
    myErrorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    checkLast.className = "incorrect";
    console.log('Nom: ERREUR');
    e.preventDefault();
  } else if (myRegexName.test(checkLast.value) == false) {
    myErrorLast.innerHTML = "Les chiffres ne sont pas autorisé";
    checkLast.className = "incorrect";
    console.log('Nom: ERREUR');
    e.preventDefault();
  } else {
    myErrorLast.innerHTML = "";
    checkLast.className = "";
    console.log('Nom: OK');
    return true;
  }
}

// Vérification de l'Email
function ValidEmail(e) {
  let checkEmail = document.getElementById('email');
  let myErrorEmail = document.getElementById('errorEmail');

  if (checkEmail.value == "") {
    myErrorEmail.innerHTML = "Veuillez entrer une adresse mail valide";
    checkEmail.className = "incorrect";
    console.log('Email: ERREUR');
    e.preventDefault();
  } else if (myRegexEmail.test(checkEmail.value) == false) {
    myErrorEmail.innerHTML = "Ceci n'est pas une adresse mail";
    checkEmail.className = "incorrect";
    console.log('Email: ERREUR');
    e.preventDefault();
  } else {
    myErrorEmail.innerHTML =
      checkEmail.className = ""
    console.log('Email: OK');
    return true;
  }
}

// Vérification de la date de naissance
function ValidBirthdate() {
  let checkBirthdate = document.getElementById('birthdate');
  let myErrorBirthdate = document.getElementById('errorBirthdate');

  if (checkBirthdate.value == "" && myRegexDate.test(checkBirthdate.value) == false) {
    myErrorBirthdate.innerHTML = "Vous devez entrer votre date de naissance";
    checkBirthdate.className = "incorrect";
    console.log('Birthdate: ERREUR');
    e.preventDefault();
  } else {
    myErrorBirthdate.innerHTML = "";
    checkBirthdate.className = "";
    console.log('Birthdate: OK');
    return true;
  }
}

// Vérification du nombre de tournoi participer
function ValidQuantity() {
  let checkQuantity = document.getElementById('quantity');
  let myErrorQuantity = document.getElementById('errorQuantity');

  if (myRegexQuantity.test(checkQuantity.value) == false) {
    myErrorQuantity.innerHTML = "Vous devez utiliser des nombres";
    checkQuantity.className = "incorrect";
    console.log('Quantity: ERREUR');
    e.preventDefault();
  } else if (checkQuantity == "") {
    myErrorQuantity.innerHTML = "Indiquez le nombre de tournoi déjà participé";
    checkQuantity.className = "incorrect";
    console.log('Quantity: ERREUR');
    e.preventDefault();
  } else {
    myErrorQuantity.innerHTML = "";
    checkQuantity.className = "";
    console.log('Quantity: OK');
    return true;
  }
}

// Vérification des locations
function ValidLocation() {
  let checkLocations = document.getElementsByName('location');
  let myErrorLocation = document.getElementById('errorLocation');

  if (checkLocations[0].checked
    || checkLocations[1].checked
    || checkLocations[2].checked
    || checkLocations[3].checked
    || checkLocations[4].checked
    || checkLocations[5].checked) {
    myErrorLocation.innerHTML = "";
    checkLocations.className == "";
    console.log('Location: OK');
    return true;
  } else {
    myErrorLocation.innerHTML = "Vous devez sélectionné une ville";
    checkLocations.className = "incorrect";
    console.log('Location: ERREUR');
    e.preventDefault();
  }
}

// Vérification des conditions d'utilisation
function ValidCheckbox() {
  let checkbox = document.getElementById('checkbox1');
  let myErrorCheckbox = document.getElementById('errorCheckbox');

  if (checkbox.checked) {
    myErrorCheckbox.innerHTML = "";
    checkbox.className = ""
    console.log('Checkbox: OK');
    return true;
  } else {
    myErrorCheckbox.innerHTML = "Vous devez accepté les conditions d'utilisation";
    checkbox.className = "incorrect";
    console.log('Location: ERREUR');
    e.preventDefault();
  }
}

// Validation du formulaire
function validate() {
  if (ValidFirst()
    && ValidLast()
    && ValidEmail()
    && ValidBirthdate()
    && ValidQuantity()
    && ValidLocation()
    && ValidCheckbox()) {
    alert('Formulaire OK');
    myForm.reset();
  }
}