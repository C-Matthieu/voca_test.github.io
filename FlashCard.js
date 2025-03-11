// création des constantes, variables et listes
let color = '#001514ff';
document.body.style.background = color;
let termine = false;
var nb_mots;
let liste;
let motVocab;
let motEtud;
let affiche = 1;
let erreurs = "";
localStorage.setItem("Erreurs", erreurs);
function FgetElement(){
    fileInput = document.getElementById('myFile');
    langue = "Anglais";
    FprocessFile(fileInput.files[0]);
}
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
document.getElementById('compteur').innerHTML = `Mots restants : ${liste.length}`;


// permet de valider avec la touche entrer
document.addEventListener('keydown', function(event) {
    if (event.code == "Enter" && termine == false) {
        event.preventDefault();
        Fsuivant();
  }
    if (event.code == "ArrowRight" || event.code == "ArrowLeft") {
        Fretourner();
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
    console.log("affiche")
    document.getElementById('compteur').innerHTML = `Mots restants : ${liste.length}`;
    motVocab = String(liste[motEtud][1]);
    affiche = 1;
    document.getElementById('mot').innerHTML = motVocab;
    document.body.style.background = color;
}

function Fretourner(){
    console.log("retourne")
    if (affiche == 1){
        motVocab = String(liste[motEtud][0]);
        affiche = 0;
    }
    else{
        motVocab = String(liste[motEtud][1]);
        affiche = 1;
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
            document.getElementById('compteur').innerHTML = `Mot restant : 0`;
            downloadErrors();
            Frecommencer();
            erreurs = "";

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
        termine = false;
        document.getElementById('compteur').innerHTML = `Mots restants : ${liste.length}`;
    }
}

function Fretour(){
        document.location.href = `FlashCard.html`;
    }


function FtoggleTheme() {
    var name = document.getElementById('name'); 
    var chrono = document.getElementById('chrono'); 
    var boutonModeSombre  = document.getElementById('bouton-mode-sombre');
    var mot = document.getElementById('mot');
    var passer = document.getElementById('passer');
    if (name.classList.contains('dark-mode')) {
        document.body.style.background = '#001514ff';
        color = '#001514ff';
    } else {
        document.body.style.background = '#f6f7ebff';
        color = '#f6f7ebff';
    }
    name.classList.toggle('dark-mode')
    chrono.classList.toggle('dark-mode')
    boutonModeSombre.classList.toggle('dark-mode');
    mot.classList.toggle('dark-mode');
    passer.classList.toggle('dark-mode');
}

function Fenregistrer() {
    erreurs += `${liste[motEtud][0]}	${liste[motEtud][1]}\n`;
    localStorage.setItem("Erreurs", erreurs);
    Fsuivant();
}
    

function downloadErrors() {
    // Récupérer les erreurs du localStorage
    let errors = localStorage.getItem('Erreurs');
    if(errors){
        errors = errors.slice(0, -1);
    }
    // Demander à l'utilisateur s'il souhaite télécharger le fichier
    if (confirm('Voulez-vous télécharger le fichier contenant vos erreurs et les mots passés (au format comprehensible par le site pour vous entrainer sur cette liste)?')) {
        // Créer un Blob à partir des erreurs
        const blob = new Blob([errors], {type: 'text/plain'});

        // Créer une URL pour le Blob
        const url = URL.createObjectURL(blob);

        // Créer un lien de téléchargement
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Fichier_Erreurs.txt';

        // Ajouter le lien au document et déclencher un clic dessus
        document.body.appendChild(link);
        link.click();

        // Supprimer le lien du document
        document.body.removeChild(link);
    }
}

function Frecommencer() {
    if (confirm("Voulez-vous recommencer seulement avec vos erreurs ?")) {
        let errors = localStorage.getItem('Erreurs');
        let erreurs = [];

        // Transformer les erreurs en liste de paires
        if (errors) {
            const lines = errors.split('\n');
            erreurs = lines.map(line => line.split('\t')).filter(pair => pair.length === 2);
        }
        localStorage.setItem("Erreurs", "");
        localStorage.setItem("liste", JSON.stringify(erreurs));
        Fsuivant();
    }
}

// Fonction pour ouvrir et fermer la modal des règles
function openRulesModal() {
    document.getElementById('rules-modal').style.display = 'flex';
}

function closeRulesModal() {
    document.getElementById('rules-modal').style.display = 'none';
}


const worker = new Worker('worker.js');
worker.onmessage = function(event) {
    document.getElementById("chronometre").innerHTML = event.data;
};
worker.postMessage('start');
