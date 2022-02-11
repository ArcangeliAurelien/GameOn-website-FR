function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const ThxModal = document.querySelector(".ThxModal");
const content = document.querySelector(".content");

const closeModalBtn = document.querySelector("#closeModal");
const closeThxModalBtn = document.querySelector("#closeThxModal");
const closeBtn = document.querySelector(".btn-close");

const submit = document.querySelector("#submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); //Appel de la modale formulaire

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fermeture de la modale
closeModalBtn.addEventListener("click", closeModal);        //fermeture de la modale formulaire
closeThxModalBtn.addEventListener("click", closeThxModal);  //fermeture de la modale de remerciement
closeBtn.addEventListener("click", closeModalThx);          //fermeture avec le bouton de la modale de remerciement

function closeModal() {
  modalbg.style.display = "none";
}
function closeThxModal() {
  ThxModal.style.display = "none";
}
function closeModalThx() {
  ThxModal.style.display = "none";
}

// Implémenter les entrées du formulaire
let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', validate);


//Expression régulière:
let myRegexName = /^[a-zA-Zàáâäçèéêëìíîïñòóôöùúûü-\s]+$/;
let myRegexEmail = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
let myRegexDate = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
let myRegexQuantity = /^[0-9]+$/;



function ValidFirst() {
  //Vérification du Prénom
  let checkFirst = document.getElementById('first');
  let erreurFirst = document.getElementById('erreurFirst');

  if (checkFirst.value == "" || checkFirst.value.length < 2) {
    erreurFirst.innerHTML = "Veuillez entrer 2 caractères ou plus";
    checkFirst.className = "incorrect";
    return false;
  } else if (myRegexName.test(checkFirst.value) == false) {
    erreurFirst.innerHTML = "Les chiffres ne sont pas autorisé";
    checkFirst.className = "incorrect";
    return false;
  } else {
    erreurFirst.innerHTML = "";
    checkFirst.className = "correct";
    return true;
  };
}


function ValidLast() {
  //Vérification du Nom
  let checkLast = document.getElementById('last');
  let erreurLast = document.getElementById('erreurLast');

  if (checkLast.value == "" || checkLast.value.length < 2) {
    erreurLast.innerHTML = "Veuillez entrer 2 caractères ou plus";
    checkLast.className = "incorrect";
    return false;
  } else if (myRegexName.test(checkLast.value) == false) {
    erreurLast.innerHTML = "Les chiffres ne sont pas autorisé";
    checkLast.className = "incorrect";
    return false;
  } else {
    erreurLast.innerHTML = "";
    checkLast.className = "correct";
    return true;
  };
}

function ValidEmail() {
  //Vérification de l'Email
  let checkEmail = document.getElementById('email');
  let erreurEmail = document.getElementById('erreurEmail');

  if (checkEmail.value == "") {
    erreurEmail.innerHTML = "Veuillez entrer une adresse mail valide";
    checkEmail.className = "incorrect";
    return false;
  } else if (myRegexEmail.test(checkEmail.value) == false) {
    erreurEmail.innerHTML = "Ceci n'est pas une adresse mail";
    checkEmail.className = "incorrect";
    return false;
  } else {
    erreurEmail.innerHTML = "";
    checkEmail.className = "correct";
    return true;
  };
}

function ValidBirthdate() {
  //Vérification de la date de naissance
  var dateString = document.getElementById("birthdate").value;
  let erreurBirthdate = document.getElementById('erreurBirthdate');
  if (dateString != "") {
    var today = new Date();
    var checkBirthdate = new Date(dateString); 
    var age = today.getFullYear() - checkBirthdate.getFullYear();

    if (age < 18 || age > 100) {
      erreurBirthdate.innerHTML = "Vous devez être majeur";
      checkBirthdate.className = "incorrect";
      return false;
    }
    else {
      erreurBirthdate.innerHTML = "";
      checkBirthdate.className = "correct";
      return true;
    }
  }
  else {
    erreurBirthdate.innerHTML = "Vous devez entrer votre date de naissance";
    checkBirthdate.className = "incorrect";
    return false;
  }
}

function ValidQuantity() {
  //Vérification du nombre de tournoi participer
  let checkQuantity = document.getElementById('quantity');
  let erreurQuantity = document.getElementById('erreurQuantity');

  if (myRegexQuantity.test(checkQuantity.value) == false) {
    erreurQuantity.innerHTML = "Vous devez utiliser des nombres";
    checkQuantity.className = "incorrect";
    return false;
  } else if (checkQuantity == "") {
    erreurQuantity.innerHTML = "Indiquez le nombre de tournoi déjà participé";
    checkQuantity.className = "incorrect";
    return false;
  } else {
    erreurQuantity.innerHTML = "";
    checkQuantity.className = "correct";
    return true;
  };
}

function ValidLocation() {
  //Vérification des locations
  let checkLocations = document.getElementsByName('location');
  let erreurLocation = document.getElementById('erreurLocation');

  if (checkLocations[0].checked
    || checkLocations[1].checked
    || checkLocations[2].checked
    || checkLocations[3].checked
    || checkLocations[4].checked
    || checkLocations[5].checked) {
    erreurLocation.innerHTML = "";
    checkLocations.className == "checkbox-input checkbox-input:checked";
    return true;
  } else {
    erreurLocation.innerHTML = "Vous devez sélectionné une ville";
    checkLocations.className = "incorrect";
    return false;
  }
}

function ValidCheckbox() {
  //Vérification des conditions d'utilisation
  let checkbox = document.getElementById('checkbox1');
  let erreurCheckbox = document.getElementById('erreurCheckbox');

  if (checkbox.checked) {
    erreurCheckbox.innerHTML = "";
    checkbox.className = "checkbox-input"
    return true;
  } else {
    erreurCheckbox.innerHTML = "Vous devez accepté les conditions d'utilisation";
    checkbox.className = "";
    return false;
  }
}

function validate(e) {
  e.preventDefault();
  //Validation formulaire
  console.log('first', ValidFirst());
  console.log('last', ValidLast());
  console.log('email', ValidEmail());
  console.log('birthdate', ValidBirthdate());
  console.log('Quantity', ValidQuantity());
  console.log('Location', ValidLocation());
  console.log('Checkbox', ValidCheckbox());

  if (ValidFirst()
    && ValidLast()
    && ValidEmail()
    && ValidBirthdate()
    && ValidQuantity()
    && ValidLocation()
    && ValidCheckbox()) {
    ThxModal.style.display = "block";
    modalbg.style.display = "none";
    myForm.reset();
  };
}