const date = new Date();
const heures = date.getHours();
const minutes = date.getMinutes();
let id;
let psw;

function verifie(){
	id = document.getElementById("Identifiant").value;
	psw = document.getElementById("psw").value;
	if (id == heures%10 && psw == minutes%10) {
		document.location.href = "1ChoixLangue.html"
	}
	else{
		document.getElementById("Identifiant").value = "";
		document.getElementById("psw").value = "";
	}

}
