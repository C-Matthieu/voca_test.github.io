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
let ciudadano = [["ciudadanía", "citoyenneté"] , ["los derechos", "les droits"],
["un ciudadano", "un citoyen"], ["ejercer", "exercer"], ["comprometerse", "s'engager"],
["las redes sociales", "les réseaux sociaux"], ["favorecer", "favoriser"],
["peligrar", "mettre en danger"], ["los bulos/las falsas noticias", "les fausses informations"],
["la educación a los medios de communicación", "l'éducation au média"], ["los pagos virtuales", "les paiements virtuels"],
["los datos personales", "les données personnelles"], ["la inteligencia artificial", "l'intelligence artificielle"],
["el ciberacoso", "le cyber-harcèlement"], ["la usurpación de identidad", "l'usurpation d'identité (u)"],
["el robo de identidad", "l'usurpation d'identité (r)"], ["los foros", "les forums"], ["un denunciante", "un lanceur d'alerte"],
["soler", "avoir l'habitude"], ["el móvil", "le téléphone portable"],["hacer llamadas", "passer des appels"], 
["cualquier", "n'importe"], ["estar acostumbrado a", "être habitué à"], ["ligar", "draguer"], ["intercambiar", "échanger"],
["buscar informaciones", "chercher des informations"], ["riesgos/peligros", "danger"],  ["bajar", "télécharger"], 
    ["subir", "mettre en ligne"], ["una herramienta", "un outil"]];

let todo = [["llegar", "arriver"], ["una solicitud de amistad", "un demande d'amis"],
    ["molestar", "déranger"], ["comprobar", "vérifier"], ["una sospecha", "un soupçon/suspicion"],
    ["hacerse pasar por", "se faire passer pour"], ["la intimidad", "l intimité"],
    ["el cuarto", "la chambre"], ["la pantalla del ordenador", "l écran de l ordinateur"],
    ["hacer daño", "faire du mal"], ["doñar", "nuire"], ["eliminar", "éliminer"],
    ["ralentizar", "ralentir"], ["crackear", "craquer"], ["chatear", "chater"],
    ["un rato", "un moment"], ["bajar", "télécharger"], ["subir", "mettre en ligne"], 
    ["una página", "une page"], ["un enlace", "un lien"], ["un ataque", "une attaque"],
    ["los piratas informáticos", "les pirates informatiques"], ["wasapear", "envoyer un message par Wasap"], 
    ["despreocupado", "insouciant"], ["webcam", "caméra"], ["el portátil", "le portable (ordinateur)"], 
    ["la mesa", "la table"], ["la cama", "le lit"], ["control remoto", "control à distance"], 
    ["creepware", "cheval de Troie"], ["el micrófono", "le microphone"], ["grabar", "enregistrer"], 
    ["desnudar", "déshabiller"], ["pillar", "attraper"], ["ordenador", "ordinateur"], ["aceptar", "accepter"],
    ["actualizar", "actualiser"], ["una plataforma", "une plateforme"], ["un sitio", "un site"],
    ["un perfil falso", "un faux profil"], ["jaquear", "hacker"], ["un programa malicioso", "un programme malveillant"], 
    ["desconocido", "inconnu"], ["aprovecharse", "profiter de"], ["mandar", "envoyer"],
    ["los datos personales", "les données personnelles"], ["la rapidez/la velocidad", "la rapidité"],
    ["pagar", "payer"], ["los objectos conectados", "les objets connectés"],
    ["concienciar", "faire prendre conscience"], ["proteger", "protéger"],
    ["tomar precauciones", "prendre des précautions"], ["desfase", "décalage"], ["dejar", "laisser"], 
    ["ni siquiera", "même pas"], ["fuera", "en dehors"], ["frente", "devant"], ["definitivamente", "en définitive"], 
    ["el barrio", "le quartier"], ["alguien", "quelqu'un"], ["a través", "à travers"], ["vale dinero", "valoir de l'argent"],
    ["tener acceso a", "avoir accer à"], ["el funcionamiento", "le fonctionnement"], ["la ingenuidad", "la naïveté"], 
    ["una tonterÍa", "une broutille"], ["comentar", "commenter"], ["una ocurrencia", "une idée soudaine"], 
    ["una contraseña", "mot de passe"], ["tener cuidado", "faire attention"], ["hacer clic", "faire un clic"], 
    ["rechazar", "refuser"]];

