function average(a){

    if (a.length === 0) return 0;
    let sum= 0;
    for(let i = 0; i<a.length;i++){
        sum += a[i];
    }
    return (sum / a.length).toFixed(1);
}



let medie_generala_ionut= 0;
function mediegenerala(x){
    let nr=0;
    if(x === 0){
        nr = 10;
    }
    else
        nr = Number(x);
    return Math.round(nr);
}




let romana_ionut = [7,7,8];
let mate_ionut = [10,8,10];
let info_ionut = [];
let sport_ionut = [10];
let geogra_ionut = [9];
let bio_ionut = [10,5,4];
let germana_ionut = [7];
let tic_ionut = [];
let fizica_ionut = [10,9];
let religie_ionut = [9];
let chimie_ionut = [];
let dirigentie_ionut = [10];
let socio_ionut = [];
let engleza_ionut = [9];
let muzica_ionut = [9];
let desen_ionut = [10];
let istorie_ionut = [10];
let anteprenoriala_ionut = [9];

document.getElementById("ionut_note_romana").innerText = romana_ionut.join(' ');
document.getElementById("ionut_note_mate").innerText = mate_ionut.join(' ');
document.getElementById("ionut_note_info").innerText = info_ionut.join(' ');
document.getElementById("ionut_note_sport").innerText = sport_ionut.join(' ');
document.getElementById("ionut_note_geogra").innerText = geogra_ionut.join(' ');
document.getElementById("ionut_note_bio").innerText = bio_ionut.join(' ');
document.getElementById("ionut_note_germana").innerText = germana_ionut.join(' ');
document.getElementById("ionut_note_tic").innerText = tic_ionut.join(' ');
document.getElementById("ionut_note_fizica").innerText = fizica_ionut.join(' ');
document.getElementById("ionut_note_religie").innerText = religie_ionut.join(' ');
document.getElementById("ionut_note_chimie").innerText = chimie_ionut.join(' ');
document.getElementById("ionut_note_dirigentie").innerText = dirigentie_ionut.join(' ');
document.getElementById("ionut_note_socio").innerText = socio_ionut.join(' ');
document.getElementById("ionut_note_engleza").innerText = engleza_ionut.join(' ');
document.getElementById("ionut_note_muzica").innerText = muzica_ionut.join(' ');
document.getElementById("ionut_note_desen").innerText = desen_ionut.join(' ');
document.getElementById("ionut_note_istorie").innerText = istorie_ionut.join(' ');
document.getElementById("ionut_note_anteprenoriala").innerText = anteprenoriala_ionut.join(' ');

let avg= 0;

avg = average(romana_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_romana").innerText = avg;
avg = average(mate_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_mate").innerText = avg;
avg = average(info_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_info").innerText = avg;
avg = average(sport_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_sport").innerText = avg;
avg = average(geogra_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_geogra").innerText = avg;
avg = average(bio_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_bio").innerText = avg;
avg = average(germana_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_germana").innerText = avg;
avg = average(tic_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_tic").innerText = avg;
avg = average(fizica_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_fizica").innerText = avg;
avg = average(religie_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_religie").innerText = avg;
avg = average(chimie_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_chimie").innerText = avg;
avg = average(dirigentie_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_dirigentie").innerText = avg;
avg = average(socio_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_socio").innerText = avg;
avg = average(engleza_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_engleza").innerText = avg;
avg = average(muzica_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_muzica").innerText = avg;
avg = average(desen_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_desen").innerText = avg;
avg = average(istorie_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_istorie").innerText = avg;
avg = average(anteprenoriala_ionut);medie_generala_ionut+=mediegenerala(avg);
document.getElementById("ionut_media_anteprenoriala").innerText = avg;

document.getElementById("ionut_media_generala").innerText = (medie_generala_ionut / 18).toFixed(2);







////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////




let medie_generala_david= 0;


let romana_david = [9,9];
let mate_david = [10,10];
let info_david = [10,10];
let sport_david = [];
let geogra_david = [10,10];
let bio_david = [10,10];
let germana_david = [10,10,10];
let tic_david = [9];
let fizica_david = [9,10];
let religie_david = [];
let chimie_david = [10];
let dirigentie_david = [10];
let socio_david = [];
let engleza_david = [10];
let muzica_david = [10];
let desen_david = [10];
let istorie_david = [10];
let anteprenoriala_david = [10];

document.getElementById("david_note_romana").innerText = romana_david.join(' ');
document.getElementById("david_note_mate").innerText = mate_david.join(' ');
document.getElementById("david_note_info").innerText = info_david.join(' ');
document.getElementById("david_note_sport").innerText = sport_david.join(' ');
document.getElementById("david_note_geogra").innerText = geogra_david.join(' ');
document.getElementById("david_note_bio").innerText = bio_david.join(' ');
document.getElementById("david_note_germana").innerText = germana_david.join(' ');
document.getElementById("david_note_tic").innerText = tic_david.join(' ');
document.getElementById("david_note_fizica").innerText = fizica_david.join(' ');
document.getElementById("david_note_religie").innerText = religie_david.join(' ');
document.getElementById("david_note_chimie").innerText = chimie_david.join(' ');
document.getElementById("david_note_dirigentie").innerText = dirigentie_david.join(' ');
document.getElementById("david_note_socio").innerText = socio_david.join(' ');
document.getElementById("david_note_engleza").innerText = engleza_david.join(' ');
document.getElementById("david_note_muzica").innerText = muzica_david.join(' ');
document.getElementById("david_note_desen").innerText = desen_david.join(' ');
document.getElementById("david_note_istorie").innerText = istorie_david.join(' ');
document.getElementById("david_note_anteprenoriala").innerText = anteprenoriala_david.join(' ');

avg = average(romana_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_romana").innerText = avg;
avg = average(mate_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_mate").innerText = avg;
avg = average(info_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_info").innerText = avg;
avg = average(sport_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_sport").innerText = avg;
avg = average(geogra_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_geogra").innerText = avg;
avg = average(bio_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_bio").innerText = avg;
avg = average(germana_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_germana").innerText = avg;
avg = average(tic_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_tic").innerText = avg;
avg = average(fizica_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_fizica").innerText = avg;
avg = average(religie_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_religie").innerText = avg;
avg = average(chimie_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_chimie").innerText = avg;
avg = average(dirigentie_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_dirigentie").innerText = avg;
avg = average(socio_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_socio").innerText = avg;
avg = average(engleza_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_engleza").innerText = avg;
avg = average(muzica_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_muzica").innerText = avg;
avg = average(desen_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_desen").innerText = avg;
avg = average(istorie_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_istorie").innerText = avg;
avg = average(anteprenoriala_david);medie_generala_david+=mediegenerala(avg);
document.getElementById("david_media_anteprenoriala").innerText = avg;


document.getElementById("david_media_generala").innerText = (medie_generala_david / 18).toFixed(2);