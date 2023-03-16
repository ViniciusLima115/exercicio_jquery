$(document).ready(function() {
    
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
      
        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li style="display: none;"></li>').text(nomeTarefa);
        const checkIcon = $('<span class="check-icon"><i class="fas fa-check"></i></span>');
        novaTarefa.prepend(checkIcon);
      
        $('ol').append(novaTarefa);
        novaTarefa.slideDown();
        $('form').slideUp();
        $('#nome-tarefa').val('');
      });
      
      $('ol').on('click','li',function(){
        $(this).toggleClass('completed');
        $(this).find('.check-icon i').toggleClass('fa-check fa-check-circle');
      });
      
    });
  