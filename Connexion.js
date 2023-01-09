const date = new Date();
const heures = date.getHours();
const minutes = date.getMinutes();
let id;
let psw;
document.getElementById('Identifiant').focus();

function verifie(){
	id = document.getElementById("Identifiant").value;
	psw = document.getElementById("psw").value;
	if (id == ''){
		document.getElementById('Identifiant').focus();
	}
	else if (psw == ''){
		document.getElementById('psw').focus();
	}
	else if (id == heures%10 && psw == minutes%10) {
		document.location.href = "1ChoixLangue.html"
	}
	else{
		document.getElementById("Identifiant").value = "";
		document.getElementById("psw").value = "";
	}

}

// permet de valider avec la touche entrer
document.addEventListener('keydown', function(event) {
	if (event.code == "Enter") {
		verifie();
  }
});
