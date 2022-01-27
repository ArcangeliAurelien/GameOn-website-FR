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
function closeModal() {
  modalbg.style.display = "none";
}

closeModalBtn.addEventListener("click", closeModal);

submit.addEventListener("click", validate);

// Implémenter les entrées du formulaire
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const location1 = document.getElementById('location1');
const location2 = document.getElementById('location2');
const location3 = document.getElementById('location3');
const location4 = document.getElementById('location4');
const location5 = document.getElementById('location5');
const location6 = document.getElementById('location6');
const checkbox1 = document.getElementById('checkbox1');


function validate() {

  //Masquer les messages
  let tooltip = document.querySelectorAll('.tooltip');			//Sélectionne l'ensemble des éléments à cacher

  for (var i = 0; i < tooltip.length; i++) {						//La méthode utilisée pour cacher les messages d'erreur
    tooltip[i].style.display = 'none';
  }


  //Vérifier le prénom
  if (first.value.length < 2 || first.value == "") {
    tooltip[0].style.display = 'inline';
    prenom.className = "incorrect";
  }else {
    tooltip[0].style.display = 'none';
    prenom.className = "correct";
  }


}