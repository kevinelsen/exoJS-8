//Déclaration de la fonction
function calcul(){
  //Déclaration des variables
  var age = document.getElementById('age').value;
  var regex = /[0-9]+/;
  //boite de dialogue avec appel des variables
  if (regex.test(age) == true ){
    if (age >=18) {
      alert('Vous êtes majeurs : ');
    }
    else {
      alert('Vous êtes un menteur');
    }
  }
}
