 $(window).on("load", start);

 function start() {
     console.log("start");


     $("#infoboxDitte").hide();
     $("#infoboxGitte").hide();
     $("#infoboxCharlotte").hide();

     $("#gitte").on("click", visGitte);
     $("#ditte").on("click", visDitte);
     $("#charlotte").on("click", visCharlotte);
 }

 function visGitte() {
     console.log("visGitte");

     $("#infoboxGitte").show();
     $("#infoboxDitte").hide();
     $("#infoboxCharlotte").hide();

     $("#infoboxGitte").on("click", hide);
 }

 function visDitte() {
     console.log("visDitte");

     $("#infoboxDitte").show();

     $("#infoboxGitte").hide();
     $("#infoboxCharlotte").hide();
     $("#infoboxDitte").on("click", hide);
 }

 function visCharlotte() {
     console.log("visCharlotte");

     $("#infoboxCharlotte").show();
     $("#infoboxDitte").hide();
     $("#infoboxGitte").hide();
     $("#infoboxCharlotte").on("click", hide);

 }

 function hide() {
     console.log("hide");
     $("#infoboxCharlotte").hide();
     $("#infoboxDitte").hide();
     $("#infoboxGitte").hide();

 }
