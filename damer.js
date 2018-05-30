 $(window).on("load", start);

 function start() {
     console.log("start");


     $("#infoboxDorthe").hide();
     $("#infoboxGitte").hide();
     $("#infoboxCharlotte").hide();

     $("#gitte").on("click", visGitte);
     $("#dorthe").on("click", visDorthe);
     $("#charlotte").on("click", visCharlotte);
 }

 function visGitte() {
     console.log("visGitte");

     $("#infoboxGitte").show();

     $("#infoboxDorthe").hide();
     $("#infoboxCharlotte").hide();

     $("#infoboxGitte").on("click", hide);
 }

 function visDorthe() {
     console.log("visDorthe");

     $("#infoboxDorthe").show();

     $("#infoboxGitte").hide();
     $("#infoboxCharlotte").hide();


     $("#infoboxDorthe").on("click", hide);

     let jSonUrl = "http://nynnekamille.com/kea/2.semester/kvindesmedien_eksamen_2sem/wordpress/wp-json/wp/v2/vaerker_af";
     let produkter = [];
     document.addEventListener("DOMContentLoaded", hentJson);
     let template = document.querySelector("template");
     let display = document.querySelector("#dorthe_display");

     async function hentJson() {
         let jsonData = await fetch(jSonUrl);
         produkter = await jsonData.json();
         visProdukter();


     }

     function visProdukter() {

         produkter.forEach(produkt => {

             let kategori = produkt.categories;
             console.log(kategori == 40);
             if (kategori == 40) {

                 let klon = template.cloneNode(true).content;

                 klon.querySelector("[data-navn]").textContent = produkt.acf.navn;
                 klon.querySelector("[data-image]").src = produkt.acf.billede.url;
                 klon.querySelector("[data-image]").alt = produkt.acf.beskrivelse_af_billede;

                 klon.querySelector("article").addEventListener("click", () => {
                     location.href = "singlespecial.html?id=" + produkt.id;
                 });

                 display.appendChild(klon);
             };
         });
     }
 }

 function visCharlotte() {
     console.log("visCharlotte");

     $("#infoboxCharlotte").show();

     $("#infoboxDorthe").hide();
     $("#infoboxGitte").hide();

     $("#infoboxCharlotte").on("click", hide);

 }

 function hide() {
     console.log("hide");
     $("#infoboxCharlotte").hide();
     $("#infoboxDorthe").hide();
     $("#infoboxGitte").hide();

 }
