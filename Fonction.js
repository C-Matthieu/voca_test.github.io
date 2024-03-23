// création des constantes, variables et listes
let color = 'grey';
document.body.style.background = color;
document.getElementById('entree').focus();
let termine = false;
let fautes = 0;
let passes = 0;
var nb_mots;
let liste;
let motVocab;
let motEtud;
var langue = "";
// permet de récuperer les éléments de la zone d'entrée
function getElement(){
    localStorage.clear();
    fileInput = document.getElementById('myFile');
    langue = document.getElementById('langue').value;
    if (langue ==""){
        langue = "Anglais";
    }
    processFile(fileInput.files[0], langue);
}

// permet de récuperer les fichiers txt du répository GitHub
async function loadFileFromUrl(url, langue = "Anglais") {
    localStorage.clear();
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Échec du chargement du fichier : ${response.statusText}`);
      }
      const contents = await response.text();
      const file = new File([contents], "fichier-telecharge.txt", { type: "text/plain" });
      return processFile(file, langue);
    } catch (error) {
      console.error("Erreur lors du chargement du fichier depuis l'URL:", error);
      document.location.href = "https://c-matthieu.github.io/voca_test.github.io/";
      return null;
    }
  }
  
// permet de convertir un fichier en liste
function processFile(e, langue = "Anglais") {
    localStorage.clear();
    localStorage.setItem("langue", langue);
    const file = e;
    if (true) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const contents = e.target.result;
            const lines = contents.split('\n');
            const vocabList = lines.map(line => line.split('\t'));
            vocabList.pop();
            localStorage.setItem("liste", JSON.stringify(vocabList));
            window.location.href = "3LeTest.html?" + encodeURIComponent(langue);
        };
        reader.readAsText(file);
    } else {
        alert('No file selected');
    }
}

// permet de gérér le premier affichage
liste = localStorage.getItem("liste");
liste = eval(liste);
nb_mots = liste.length;
langue = localStorage.getItem("langue").toLowerCase();
motVocab = String(liste[aleatoire()][1]);
document.getElementById('mot').innerHTML = motVocab;
document.getElementById('langueEtud').innerHTML = langue;


// permet de valider avec la touche entrer
document.addEventListener('keydown', function(event) {
    if (event.code == "Enter" && termine == false) {
        getValue();
  }
});

// permet de prendre un élement aléatoirement dans la liste
function aleatoire() {
    if (liste.length > 0) {
        let index;
        do {
            index = Math.floor(Math.random() * liste.length);
        } while (index == motEtud && liste.length > 1);
        motEtud = index;
        return motEtud;
    } else if (liste.length == 0) {
        motEtud = 0;
        return motEtud;
    }
}
// permet de recuperer la valeur et d'agir en conséquence
function getValue()
{
    if (termine == false){
        let reponse = document.getElementById("entree").value;
        document.getElementById('entree').value = "";
        if (reponse.length == 0){
            document.getElementById("faux").innerHTML = "";
            document.getElementById("juste").innerHTML = "";
            document.getElementById("null").innerHTML = "Veuillez entrez une valeur s'il vous plaît";
            }
        else if (reponse.toUpperCase().replace(/\s+/g, '') == liste[motEtud][0].toUpperCase().replace(/\s+/g, '')){
            document.body.style.background = '#1DC16A';
            document.getElementById("faux").innerHTML = "";
            document.getElementById("null").innerHTML = "";
            document.getElementById("juste").innerHTML = `Bravo vous avez trouvé la bonne reponse, il vous reste plus que ${liste.length - 1} mots à apprendre`;
            liste.splice(motEtud, 1);
            
            if (liste.length == 0){
                termine = true;
                worker.postMessage('stop');
                document.getElementById("valider").innerHTML = 'Recommencer';
                document.body.style.background = color;
                document.getElementById("faux").innerHTML = "";
                document.getElementById("null").innerHTML = "";
                document.getElementById("mot").innerHTML = "Fin";
                document.getElementById("juste").innerHTML = `Bravo vous avez finis la liste de vocabulaire avec un total de ${fautes} erreurs et de ${passes} mots passés sur une liste de ${nb_mots} mots`;
                }
            else{
                setTimeout(afficher, 1000);
                }
            }
        else {
            document.body.style.background = '#DC143C';
            document.getElementById("juste").innerHTML = "";
            document.getElementById("null").innerHTML = "";
            document.getElementById("faux").innerHTML = `Dommage vous n'avez pas trouvé la bonne reponse, qui était ${liste[motEtud][0]}, il vous reste plus que ${liste.length} mots à apprendre`;
            fautes += 1;
            setTimeout(afficher, 1000);
            }
        }
    else if (termine == true){
        document.location.href = `3LeTest.html${a}`
    }
    }

 // gère l'affichage des mots
function afficher()
{
    aleatoire()
    let motVocab = String(liste[motEtud][1]);
    document.getElementById('mot').innerHTML = motVocab;
    document.getElementById('entree').focus();
    document.body.style.background = color;
}

// gère les accents
function á(){
    let reponse = document.getElementById("entree").value;
    document.getElementById('entree').value = reponse + "á";
    document.getElementById('entree').focus();
}

function ú(){
    let reponse = document.getElementById("entree").value;
    document.getElementById('entree').value = reponse + "ú";
    document.getElementById('entree').focus();
}
        
function í(){
    let reponse = document.getElementById("entree").value;
    document.getElementById('entree').value = reponse + "í";
    document.getElementById('entree').focus();
}

function ñ(){
    let reponse = document.getElementById("entree").value;
    document.getElementById('entree').value = reponse + "ñ";
    document.getElementById('entree').focus();
}

function ó(){
    let reponse = document.getElementById("entree").value;
    document.getElementById('entree').value = reponse + "ó";
    document.getElementById('entree').focus();
}

function retour(){
    document.location.href = `2${localStorage.langue}.html`;
}

function passer(){
    passes += 1;
    document.getElementById("juste").innerHTML = "";
    document.getElementById("null").innerHTML = "";
    document.getElementById("faux").innerHTML = `La reponse était ${liste[motEtud][0]}, il vous reste plus que ${liste.length} mots à apprendre`;
    afficher();
}

function toggleTheme() {
    var entree = document.getElementById('entree');
    var name = document.getElementById('name'); 
    var chrono = document.getElementById('chrono'); 
    var boutonModeSombre  = document.getElementById('bouton-mode-sombre');
    var affichage = document.getElementById('null');
    var entree = document.getElementById('entree');
    if (name.classList.contains('dark-mode')) {
        document.body.style.background = '#FCF6F6';
        color = '#FCF6F6';
    } else {
        document.body.style.background = '#393939';
        color = '#393939';
    }
    name.classList.toggle('dark-mode')
    entree.classList.toggle('dark-mode')
    chrono.classList.toggle('dark-mode')
    boutonModeSombre.classList.toggle('dark-mode');
    affichage.classList.toggle('dark-mode');
    entree.classList.toggle('dark-mode');
}


const worker = new Worker('worker.js');
worker.onmessage = function(event) {
    document.getElementById("chronometre").innerHTML = event.data;
};
worker.postMessage('start');
