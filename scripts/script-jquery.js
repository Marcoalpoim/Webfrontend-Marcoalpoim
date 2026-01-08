$(document).ready(function () {

  const textodestacado = $('#destacarTexto');
  const texto = $('#texto');

       textodestacado.on('click', function () {
        texto.addClass('destaque');
        console.log('destaque do texto');
    });

  
const esconderbloco = $('#esconder');
const mostrarbloco = $('#mostrar');
const bloco = $('#bloco');

    esconderbloco.on('click', function () {
      bloco.hide();
    });

    mostrarbloco.on('click', function () {
      bloco.show();
    }); 

   // $('#animar').on('click', function () {
    //  $('#box').slideToggle();
   // });
    
    $('#fadeOut').on('click', function () {
    $('#box').fadeOut();
  });

  $('#fadeIn').on('click', function () {
    $('#box').fadeIn();
  });
});