let laPintura = [["una novela", "une nouvelle"], ["la conversación", "la conversation"], ["el papel", "le rôle"],
    ["según", "selon"], ["decorativo", "décoratif"], ["cambiar", "changer"],
    ["un artista comprometido", "un artiste engagé"], ["aislado", "isolé"], ["despertar", "éveiller"],
    ["concienciar", "faire prendre conscience"], ["el estado del mundo", "l'état du monde"],
    ["la condición humana", "la condition humaine"], ["sacudir", "secouer"], ["creer", "croire"],
    ["burlarse", "se moquer"], ["tachar", "rayer"], ["semejante", "semblable"], ["rodear", "entourer"],
    ["un alma", "una âme"], ["suscitar", "susciter"], ["transmitir", "transmettre"], ["la angustia", "l'angoisse"],
    ["la confusión", "la confusion"], ["dar miedo", "faire peur"], ["asustar", "effrayer"],
    ["desprender", "dégager"], ["el desorden", "le désordre"], ["la técnica", "la technique"],
    ["óleo sobre lienzo", "huile sur toile"], ["los colores", "les couleurs"],
    ["en blanco y negro", "en noir et blanc"], ["grises", "gris"], ["la forma", "la façon/la manière"],
    ["el tamaño", "la taille"], ["un rectángulo", "un rectangle"], ["horizontal", "horizontal"],
    ["vertical", "vertical"], ["medir", "mesurer"], ["mide", "mesure"], ["por", "par"],
    ["el bombardeo", "le bombardement"], ["un elemento clave", "un élément clé"],
    ["la composición", "la composition"], ["la estructura", "la structure"],
    ["a primera vista", "à première vue"], ["la perspectiva", "la perspective"],
    ["un respeto", "un respect"], ["la profundidad", "la profondeur"], ["el volumen", "le volume"],
    ["la luz", "la lumière"], ["las luces", "les lumières"], ["una lámpara", "une lampe"],
    ["un quinqué", "une lampe à huile"], ["el movimiento", "le mouvement"],
    ["las lineas curvas", "les courbes"], ["las lineas rectas", "les lignes droites"], ["vacío", "vide"],
    ["lleno", "plein"], ["dirigirse", "se diriger"], ["hacia", "vers"], ["la izquierda", "la gauche"],
    ["la derecha", "la droite"], ["con respecto a", "par rapport à"], ["el ejército", "l'armée"],
    ["ornamental", "ornemental"], ["las paredes", "les murs"], ["los pintores", "les peintres"],
    ["es decir", "c'est à dire"], ["artístico", "artistique"], ["irónico", "ironique"],
    ["a lo mejor", "peut-être (a)"], ["o sea", "c'est à dire(2eme façon)"], ["el sufrimiento", "la souffrance"],
    ["el dolor", "la douleur"], ["una bombilla", "une ampoule"], ["conseguir", "réussir"],
    ["enemigo", "ennemi"], ["quizás", "peut-être (q)"], ["tal vez", "peut-être (t)"], ["acaso", "peut-être (a)"],
    ["una herida", "une blessure"], ["regresar", "revenir"], ["encargar", "commander"], ["volver", "rentrer"], 
    ["gobierno", "gouvernement"]];

