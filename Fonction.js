// création des constantes, variables et listes
let color = 'grey';
document.body.style.background = color;
document.getElementById('entree').focus();
let termine = false;
let fautes = 0;
var nb_mots;
var liste;
let motVocab;
let motEtud;
let langue = "";
// permet de récuperer les éléments de la zone d'entrée
function getElement(){
    localStorage.clear();
    fileInput = document.getElementById('myFile');
    langue = document.getElementById('langue').value;
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
      // ... actions de gestion des erreurs
      return null; // ou une valeur indiquant l'échec
    }
  }
  
// permet de convertir un fichier en liste
function processFile(e, langue = "Anglais") {
    console.log(e);
    localStorage.clear();
    localStorage.setItem("langue", langue);
    const file = e;
    if (true) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const contents = e.target.result;
            const lines = contents.split('\n');
            const vocabList = lines.map(line => line.split('\t'));
            console.log(vocabList);
            vocabList.pop();
            console.log(vocabList);
            localStorage.setItem("liste", JSON.stringify(vocabList));
            nb_mots = vocabList.length;
            window.location.href = "3LeTest.html?" + encodeURIComponent(langue);
        };
        reader.readAsText(file);
    } else {
        alert('No file selected');
    }
}

// permet de gérér le premier affichage
liste = localStorage.getItem("liste");
motVocab = String(eval(liste)[aleatoire()][1]);
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
    if (eval(liste).length > 0) {
        let index;
        do {
            index = Math.floor(Math.random() * eval(liste).length);
        } while (index == motEtud && eval(liste).length > 1);
        motEtud = index;
        return motEtud;
    } else if (eval(liste).length == 0) {
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
        else if (reponse.toUpperCase().replace(/\s+/g, '') == eval(liste)[motEtud][0].toUpperCase().replace(/\s+/g, '')){
            document.body.style.background = '#1DC16A';
            document.getElementById("faux").innerHTML = "";
            document.getElementById("null").innerHTML = "";
            document.getElementById("juste").innerHTML = `Bravo vous avez trouvé la bonne reponse, il vous reste plus que ${eval(liste).length - 1} mots à apprendre`;
            eval(liste).splice(motEtud, 1);
            
            if (eval(liste).length == 0){
                termine = true;
                worker.postMessage('stop');
                document.getElementById("valider").innerHTML = 'Recommencer';
                document.body.style.background = color;
                document.getElementById("faux").innerHTML = "";
                document.getElementById("null").innerHTML = "";
                document.getElementById("mot").innerHTML = "Fin";
                document.getElementById("juste").innerHTML = `Bravo vous avez finis la liste de vocabulaire avec un total de ${fautes} erreurs sur une liste de ${nb_mots} mots`;
                }
            else{
                setTimeout(afficher, 1000);
                }
            }
        else {
            document.body.style.background = '#DC143C';
            document.getElementById("juste").innerHTML = "";
            document.getElementById("null").innerHTML = "";
            document.getElementById("faux").innerHTML = `Dommage vous n'avez pas trouvé la bonne reponse, qui était ${eval(liste)[motEtud][0]}, il vous reste plus que ${eval(liste).length} mots à apprendre`;
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
    let motVocab = String(eval(liste)[motEtud][1]);
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

function toggleTheme() {
    var entree = document.getElementById('entree');
    var name = document.getElementById('name'); 
    var chrono = document.getElementById('chrono'); 
    var boutonModeSombre  = document.getElementById('bouton-mode-sombre');
    var affichage = document.getElementById('null');
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
}


const worker = new Worker('worker.js');
worker.onmessage = function(event) {
    document.getElementById("chronometre").innerHTML = event.data;
};
worker.postMessage('start');