let depart;
let fin;

self.onmessage = function(event) {
    if (event.data === 'start') {
        const debut = new Date();
        depart = debut.getHours() * 3600 + debut.getMinutes() * 60 + debut.getSeconds();
        IncrementationChrono();
    } else if (event.data === 'stop') {
        fin = true;
    }
};

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
        self.postMessage(`${minutes}:${secondesEtude}`);
        setTimeout(IncrementationChrono, 1000);
    }
};