let losConectores = [["primero","d'abord, premièrement"], ["para empezar","pour commencer"], 
    ["para comenzar","pour commencer (autre que 'para empezar')"], ["en primer lugar","en premier lieu"], 
    ["al principio","au début"], ["segundo","deuxième"], ["en segundo lugar","en second lieu"], 
    ["tercero","troisièmement"], ["en tercer lugar","en troisième lieu"], ["después","après"], 
    ["luego","ensuite"], ["además","de plus"], ["por fin","enfin"], ["al final","à la fin"], 
    ["para terminar","pour terminer"], ["para acabar","pour finir"], ["para concluir","pour conclure"], 
    ["en conclusión","en conclusión"], ["entonces","donc, alors"], ["así que","donc, alors (autre que 'entonces')"], 
    ["por lo tanto","par conséquent"], ["porque","parce que"], ["en efecto","en effet"], ["por eso","c'est pourquoi"], 
    ["por","à cause de (préposition introduisant une cause)"], ["así","ainsi, comme ça"], ["en realidad","en réalité, en fait"], 
    ["al contrario","au contraire"], ["de hecho","en fait (autre que 'en realidad')"], 
    ["por lo contrario","au contraire (autre que 'al contrario')"], ["mientras que","alors que (opposition)"], 
    ["por un lado","d'un côté"], ["por otro lado","d'un autre côté"], ["sin embargo","cependant"], 
    ["aunque","bien que, même si"], ["y","et"], ["e","et (quand devant un mot qui commence par le son 'i')"], ["o","ou"], 
    ["u","ou (quand devant un mot qui commence par le son 'o')"], ["pero","mais"], 
    ["este libro es largo pero interesante","ce livre est long mais intéressant"], 
    ["no habla español pero lo entiende","il ne parle pas espagnol mais il le comprend"], 
    ["sino","mais (après une négation, pour OPPOSER)"], ["este libro no es largo sino corto","ce livre n'est pas long mais court"]];

