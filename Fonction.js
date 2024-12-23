// création des constantes, variables et listes
let color = '#001514ff';
document.body.style.background = color;
document.getElementById('entree').focus();
let termine = false;
let fautes = 0;
let passes = 0;
var nb_mots;
let liste;
let motVocab;
let motEtud;
let chapitre;
var langue = "";
let erreurs = "";
// permet de récuperer les éléments de la zone d'entrée
function getElement(){
    fileInput = document.getElementById('myFile');
    langue = "Anglais";
    processFile(fileInput.files[0], langue, "");
}

// permet de récuperer les fichiers txt du répository GitHub
async function loadFileFromUrl(url, langue = "Anglais") {
    if (url == 'https://raw.githubusercontent.com/C-Matthieu/MCVocabTestLists/main/anglais/Autres/Verbes_Irreguliers.txt'
    || url == 'https://raw.githubusercontent.com/C-Matthieu/MCVocabTestLists/main/anglais/Autres/Verbes_Irreguliers_A-F.txt'
    || url == 'https://raw.githubusercontent.com/C-Matthieu/MCVocabTestLists/main/anglais/Autres/Verbes_Irreguliers_G-R.txt'
    || url == 'https://raw.githubusercontent.com/C-Matthieu/MCVocabTestLists/main/anglais/Autres/Verbes_Irreguliers_ProfAnglais.txt'
    || url == 'https://raw.githubusercontent.com/C-Matthieu/MCVocabTestLists/main/anglais/Autres/Verbes_Irreguliers_S-Z.txt'
    ){
        console.log("préremplissage");
        localStorage.setItem("preRemplissage", "bv: , pr: , pp: ");
    }
    else {
        localStorage.setItem("preRemplissage", "");
    }
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
      document.location.href = "index.html";
      return null;
    }
  }
  
// permet de convertir un fichier en liste
function processFile(e, langue = "Anglais", pre="bv: , pr: , pp: ") {
    if (pre == ""){
        localStorage.setItem("preRemplissage", "");
    }
    localStorage.setItem("langue", langue);
    const file = e;
    if (true) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const contents = e.target.result;
            const lines = contents.split('\n');
            const vocabList = lines.map(line => line.split('\t'));
            //vocabList.pop();
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
let preRemplissage = localStorage.getItem("preRemplissage");
if (preRemplissage == ""){
    document.getElementById('entree').value = localStorage.getItem("preRemplissage");
}
else{
    document.getElementById('entree').placeholder = "bv:";
    document.getElementById('entree1').placeholder = "pr:";
    document.getElementById('entree2').placeholder = "pp:";
}

if (localStorage.getItem("preRemplissage") !=""){
    let entree1 = document.getElementById('entree1');
    let entree2 = document.getElementById('entree2');
    console.log(entree1);
    entree1.style.display = "block";
    entree2.style.display = "block";
    entree1.style="center";
    entree2.style="center";
}


// permet de valider avec la touche entrer
document.addEventListener('keydown', function(event) {
    if (event.key == "Enter" && termine == false) {
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
        let reponse;
        let correction;
        if (localStorage.getItem("preRemplissage") !=""){
            let e0 = "bv: " + document.getElementById("entree").value; 
            let e1 = "pr: " + document.getElementById("entree1").value;
            let e2 = "pp: " + document.getElementById("entree2").value;
            reponse = e0+ "," + e1 + "," + e2;
            console.log(reponse);
            document.getElementById('entree').value = "";
            document.getElementById('entree1').value = "";
            document.getElementById('entree2').value = "";
        }
        else{
            reponse = document.getElementById("entree").value;
            document.getElementById('entree').value = localStorage.getItem("preRemplissage");
        }
        reponse = reponse.toUpperCase().replace(/\s+/g, '');
        correction = liste[motEtud][0].toUpperCase().replace(/\s+/g, '');
    
        reponse = reponse.split("/");
        correction = correction.split("/");
        reponse.sort();
        correction.sort();
        if ((reponse.length == 1 && reponse[0]=='') || reponse == "bv: , pr: , pp: "){
            document.getElementById("faux").innerHTML = "";
            document.getElementById("juste").innerHTML = "";
            document.getElementById("null").innerHTML = "Veuillez entrez une valeur s'il vous plaît";
            }
        else if (reponse.every(value => correction.includes(value))){
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
                localStorage.setItem("Erreurs", erreurs);
                downloadErrors();
                }
            else{
                setTimeout(afficher, 1000);
                }
            }
        else {
            document.body.style.background = '#DC143C';
            document.getElementById("juste").innerHTML = "";
            document.getElementById("null").innerHTML = "";
            document.getElementById("faux").innerHTML = `Dommage, vous n'avez pas trouvé la bonne réponse, qui était <u>${liste[motEtud][0]}</u>. Il vous reste plus que ${liste.length} mots à apprendre.`;
            if (!erreurs.includes(liste[motEtud][0])){
                erreurs += `${liste[motEtud][0]}	${liste[motEtud][1]}\n`;}
            fautes += 1;
            setTimeout(afficher, 1000);
            }
        }
    else if (termine == true){
        document.location.href = `3LeTest.html`;
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
        document.location.href = `Evaluation.html`;
    }

function passer(){
    passes += 1;
    document.getElementById("juste").innerHTML = "";
    document.getElementById("null").innerHTML = "";
    document.getElementById("faux").innerHTML = `La reponse était <u>${liste[motEtud][0]}</u>, il vous reste plus que ${liste.length} mots à apprendre`;
    if (!erreurs.includes(liste[motEtud][0])){
        erreurs += `${liste[motEtud][0]}	${liste[motEtud][1]}\n`;}
    afficher();
}

/**
 * Toggles the theme between light mode and dark mode.
 */
function toggleTheme() {
    var entree = document.getElementById('entree');
    var name = document.getElementById('name'); 
    var chrono = document.getElementById('chrono'); 
    var boutonModeSombre  = document.getElementById('bouton-mode-sombre');
    var affichage = document.getElementById('null');
    var entree = document.getElementById('entree');
    if (name.classList.contains('dark-mode')) {
        document.body.style.background = '#001514ff';  // noir
        color = '#001514ff'; // violet
    
    } else {
        document.body.style.background = '#f6f7ebff';  // blanc
        color = '#f6f7ebff';  // vert
    }
    name.classList.toggle('dark-mode')
    entree.classList.toggle('dark-mode')
    chrono.classList.toggle('dark-mode')
    boutonModeSombre.classList.toggle('dark-mode');
    affichage.classList.toggle('dark-mode');
    entree.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
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