async function main(){


document.getElementById('cp').addEventListener("change", async function (jacky){

//.Récuperation du département séléctionné dans le champ <select>.

  dep = document.getElementById('cp').value;
  console.log(dep);

document.getElementById('cp').addEventListener("pointerenter", async function (){

  location.reload();

})


//.Récuperation de toutes les infos concernant les communes du departement séléctionné.

 const county = await fetch('https://geo.api.gouv.fr/departements/' + dep + '/communes')
  .then(resultat => resultat.json())
  .then(json     => json)


//. Extraction du nom des communes de chaque objet du Json

county.forEach( function(data) {


   //console.log(data.nom);

//. Ajout des communes aux champs <option> du <select>.

 for (let i = 0; i < data.nom[i].length; i++) {
      commune = document.querySelector('select');
      communes = document.createElement('OPTION');
      communes.innerHTML = data.nom;
      commune.appendChild(communes);

    }


}); //. Fin forEach.

}, false); //. Fin jacky

//. Récupération du nom de la commune.

document.querySelector("select").addEventListener("change", async function (gg){
//console.log(this.value);
//console.log(gg);

coco = document.getElementById('town').value;
  console.log(coco);

//.Récupération des informations sur la commune.

cp = await fetch('https://geo.api.gouv.fr/communes?nom=' + coco + '&fields=codesPostaux')
    .then(resultat => resultat.json())
    .then(json     => json)
   // console.log(cp);

displayCpInfos(cp)


}, false); //. Fin gg




}


//. Récupération du code postale.

function displayCpInfos(data){

  const codepostale = data[0].codesPostaux[0];
  console.log(codepostale);


//. Affichage du code postale.

document.querySelector('#codepostaux').textContent = codepostale;

}


main();
