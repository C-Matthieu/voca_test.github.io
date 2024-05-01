// création des constantes, variables et listes
let color = 'grey';
document.body.style.background = color;
let termine = false;
var nb_mots;
let liste;
let motVocab;
let motEtud;
let affiché = 1;

// permet de récuperer les fichiers txt du répository GitHub
async function FloadFileFromUrl(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Échec du chargement du fichier : ${response.statusText}`);
      }
      const contents = await response.text();
      const file = new File([contents], "fichier-telecharge.txt", { type: "text/plain" });
      return FprocessFile(file);
    } catch (error) {
        console.error("Erreur lors du chargement du fichier depuis l'URL:", error);
        document.location.href = "index.html";
      return null;
    }
  }
  
// permet de convertir un fichier en liste
function FprocessFile(e) {
    const file = e;
    if (true) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const contents = e.target.result;
            const lines = contents.split('\n');
            const vocabList = lines.map(line => line.split('\t'));
            //vocabList.pop();
            localStorage.setItem("liste", JSON.stringify(vocabList));
            window.location.href = "3Flash.html";
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
motVocab = String(liste[Faleatoire()][1]);
document.getElementById('mot').innerHTML = motVocab;


// permet de valider avec la touche entrer
document.addEventListener('keydown', function(event) {
    if (event.code == "Enter" && termine == false) {
        Fsuivant();
  }
});

// permet de prendre un élement aléatoirement dans la liste
function Faleatoire() {
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

 // gère l'affichage des mots
function Fafficher()
{
    Faleatoire()
    motVocab = String(liste[motEtud][1]);
    document.getElementById('mot').innerHTML = motVocab;
    document.body.style.background = color;
}

function Fretourner(){
    if (affiché == 1){
        motVocab = String(liste[motEtud][0]);
        affiché = 0;
    }
    else{
        motVocab = String(liste[motEtud][1]);
        affiché = 1;
    }
    document.getElementById('mot').innerHTML = motVocab;
    document.body.style.background = color;
}

function Fsuivant(){
    if (termine == false){
        liste.splice(motEtud, 1);
        if (liste.length == 0) {
            document.getElementById('mot').innerHTML = "Fin";
            termine = true;
            document.getElementById('valider').innerHTML = "Recommencer";
        }
        else {
        Fafficher();
    }
}
    else {
        liste = localStorage.getItem("liste");;
        liste = eval(liste);
        nb_mots = liste.length;
        motVocab = String(liste[Faleatoire()][1]);
        document.getElementById('mot').innerHTML = motVocab;
        document.getElementById('valider').innerHTML = "Suivant";
    }
}

function Fretour(){
        document.location.href = `index.html`;
    }


function FtoggleTheme() {
    var name = document.getElementById('name'); 
    var chrono = document.getElementById('chrono'); 
    var boutonModeSombre  = document.getElementById('bouton-mode-sombre');
    if (name.classList.contains('dark-mode')) {
        document.body.style.background = '#FCF6F6';
        color = '#FCF6F6';
    } else {
        document.body.style.background = '#393939';
        color = '#393939';
    }
    name.classList.toggle('dark-mode')
    chrono.classList.toggle('dark-mode')
    boutonModeSombre.classList.toggle('dark-mode');
    affichage.classList.toggle('dark-mode');
}

const worker = new Worker('worker.js');
worker.onmessage = function(event) {
    document.getElementById("chronometre").innerHTML = event.data;
};
worker.postMessage('start');
