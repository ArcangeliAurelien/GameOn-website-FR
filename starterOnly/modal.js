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
//Expression régulière:
let myRegexName = /^[a-zA-Z-\s]+$/; 
let myRegexEmail = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
let myRegexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
let myRegexQuantity = /^[0-9]+$/;

myForm.addEventListener('submit', function (validate) {
  //Vérification du Prénom
  let checkFirst = document.getElementById('first');

  if(checkFirst.value == "" || checkFirst.value.length < 2) {
    let myErrorFirst = document.getElementById('errorFirst');
    myErrorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    checkFirst.className = "incorrect";
    validate.preventDefault();
  }else if(myRegexName.test(checkFirst.value) == false) {
    myErrorFirst.innerHTML = "Les chiffres ne sont pas autorisé";
    checkFirst.className = "incorrect";
    validate.preventDefault();
  } else {
    console.log('OK');
    myErrorFirst.style.display = 'none';
    return true;
  }

  //Vérification du Nom
  let checkLast = document.getElementById('last');

  if(checkLast.value == "" || checkLast.value.length < 2) {
    let myErrorLast = document.getElementById('errorLast');
    myErrorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    checkLast.className = "incorrect";
    validate.preventDefault();
  }else if(myRegexName.test(checkLast.value) == false) {
    myErrorLast.innerHTML = "Les chiffres ne sont pas autorisé";
    checkLast.className = "incorrect";
    validate.preventDefault();
  }else {
    console.log('OK');
    return true;
  }

  //Vérification de l'Email
  let checkEmail = document.getElementById('email');

  if(checkEmail.value == "") {
    let myErrorEmail = document.getElementById('errorEmail');
    myErrorEmail.innerHTML = "Veuillez entrer une adresse mail valide";
    checkEmail.className = "incorrect";
    validate.preventDefault();
  }else if(myRegexEmail.test(checkEmail.value) == false) {
    myErrorEmail.innerHTML = "Ceci n'est pas une adresse mail";
    checkEmail.className = "incorrect";
    validate.preventDefault();
  }else {
    console.log('OK');
    return true;
  }

  //Vérification de la date de naissance
  let checkBirthdate = document.getElementById('birthdate');

  if(checkBirthdate.test(checkBirthdate.value) == false) {
    let myErrorBirthdate = document.getElementById('ErrorBirthdate');
    myErrorBirthdate.innerHTML = "Vous devez entrer votre date de naissance";
    checkBirthdate.className = "incorrect";
    validate.preventDefault();
  }else {
    console.log('OK');
    return true;
  }

  //Vérification du nombre de tournoi participer
  let checkQuantity = document.getElementById('quantity');

  if(checkQuantity >= 0 && checkQuantity <= 99) {
    console.log('OK');
    return true;
  }else if(checkQuantity.test(checkQuantity.value) == false) {
    let myErrorQuantity = document.getElementById('ErrorQuantity');
    myErrorQuantity.innerHTML = "Vous devez utiliser des nombres";
    checkQuantity.className = "incorrect";
    validate.preventDefault();
  }else if(checkQuantity == "") {
    myErrorQuantity.innerHTML = "Vous devez indiquer si vous avez déjà participé à un tournoi";
    checkQuantity.className = "incorrect";
  }

  //Vérification checkbox


})