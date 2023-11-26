function IncrementationChrono() {
    const debut = new Date();
    const depart = debut.getHours() * 3600 + debut.getMinutes() * 60 + debut.getSeconds();
    let fin;

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
        postMessage(`${minutes}:${secondesEtude}`);
    }
}
