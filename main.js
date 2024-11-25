function average(a){

    if (a.length === 0) return 0;
    let sum= 0;
    for(let i = 0; i<a.length;i++){
        sum += a[i];
    }
    return (sum / a.length).toFixed(1);
}



let medie_generala= 0;
function mediegenerala(x){
    if(x === 0){
        medie_generala += 10;
    }
    else
        medie_generala += Number(x);

}




let romana_ionut = [7,7,8];
let mate_ionut = [10,10,8];
let info_ionut = [];
let sport_ionut = [10];
let geogra_ionut = [9];
let bio_ionut = [10,5,4];
let germana_ionut = [7];
let tic_ionut = [];
let fizica_ionut = [9];
let religie_ionut = [];
let chimie_ionut = [];
let dirigentie_ionut = [10];
let socio_ionut = [];
let engleza_ionut = [9];
let muzica_ionut = [9];
let desen_ionut = [10];
let istorie_ionut = [10];
let anteprenoriala_ionut = [2];

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

avg = average(romana_ionut);mediegenerala(avg);
document.getElementById("ionut_media_romana").innerText = avg;
avg = average(mate_ionut);mediegenerala(avg);
document.getElementById("ionut_media_mate").innerText = avg;
avg = average(info_ionut);mediegenerala(avg);
document.getElementById("ionut_media_info").innerText = avg;
avg = average(sport_ionut);mediegenerala(avg);
document.getElementById("ionut_media_sport").innerText = avg;
avg = average(geogra_ionut);mediegenerala(avg);
document.getElementById("ionut_media_geogra").innerText = avg;
avg = average(bio_ionut);mediegenerala(avg);
document.getElementById("ionut_media_bio").innerText = avg;
avg = average(germana_ionut);mediegenerala(avg);
document.getElementById("ionut_media_germana").innerText = avg;
avg = average(tic_ionut);mediegenerala(avg);
document.getElementById("ionut_media_tic").innerText = avg;
avg = average(fizica_ionut);mediegenerala(avg);
document.getElementById("ionut_media_fizica").innerText = avg;
avg = average(religie_ionut);mediegenerala(avg);
document.getElementById("ionut_media_religie").innerText = avg;
avg = average(chimie_ionut);mediegenerala(avg);
document.getElementById("ionut_media_chimie").innerText = avg;
avg = average(dirigentie_ionut);mediegenerala(avg);
document.getElementById("ionut_media_dirigentie").innerText = avg;
avg = average(socio_ionut);mediegenerala(avg);
document.getElementById("ionut_media_socio").innerText = avg;
avg = average(engleza_ionut);mediegenerala(avg);
document.getElementById("ionut_media_engleza").innerText = avg;
avg = average(muzica_ionut);mediegenerala(avg);
document.getElementById("ionut_media_muzica").innerText = avg;
avg = average(desen_ionut);mediegenerala(avg);
document.getElementById("ionut_media_desen").innerText = avg;
avg = average(istorie_ionut);mediegenerala(avg);
document.getElementById("ionut_media_istorie").innerText = avg;
avg = average(anteprenoriala_ionut);mediegenerala(avg);
document.getElementById("ionut_media_anteprenoriala").innerText = avg;

document.getElementById("ionut_media_generala").innerText = (medie_generala / 18).toFixed(2);
