// création des constantes, variables et listes
document.body.style.background = 'grey';
document.getElementById('entree').focus();
let motEtud;
const a = location.search;  // récupére les élements dans le lien
let virgule = false;
let langue = "";
let liste = "";
for (let i = 1; i<a.length; i++){
    if (a[i] != ',' && virgule == false){
        langue += a[i];
    }
    else if (virgule == true){
        liste += a[i];
    }
    else {
        virgule = true;
    }

}
let termine = false;
let fautes = 0;

// Listes Anglaises__________________________________________________________________________________________________________________________________________________
//Gun in America
let chap59_60_61 = [["to be at work", "être au travail"]];

// trigo
let vr = [["1","cos 0"],["sqrt3/2","cos pi/6"],["sqrt2/2","cos pi/4"],["1/2","cos pi/3"],["0","cos pi/2"],["0","sin 0"],["1/2","sin pi/6"],
          ["sqrt2/2","sin pi/4"],["sqrt3/2","sin pi/3"],["1","sin pi/2"],["0","tan 0"],["1/sqrt3","tan pi/6"],["1","tan pi/4"],
          ["sqrt3","tan pi/3"],["non définie","tan pi/2"],["-1/2","cos 2pi/3"],["-sqrt2/2","cos 3pi/4"],["-sqrt3/2","cos 5pi/6"],
          ["-1","cos pi"],["sqrt3/2","sin 2pi/3"],["sqrt2/2","sin 3pi/4"],["1/2","sin 5pi/6"],["1","sin pi"],["-sqrt3","tan 2pi/3"],
          ["-1","tan 3pi/4"],["-1/sqrt3","tan 5pi/6"],["0","tan pi"]]
// affiche le mot + la langue
let motVocab = String(eval(liste)[aleatoire()][1]);
document.getElementById('mot').innerHTML = motVocab;
document.getElementById('langueEtud').innerHTML = langue;

// permet de valider avec la touche entrer
document.addEventListener('keydown', function(event) {
    if (event.code == "Enter" && termine == false) {
        getValue();
  }
});




// permet de prendre un élement aléatoirement dans la liste
function aleatoire()
{
    if (eval(liste).length > 0){
        let index = Math.floor(Math.random() * eval(liste).length);
        console.log(index)
        if (index == motEtud && eval(liste).length > 1){
            aleatoire()
            }
        else {
            motEtud = index;
            return motEtud;
            }
    }
    else if (eval(liste).length == 0) {
        motEtud = 0;
        return motEtud;
    }
    
}
// permet de recuperer la valeur et d'agir en conséquence
function getValue()
{
    if (termine == false){
        IncrementationChrono();
        let reponse = document.getElementById("entree").value;
        document.getElementById('entree').value = "";
        if (reponse.length == 0){
            document.getElementById("faux").innerHTML = "";
            document.getElementById("juste").innerHTML = "";
            document.getElementById("null").innerHTML = "Veuillez entrez une valeur s'il vous plaît";
            }
        else if (reponse.toUpperCase() == eval(liste)[motEtud][0].toUpperCase()){
            document.body.style.background = 'green';
            document.getElementById("faux").innerHTML = "";
            document.getElementById("null").innerHTML = "";
            document.getElementById("juste").innerHTML = `Bravo vous avez trouvé la bonne reponse, il vous reste plus que ${eval(liste).length - 1} mots à apprendre`;
            eval(liste).splice(motEtud, 1);
            
            if (eval(liste).length == 0){
                termine = true;
                IncrementationChrono();
                document.getElementById("bouton").innerHTML = "Recommencer";
                document.body.style.background = 'grey';
                document.getElementById("faux").innerHTML = "";
                document.getElementById("null").innerHTML = "";
                document.getElementById("mot").innerHTML = "Fin";
                document.getElementById("juste").innerHTML = `Bravo vous avez finis la liste de vocabulaire avec un total de ${fautes} erreurs en ${fin}`;
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
    document.body.style.background = 'grey';

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


const debut = new Date();
const depart = debut.getHours() * 3600 + debut.getMinutes() * 60 + debut.getSeconds();
let fin;

function IncrementationChrono() {
    if (fin == undefined){
        const intermediaire = new Date();
        const tempsIntermediaire = intermediaire.getHours() * 3600 + intermediaire.getMinutes() * 60 + intermediaire.getSeconds();
        let secondesEtude = tempsIntermediaire - depart;
        let minutes = 0;
        while (secondesEtude >= 60) {
            minutes += 1;
            secondesEtude -= 60;
        }
        if (secondesEtude < 10){
            secondesEtude = `0${secondesEtude}`;
        }
        if (termine == true){
            fin = `${minutes}:${secondesEtude}`;
        }
        document.getElementById("chronometre").innerHTML = `${minutes}:${secondesEtude}`;
    }
}
function retour(){
    document.location.href = `2${langue.replace(`${langue[0]}`,`${langue[0].toUpperCase()}`)}.html`;
}