let toutes = // ciudadanio_y_mundos_virtuales
[["ciudadanía", "citoyenneté"] , ["los derechos", "les droits"],
    ["un ciudadano", "un citoyen"], ["ejercer", "exercer"], ["comprometerse", "s'engager"],
    ["las redes sociales", "les réseaux sociaux"], ["favorecer", "favoriser"],
    ["peligrar", "mettre en danger"], ["los bulos/las falsas noticias", "les fausses informations"],
    ["educación a los medios de communicación", "l'éducation au média"], ["los pagos virtuales", "les paiements virtuels"],
    ["los datos personales", "les données personnelles"], ["la inteligencia artificial", "l'intelligence artificielle"],
    ["el ciberacoso", "le cyber-harcèlement"], ["la usurpación de identidad", "l'usurpation d'identité (u)"],
    ["el robo de identidad", "l'usurpation d'identité (r)"], ["los foros", "les forums"], ["un denunciante", "un lanceur d'alerte"],
    ["soler", "avoir l'habitude"], ["el móvil", "le téléphone portable"],["hacer llamadas", "passer des appels"], 
    ["cualquier", "n'importe"], ["estar acostumbrado a", "être habitué à"], ["ligar", "draguer"], ["intercambiar", "échanger"],
    ["buscar informaciones", "chercher des informations"], ["riesgos/peligros", "danger"], ["bajar", "télécharger"], 
    ["subir", "mettre en ligne"], ["una herramienta", "un outil"],
    // todo_vale_dinero_en_la_red
    ["llegar", "arriver"], ["una solicitud de amistad", "un demande d'amis"],
    ["molestar", "déranger"], ["comprobar", "vérifier"], ["una sospecha", "un soupçon/suspicion"],
    ["hacerse pasar por", "se faire passer pour"], ["la intimidad", "l intimité"],
    ["el cuarto", "la chambre"], ["la pantalla del ordenador", "l écran de l ordinateur"],
    ["hacer daño", "faire du mal"], ["doñar", "nuire"], ["eliminar", "éliminer"],
    ["ralentizar", "ralentir"], ["crackear", "craquer"], ["chatear", "chater"],
    ["un rato", "un moment"], ["bajar", "télécharger"], ["subir", "mettre en ligne"], 
    ["una página", "une page"], ["un enlace", "un lien"], ["un ataque", "une attaque"],
    ["los piratas informáticos", "les pirates informatiques"], ["wasapear", "envoyer un message par Wasap"], 
    ["despreocupado", "insouciant"], ["webcam", "caméra"], ["el portátil", "le portable (ordinateur)"], 
    ["la mesa", "la table"], ["la cama", "le lit"], ["control remoto", "control à distance"], 
    ["creepware", "cheval de Troie"], ["el micrófono", "le microphone"], ["grabar", "enregistrer"], 
    ["desnudar", "déshabiller"], ["pillar", "attraper"], ["ordenador", "ordinateur"], ["aceptar", "accepter"],
    ["actualizar", "actualiser"], ["una plataforma", "une plateforme"], ["un sitio", "un site"],
    ["un perfil falso", "un faux profil"], ["jaquear", "hacker"], ["un programa malicioso", "un programme malveillant"], 
    ["desconocido", "inconnu"], ["aprovecharse", "profiter de"], ["mandar", "envoyer"],
    ["los datos personales", "les données personnelles"], ["la rapidez/la velocidad", "la rapidité"],
    ["pagar", "payer"], ["los objectos conectados", "les objets connectés"],
    ["concienciar", "faire prendre conscience"], ["proteger", "protéger"],
    ["tomar precauciones", "prendre des précautions"], ["desfase", "décalage"], ["dejar", "laisser"], 
    ["ni siquiera", "même pas"], ["fuera", "en dehors"], ["frente", "devant"], ["definitivamente", "en définitive"], 
    ["el barrio", "le quartier"], ["alguien", "quelqu'un"], ["a través", "à travers"], ["vale dinero", "valoir de l'argent"],
    ["tener acceso a", "avoir accer à"], ["el funcionamiento", "le fonctionnement"], ["la ingenuidad", "la naïveté"], 
    ["una tonterÍa", "une broutille"], ["comentar", "commenter"], ["una ocurrencia", "une idée soudaine"], 
    ["una contraseña", "mot de passe"], ["tener cuidado", "faire attention"], ["hacer clic", "faire un clic"], 
    ["rechazar", "refuser"],
    //la_pintura
    ["una novela", "une nouvelle"], ["la conversación", "la conversation"], ["el papel", "le rôle"],
    ["según", "selon"], ["decorativo", "décoratif"], ["cambiar", "changer"],
    ["un artista comprometido", "un artiste engagé"], ["aislado", "isolé"], ["despertar", "éveiller"],
    ["concienciar", "faire prendre conscience"], ["el estado del mundo", "l'état du monde"],
    ["la condición humana", "la condition humaine"], ["sacudir", "secouer"], ["creer", "croire"],
    ["burlarse", "se moquer"], ["tachar", "rayer"], ["semejante", "semblable"], ["rodear", "entourer"],
    ["un alma", "una âme"], ["suscitar", "susciter"], ["transmitir", "transmettre"], ["la angustia", "l'angoisse"],
    ["la confusión", "la confusion"], ["dar miedo", "faire peur"], ["asustar", "effrayer"],
    ["desprender", "dégager"], ["el desorden", "le désordre"], ["la técnica", "la technique"],
    ["óleo sobre lienzo", "huile sur toile"], ["los colores", "les couleurs"],
    ["en blanco y negro", "en noir et blanc"], ["grises", "gris"], ["la forma", "la façon/la manière"],
    ["el tamaño", "la taille"], ["un rectángulo", "un rectangle"], ["horizontal", "horizontal"],
    ["vertical", "vertical"], ["medir", "mesurer"], ["mide", "mesure"], ["por", "par"],
    ["el bombardeo", "le bombardement"], ["un elemento clave", "un élément clé"],
    ["la composición", "la composition"], ["la estructura", "la structure"],
    ["a primera vista", "à première vue"], ["la perspectiva", "la perspective"],
    ["un respeto", "un respect"], ["la profundidad", "la profondeur"], ["el volumen", "le volume"],
    ["la luz", "la lumière"], ["las luces", "les lumières"], ["una lámpara", "une lampe"],
    ["un quinqué", "une lampe à huile"], ["el movimiento", "le mouvement"],
    ["las lineas curvas", "les courbes"], ["las lineas rectas", "les lignes droites"], ["vacío", "vide"],
    ["lleno", "plein"], ["dirigirse", "se diriger"], ["hacia", "vers"], ["la izquierda", "la gauche"],
    ["la derecha", "la droite"], ["con respecto a", "par rapport à"], ["el ejército", "l'armée"],
    ["ornamental", "ornemental"], ["las paredes", "les murs"], ["los pintores", "les peintres"],
    ["es decir", "c'est à dire"], ["artístico", "artistique"], ["irónico", "ironique"],
    ["a lo mejor", "peut-être (a)"], ["o sea", "c'est à dire(2eme façon)"], ["el sufrimiento", "la souffrance"],
    ["el dolor", "la douleur"], ["una bombilla", "une ampoule"], ["conseguir", "réussir"],
    ["enemigo", "ennemi"], ["quizás", "peut-être (q)"], ["tal vez", "peut-être (t)"], ["acaso", "peut-être (a)"]
    ["una herida", "une blessure"], ["regresar", "revenir"], ["encargar", "commander"], ["volver", "rentrer"], 
    ["gobierno", "gouvernement"]];


