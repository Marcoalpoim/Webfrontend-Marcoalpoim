$(document).ready(function () {

    $('#destacarTexto').on('click', function () {
        $('#texto').addClass('destaque');
    });

    $('#esconder').on('click', function () {
      $('#bloco').hide();
    });

    $('#mostrar').on('click', function () {
      $('#bloco').show();
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
