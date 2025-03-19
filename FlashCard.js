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
let temps_conjugaison = "";
localStorage.setItem("Erreurs", erreurs);
function FgetElement(){
    fileInput = document.getElementById('myFile');
    langue = "Anglais";
    FprocessFile(fileInput.files[0]);
}
// permet de récuperer les fichiers txt du répository GitHub
async function FloadFileFromUrl(url) {
    if(url.includes('https://raw.githubusercontent.com/C-Matthieu/MCVocabTestLists/main/espagnol/Conjugaison')){
        temps_conjugaison = url.split('/').pop().split('.')[0];
        localStorage.setItem("temps_conjugaison", temps_conjugaison);
    }
    else{
        temps_conjugaison = "";
        localStorage.setItem("temps_conjugaison", temps_conjugaison);
    }
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
    openTab(event, 'Rules'); // Ouvrir l'onglet Règles par défaut
}

function closeRulesModal() {
    document.getElementById('rules-modal').style.display = 'none';
}

// Fonction pour obtenir l'explication de la conjugaison
function getConjugationExplanation() {
    // Récupérer le temps de conjugaison depuis localStorage
    var selectedTime = localStorage.getItem("temps_conjugaison").replace(/_/g, ' ');

    // Définir les explications et constructions pour chaque temps
    var explanations = {
        "Present": {
            "explication": "Le présent est utilisé pour parler d'actions ou d'états actuels ou habituels.",
            "construction": "Yo: habl<strong>o</strong><br>Tú: habl<strong>as</strong><br>Él/Ella: habl<strong>a</strong><br>Nosotros: habl<strong>amos</strong><br>Vosotros: habl<strong>áis</strong><br>Ellos/Ellas: habl<strong>an</strong>"
        },
        "Conditionnel present": {
            "explication": "Le conditionnel présent est utilisé pour exprimer des actions ou des états hypothétiques ou souhaités.",
            "construction": "Yo: hablar<strong>ía</strong><br>Tú: hablar<strong>ías</strong><br>Él/Ella: hablar<strong>ía</strong><br>Nosotros: hablar<strong>íamos</strong><br>Vosotros: hablar<strong>íais</strong><br>Ellos/Ellas: hablar<strong>ían</strong>"
        },
        "Futur": {
            "explication": "Le futur est utilisé pour parler d'actions qui se produiront dans le futur.",
            "construction": "Yo: hablar<strong>é</strong><br>Tú: hablar<strong>ás</strong><br>Él/Ella: hablar<strong>á</strong><br>Nosotros: hablar<strong>emos</strong><br>Vosotros: hablar<strong>éis</strong><br>Ellos/Ellas: hablar<strong>án</strong>"
        },
        "Imparfait": {
            "explication": "L'imparfait est utilisé pour parler d'actions ou d'états dans le passé qui étaient en cours ou répétés.",
            "construction": "Yo: habl<strong>aba</strong><br>Tú: habl<strong>abas</strong><br>Él/Ella: habl<strong>aba</strong><br>Nosotros: habl<strong>ábamos</strong><br>Vosotros: habl<strong>abais</strong><br>Ellos/Ellas: habl<strong>aban</strong>"
        },
        "Prétérit": {
            "explication": "Le prétérit est utilisé pour parler d'actions complétées dans le passé.",
            "construction": "Yo: habl<strong>é</strong><br>Tú: habl<strong>aste</strong><br>Él/Ella: habl<strong>ó</strong><br>Nosotros: habl<strong>amos</strong><br>Vosotros: habl<strong>asteis</strong><br>Ellos/Ellas: habl<strong>aron</strong>"
        },
        "Subjonctif passe": {
            "explication": "Le subjonctif passé est utilisé pour exprimer des actions passées hypothétiques ou souhaitées.",
            "construction": "Yo: hubiera habl<strong>ado</strong><br>Tú: hubieras habl<strong>ado</strong><br>Él/Ella: hubiera habl<strong>ado</strong><br>Nosotros: hubiéramos habl<strong>ado</strong><br>Vosotros: hubierais habl<strong>ado</strong><br>Ellos/Ellas: hubieran habl<strong>ado</strong>"
        },
      "Subjonctif present": {    
        "explication": "Le subjonctif présent est utilisé pour exprimer des actions ou des états hypothétiques ou souhaités.",
        "construction": "Yo: habl<strong>e</strong><br>Tú: habl<strong>es</strong><br>Él/Ella: habl<strong>e</strong><br>Nosotros: habl<strong>emos</strong><br>Vosotros: habl<strong>éis</strong><br>Ellos/Ellas: habl<strong>en</strong>"
}

    };

    // Retourner l'explication et la construction pour le temps sélectionné
    if (explanations[selectedTime]) {
        return `<h3>${selectedTime}</h3>
                <p>${explanations[selectedTime].explication}</p>
                <p><strong>Construction:</strong><br><br>${explanations[selectedTime].construction}</p>`;
    } else {
        return "Explication de la conjugaison non disponible pour ce temps.";
    }
}

// Exemple d'utilisation dans le modal
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // Si l'onglet Conjugaison est ouvert, mettre à jour le contenu
    if (tabName == 'Conjugation') {
        var explanation = getConjugationExplanation();
        document.getElementById("conjugationText").innerHTML = explanation;
    }
}



const worker = new Worker('worker.js');
worker.onmessage = function(event) {
    document.getElementById("chronometre").innerHTML = event.data;
};
worker.postMessage('start');
