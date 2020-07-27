$(document).ready(function() {  // <------- IMPORTANTE

  //al click del tasto/classe prev richiamo una funzione che scorre le immagini.
  $(".prev").click(function() {
    prevImage();
  })

  //al click del tasto/classe next richiamo una funzione che scorre le immagini.
  $(".next").click(function() {
    nextImage();
  })

  $(".nav > i").click(function() {
    var posizione = $(this).index();
    $(".images img").removeClass("active");
    $("img").eq(posizione).addClass("active");

    $(".nav > i").removeClass("active");

    $(".nav > i").eq(posizione).addClass("active");
  });


// ----FUNZIONI----

  function nextImage(){

    //Memorizzo in una variabile l'immagine attiva.
    var activeImage = $(".images img.active");

    //Memorizzo in una variabile l'icona attiva.
    var activeCircle = $(".nav i.active")

    //tolgo la classe
    activeImage.removeClass("active");
    activeCircle.removeClass ("active");

    //metto la classe al next
    if (activeImage.hasClass("last")){
      $(".images img.first").addClass("active");
      $(".nav i.first").addClass("active");
    }else {
      activeImage.next().addClass("active");
      activeCircle.next().addClass("active");
    }
  }

  function prevImage(){
    var activeImage = $(".images img.active");

    var activeCircle = $(".nav i.active");

    activeImage.removeClass("active");
    activeCircle.removeClass("active");

    if (activeImage.hasClass("first")) {
      $(".images img.last").addClass("active");
      $(".nav i.last").addClass("active");
    }else {
      activeImage.prev().addClass("active");
      activeCircle.prev().addClass("active");
    }
  }

});
