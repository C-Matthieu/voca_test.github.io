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
const fs = require('fs');

function convertFileToList(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');
    const vocabList = lines.map(line => line.split('\t'));
    return vocabList;
}

let termine = false;
let fautes = 0;

// Listes Anglaises__________________________________________________________________________________________________________________________________________________
let chap35 = [
    ["the education(al) system",	"le système éducatif"],
    ["compulsory schooling",	"la scolarité obligatoire"],
    ["a school-age child",	"un enfant d’âge scolaire"],
    ["providing education for children",	"la scolarisation des enfants"],
    ["to educate", "éduquer, instruire"],
    ["the teachers / the members of staff",	"le personnel enseignant"],
    ["to teach / teaching",	"enseigner / l’enseignement"]]
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

let chap62 = [["a wage earner", "un salarié"], ["his wage packet","sa paie"], 
["his wages", "	son salaire"],
["an hourly wage / a daily wage", "	un salaire horaire / journalier"],
["the minimum wage	", "le salaire minimum, le SMIC"],
["low wages / high wages", "	les bas salaires / les salaires élevés"],
["to earn a good wage", "	avoir un bon salaire"],
["to be paid £400 a week", "	toucher 400 livres par semaine"],
["to be well paid / to be badly paid", "	être bien / être mal payé"],
["to be promoted", "	être promu"],
["his annual income", "	son revenu annuel"],
["income tax", "	l’impôt sur le revenu"],
["to be on a high income", "	avoir des revenus élevés"],
["low-income families", "	des familles à revenus modestes"],
["take-home pay", "	le salaire net"],
["net income", "	le revenu net (après impôts)"],
["gross income", "	le revenu brut"],
["fees	", "des honoraires"],
["a source of income", "	une source de revenu"],
["a wage policy", "	une politique des salaires"],
["a wage claim", "	une revendication salariale"],
["a wage rise", "	une augmentation de salaire"],
["wages increased by", "	les salaires ont augmenté de…"],
["they increased wages by", "	ils ont augmenté les salaires de…"],
["a wage freeze", "	un blocage des salaires"],
["to freeze wages", "	geler les salaires"],
["pay negotiations", "	des négociations salariales"],
["a wage agreement", "	un accord salarial"],
["to resolve a pay dispute", "	résoudre un conflit salarial"],
["a social conflict", "	un conflit social"],
["a trade union", "	un syndicat"],
["a union member", "	un syndiqué"],
["to join a union", "	se syndiquer"],
["a union / staff representative", "	un délégué syndical / du personnel"],
["a work stoppage / a strike", "	un arrêt de travail / une grève"],
["a protest movement", "	un mouvement de protestation"],
["to be / to go on strike", "	être / se mettre en grève"],
["a demonstration / a demo", "	une manifestation / une manif"],
["to demonstrate / a demonstrator", "	manifester / un manifestant"],
             ["what matters most is", "ce qui importe le plus"],
             ["although", "bien que"],
             ["to hold sway","exercer une influence"]];
