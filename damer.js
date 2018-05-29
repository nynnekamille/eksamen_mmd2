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
