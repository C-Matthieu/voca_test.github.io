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
let chap59 = [["to be at work", "être au travail"], ["the workplace", "le lieu de travail"], ["labour legislation","le Code du travail"],
["full employment","le plein-emploi"], ["the workforce","la main-d'oeuvre"], ["to work in shifts","faire les trois huit"], 
["a blue-collar worker","un travailleur manuel"], ["an unskilled worker","un ouvrier non qualifié"],
["a white-collar worker","un employé de bureau"], ["a temp","un intérimaire"], ["to be self-employed","travailler à son compte"],
["working conditions","les conditions de travail"], ["a working day","une journée de travail"], 
["the 35-hour working week","la semaine de 35 heures"], ["the reduction in the working week","la réduction du temps de travail"],
["to work overtime","faire des heures supplémentaires"], ["the absenteeism","l'absentéisme"], ["stress-related work","le stress (lié) au travai"],
["to take a career break","prendre une année sabbatique"], ["to work part time","travail à mi-temps"], ["a part-time worker","un travailleur à mi-temps"],
["the staff turnover","le renouvellement du personnel"], ["job security","la sécurité de l'emploi"], ["job insecurity","la précarité de l'emploi"],
["a stable job","un emploi stable"], ["job prospects","des perspectives d'emploi"], ["a career track","un plan de carrière"],
["job satisfaction","la satisfaction au travail"], ["a fixed-term contract","un CDD"], ["an open-ended contract","un CDI"],
["on-the-job training","la formation sur le tas"], ["a civil servant","un fonctionnaire"], ["a senior civil servant","un haut fonctionnaire"],
["the civil service","la fonction publique"], ["the public sector","le secteur publique"], ["a low-paid job","un emploi peu rémunéré"],
["a highly-paid job","un emploi bien rémunéré"], ["a responsible job","un poste à responsabilités"], ["lifetime employment","l'emploi à vie"], 
["in a technologically oriented society","où la technologie prime"], ["at least","au moins"], ["be willing to","être disposé"], ["industrialists","industriels"],
["a probationary periode","une période d'essai"], ["to hire","embaucher"], ["to fire","débaucher"], ["overwork","surmenage"], 
["workaholics","les bourreaux de travail"]]
let chap60 = [["a growing trend","une tendance croissante"], ["teleworking","le télé travail"], ["remote working","le travail à distance"],
["to telework","télétravailler"], ["a teleworker","un télétravailleur"], ["a remote worker","un travailleur à distance"], 
["to work from home","travailler depuis chez soi"], ["from a coworking place","depuis un espace de travail partagé"], 
["a digital nomad","un nomade numérique"], ["to use digital tools","utiliser les outils numériques"], 
["new ways of working","les nouveaux modes de travail"], ["agile working","le travail intelligent"], 
["well-being at work","le bien-être au travail"], ["an open plan office","un open space"], ["to jobshare","partager un poste avec quelqu'un d'autre"], 
["desk sharing","le partage de buraux"], ["not to be assigned a permanent desk","ne pas avoir de bureau attitré"], 
["to work in a collective environment","travailler dans un environnement collectif"], ["not to work in a specific place","ne pas travailler dans un endroit spécifique"], 
["to be fully remote","travailler toujours à distance"], ["to hold a meeting by videoconference","faire une réunion en visioconférence"], 
["to replace face-to-face contact","remplacer le contact direct"], ["enterprise culture","la culture d'entreprise"], ["enterprise","l'esprit d'entreprise"], 
["entrepreneurial innovation","l'innovation entrepreneurial"], ["to be enterprising","être entreprenant"], 
["to do collaborative work","pratiquer le travail collaboratif"], ["to resort to crowdsourcing","avoir recours à la production participative"],
["gig work","les petits boulots"], ["a gig worker","un travailleur de la 'gig economy'"], ["to be paid piece-rate","être payé à la tâche"], 
["to use apps","utiliser des applis"], ["to work on a zero-hour contract","travailler avec un contrat zéro heure"], ["to work freelance","travailler en free-lance"], 
["to have autonomy over one's working pattern","gérer son activité en toute autonomie"], ["no longer applies","ne s'applique plus"], 
["the flipside","l'inconvénient"]];

let chap61 = [["a company","une entreprise"], ["a multinational","une (société) multinationale"], ["a state owned company","une entreprise publique"], 
["to privatize","privatiser"], ["a medium-sized business","une PME"], ["a small business","une petite entreprise"],
["to run a company","diriger une company"], ["the chief executive officer","le président directeur général"], 
["to be on the payroll","être salarié d'une entreprise"], ["the staff","le personnel"], ["management and unions","la direction et les syndicats"], 
["a senior executive","un cadre supérieur"], ["a junior executive","un cadre moyen"], ["an employer","un patron"], ["a company director","un chef d'entreprise"], 
["free enterprise","la libre entreprise"], ["to set up a company","créer une entreprise"], ["crowdfunding","le financement participatif"], 
["the business world","le monde des affaires"], ["to make an acquisition","faire une acquisition"], ["a merger","une fusion"], 
["to buy out a firm","racheter une entreprise"], ["to gobble up a firm","absorber une entreprise"], ["a takeover bid","une offre publique d'achat"], 
["a profitable company","une entreprise rentable"], ["to make a profit","faire des bénéfices"], ["to make a loss","subir une perte"], 
["profit sharing","l'intéressement au résultat"], ["competitiveness","la comptétitivité"], ["bankruptcy","la faillite"], 
["to go bankrupt","faire faillite"], ["to be in the red","être en déficit"], ["to bail out a company","renflouer une entreprise"], 
["to rescue a company","sauver une entreprise"], ["the restructuring of a company","la restructuration d'une entreprise"], 
["to downsize","dégraisser ses effections"], ["red tap","la paperasserie"], ["receivership","redressement judiciaire"], 
["mania","la folie"], ["to shut up","mettre la clé sous  la porte"]];
// trigo
let vr = [["1","cos 0"],["sqrt3/2","cos pi/6"],["sqrt2/2","cos pi/4"],["1/2","cos pi/3"],["0","cos pi/2"],["0","sin 0"],["1/2","sin pi/6"],
          ["sqrt2/2","sin pi/4"],["sqrt3/2","sin pi/3"],["1","sin pi/2"],["0","tan 0"],["1/sqrt3","tan pi/6"],["1","tan pi/4"],
          ["sqrt3","tan pi/3"],["non définie","tan pi/2"],["-1/2","cos 2pi/3"],["-sqrt2/2","cos 3pi/4"],["-sqrt3/2","cos 5pi/6"],
          ["-1","cos pi"],["sqrt3/2","sin 2pi/3"],["sqrt2/2","sin 3pi/4"],["1/2","sin 5pi/6"],["1","sin pi"],["-sqrt3","tan 2pi/3"],
          ["-1","tan 3pi/4"],["-1/sqrt3","tan 5pi/6"],["0","tan pi"]];
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
        else if (reponse.toUpperCase().replace(/\s+/g, '') == eval(liste)[motEtud][0].toUpperCase().replace(/\s+/g, '')){
            console.log("je suis dedans");
            document.body.style.background = 'green';
            document.getElementById("faux").innerHTML = "";
            document.getElementById("null").innerHTML = "";
            document.getElementById("juste").innerHTML = `Bravo vous avez trouvé la bonne reponse, il vous reste plus que ${eval(liste).length - 1} mots à apprendre`;
            eval(liste).splice(motEtud, 1);
            
            if (eval(liste).length == 0){
                termine = true;
                IncrementationChrono();
                document.getElementById("valider").innerHTML = 'Recommencer';
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