let chap63 = [
    ["the welfare state / the nanny state", "	l’État providence / l’État nounou"],
["a safety net", "	un filet de protection (sociale)"],
["National Insurance", "	la Sécurité sociale (RU)"],
["the National Health Service ", "	la Sécurité sociale (au RU : branche assurance maladie)"],
["the 'Sécurité Sociale'", "	la Sécurité sociale (France)"],
["Social Security", "	la Sécurité sociale (US)"],
["social security benefit", "	les prestations sociales"],
["somebody on social security", "	qn qui bénéficie de l’aide sociale"],
["minimum social benefits", "	les minima sociaux (en France)"],
["income support", "	le RSA (en France)"],
["Universal Credit", "	l’aide aux personnes à revenu modeste (RU)"],
["employee benefits", "	les avantages sociaux"],
["the minimum old-age pension", "	le minimum vieillesse"],
["the entitlement to benefit", "	le droit à l’aide sociale"],
["a claimant / a recipient", "	un ayant droit / un bénéficiaire"],
["the social services", "	les services d’aide sociale"],
["social work", "	l’assistance sociale"],
["a social worker", "	un(e) assistant(e) social(e)"],
["health care", "	la santé publique"],
["the public health system", "	le système de santé publique"],
["universal health coverage", "	la CMU"],
["universal basic income", "	le revenu universel"],
["to be entitled to a health insurance", "	avoir droit à une couverture maladie"],
["to get free medical care", "	être soigné gratuitement"],
["sickness benefit", "	les prestations maladie"],
["to take out a private health insurance", "	prendre une mutuelle"],
["to take out an insurance", "	s’assurer, prendre une assurance"],
["an old age insurance", "	une assurance vieillesse"],
["an unemployment insurance", "	une assurance chômage"],
["compensation for injuries at work", "	une indemnité d’accident du travail"],
["child benefit", "	les allocations familiales"],
["means-tested benefits", "	des prestations modulées en fonction des revenus"],
["a single parent's allowance", "	une allocation de parent isolé"],
["housing benefit", "	l’allocation logement, les APL"],
["Jobseeker's Allowance", "	l’allocation d’aide au retour à l’emploi (l’ARE)"],
["to be on furlough", "	être en chômage partiel"],
["from the cradle to the grave", "du berceau au tombeau"],
    ["to pick up the pieces", "se ressaisir"],
["to fork out", "cracher"]];
let chap64 = [
    ["to retire", "	partir en retraite"],
["to be retired", " être en retraite"],
["a retired teacher", "	un professeur en retraite"],
["a pensioner", "	un retraité"],
["(to approach) retirement age", "	(approcher de) l’âge de la retraite"],
["to be of pensionable age", "	avoir l’âge de la retraite"],
["to be pensioned off", "	être mis à la retraite"],
["early retirement", "	la préretraite, la retraite anticipée"],
["to take early retirement", "	partir en préretraite"],
["to be semi-retired", "	être en semi-retraite"],
["a (retirement) pension", "	une pension, une retraite"],
["to get one's pension", "	toucher sa retraite"],
["to pay money into a pension", "	cotiser pour sa retraite"],
["to take out a pension", "	souscrire un plan de retraite"],
["to take out an extra pension", "	prendre une retraite complémentaire"],
["to qualify for a full pension", "	bénéficier d’une retraite à taux plein"],
["a pension system", "	un système de retraite"],
["a state pension", "	une retraite versée par l’État"],
["the pay-as-you-go pension system", "	la retraite par répartition"],
["pension funds", "	la retraite par capitalisation, les fonds de pension"],
["the cost of retirement", "	le coût de la retraite"],
["the population is ageing", "	la population vieillit"],
["the ratio of active workers to retirees", "	le ratio cotisants-retraités"],
["to redress the imbalance", "	rétablir l’équilibre"],
["to take unpopular measures", "	prendre des mesures impopulaires"],
["to postpone retirement age", "	reculer l’âge de la retraite"],
["to increase contributions", "	augmenter les cotisations"],
["to reduce pensions", "	diminuer les pensions"],
["to work up to 65", "	travailler jusqu’à 65 ans"],
["to save for one's retirement", "	se constituer une épargne-retraite"],
["a generational contract", "	un contrat intergénérationnel"],
["generational solidarity", "	la solidarité entre générations"],
["to fund the retirement of their elders", "	financer la retraite de leurs aînés"],
["to ignite an age war", "	déclencher une guerre des générations"],
["to be a burden on", "	être un fardeau pour"],
["to cost the nation a fortune", "	coûter une fortune à la nation"],
["to collapse", "s'éffondrer"]];
// trigo
let vr = [["1","cos 0"],["sqrt3/2","cos pi/6"],["sqrt2/2","cos pi/4"],["1/2","cos pi/3"],["0","cos pi/2"],["0","sin 0"],["1/2","sin pi/6"],
          ["sqrt2/2","sin pi/4"],["sqrt3/2","sin pi/3"],["1","sin pi/2"],["0","tan 0"],["1/sqrt3","tan pi/6"],["1","tan pi/4"],
          ["sqrt3","tan pi/3"],["non définie","tan pi/2"],["-1/2","cos 2pi/3"],["-sqrt2/2","cos 3pi/4"],["-sqrt3/2","cos 5pi/6"],
          ["-1","cos pi"],["sqrt3/2","sin 2pi/3"],["sqrt2/2","sin 3pi/4"],["1/2","sin 5pi/6"],["1","sin pi"],["-sqrt3","tan 2pi/3"],
          ["-1","tan 3pi/4"],["-1/sqrt3","tan 5pi/6"],["0","tan pi"]];
// affiche le mot + la langue
const nb_mots = eval(liste).length
let motVocab;
// Si 'liste' est un nom de fichier, lire le contenu du fichier
if (liste.endsWith('.txt')) {
    liste = convertFileToList(liste);
    motVocab = String(eval(liste)[aleatoire()][1]);
}
else {
    motVocab = String(eval(liste)[aleatoire()][1]);}
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
        // IncrementationChrono();
        let reponse = document.getElementById("entree").value;
        document.getElementById('entree').value = "";
        if (reponse.length == 0){
            document.getElementById("faux").innerHTML = "";
            document.getElementById("juste").innerHTML = "";
            document.getElementById("null").innerHTML = "Veuillez entrez une valeur s'il vous plaît";
            }
        else if (reponse.toUpperCase().replace(/\s+/g, '') == eval(liste)[motEtud][0].toUpperCase().replace(/\s+/g, '')){
            console.log("je suis dedans");
            document.body.style.background = '#1DC16A';
            document.getElementById("faux").innerHTML = "";
            document.getElementById("null").innerHTML = "";
            document.getElementById("juste").innerHTML = `Bravo vous avez trouvé la bonne reponse, il vous reste plus que ${eval(liste).length - 1} mots à apprendre`;
            eval(liste).splice(motEtud, 1);
            
            if (eval(liste).length == 0){
                termine = true;
                // IncrementationChrono();
                worker.postMessage('stop');
                document.getElementById("valider").innerHTML = 'Recommencer';
                document.body.style.background = 'grey';
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

const worker = new Worker('worker.js');

worker.onmessage = function(event) {
    document.getElementById("chronometre").innerHTML = event.data;
};

worker.postMessage('start');

function retour(){
    document.location.href = `2${langue.replace(`${langue[0]}`,`${langue[0].toUpperCase()}`)}.html`;
}