// Listes Anglaises__________________________________________________________________________________________________________________________________________________
//Gun in America
let GunsInAmerica = [["a weapon","une arme"], ["a murder","un meurtre"], ["a law","une loi"], ["a bullet-proof","un gilet par balle"],
    ["legal","légal"], ["insecurity","insécurité"], ["an attack","une attaque"], ["to feel safe","se sentir en sécurité"], 
    ["to commit suicide","commettre un suicide"], ["cops","les flics"], ["gun control","la réglementation du port d'armes"], 
    ["a mass shooting","une tuerie de masse"], ["to have easy access to","avoir un accès facile à"], 
    ["to be ratified by","être accepté par"], ["to become effective","entrer en vigueur"], ["to keep","garder"], ["to own","posséder"], 
    ["to bear","porter (b)"], ["to carry","porter (c)"], ["shall not be infringed","ne sera pas baffouer"], 
    ["the most striking","le plus frappant"], ["aftermath","en conséquences"], 
    ["the easier the access to guns, the more deaths there are","plus l'accés aux armes est facile, plus il y a de morts"], 
    ["a gun show sales","une foire aux armes"], ["a stranglehold","une emprise"], ["lobbyists","les influenceurs politiques"], 
    ["to manage","réussir à (m)"], ["to succed to","réussir à (s)"], ["to owe a debt", "devoir une dette"], ["the issue", "le problème"], 
    ["to keep our focus", "pour garder notre concentration"], ["deadliest", "le plus meurtrier"], ["enforced", "appliqué"], 
    ["widespread", "répandu"], ["widely", "largement"], ["a threat", "une menace"], ["aware", "au courant"], ["heavy", "lourd"], 
    ["National Rifle Association", "L'association nationale des détenteurs d'armes à feu"], ["deadly", "mortel"], 
    ["to be running for", "être dans la course pour"]];
//LinkWords
let LinkWords = [["as","comme"],["because","parce que"],["for","car"],["since","puisque"],["consequently","en conséquence"],
    ["therefore","il s'en suit que"],["so","donc"],["that's why","c'est pourquoi"],["as a result of","en raison de"],
    ["still","cependant (s)"],["and yet","et encore"],["however","cependant (h)"],["despite","malgré (d)"],
    ["in spite of","malgré (i)"],["although","bien que (a)"],["though","bien que (t)"],["unless","à moins que"],
    ["nevertheless","néanmoins"],["otherwise","sinon"],["whether","si"],["on condition that","à condition que (o)"],
    ["provided","à condition que (p)"],["meanwhile","pendant ce temps"],["until","jusqu'à (u)"],["till","jusqu'à (t)"],
    ["once","une fois que"],["last week","la semaine dernière"],["when","quand"],["ago","il y a + time"],
    ["during","pendant + évènement"],["for","pendant + durée"],["since","depuis"],["as soon as","dès que"],
    ["in order to","pour, afin de"],["so as to","afin de"],["whereas","tandis que"],["while","pendant que"],
    ["on the contrary","au contraire"],["contrary to","contrairement à (c)"],["instead of","au lieu de"],
    ["unlike","contrairement à (u)"],["but","mais"],["even if","même si"],["even","même"],["though","cependant"],
    ["moreover","de plus (m)"],["futhermore","en outre"],["what's more","quoi de plus"],["in a addition to","en plus de"],
    ["besides","de plus (b)"],["all the same","tout de même"],["similary","similairement"],["what if","et si"],["suppose","supposer"]];


// affiche le mot + la langue
let motVocab = String(eval(liste)[aleatoire()][1]);
document.getElementById('mot').innerHTML = motVocab;
document.getElementById('langueEtud').innerHTML = langue;

// permet de valider avec la touche entrer
if (termine == false){
document.addEventListener('keydown', function(event) {
	if (event.code == "Enter") {
		getValue();
  }
});}



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
                document.getElementById("valider").value = "Recommencer";
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
    if (termine == true){
        document.location.href = `3LeTest.html?${a}`
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