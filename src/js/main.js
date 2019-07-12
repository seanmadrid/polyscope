//GLOBAL JQUERY
jQuery(document).ready(function($){ 

  $(document).ready(function() {
    $('body').css('opacity', 1);
  });

  $('a.single-project').each(function(){
    $(this).height($(this).width());
  });

  $('.single-project').each(function(){
    $(this).height($(this).width());
  });

  $('#add_task').on('click', function(){
    $('#sb').removeClass('hidden');
    $('#sphere').addClass('col-9').removeClass('col-12');
    $('#sb').removeClass('sb-project').addClass('sb-task');
    $('.sphere-toggle').addClass('pad-it');
    $(this).css('opacity', 0);
  });

  $('#save_project').on('click', function(){
    $('#sb').addClass('hidden');
    $('#sphere').removeClass('col-9').addClass('col-12');
    $('#add_task').addClass('addable').css('opacity', 1);;
    $('.sphere-toggle').removeClass('pad-it');
    return false;
  });

  if($('body').hasClass('.main') || $('body').hasClass('.projects') || $('body').hasClass('')){

  }else {
    $('#sb').addClass('hidden');
    $('#sphere').removeClass('col-9').addClass('col-12');
    $('#add_task').addClass('addable').css('opacity', 1);;
    $('.sphere-toggle').removeClass('pad-it');
  }

  $('a.edit').on('click', function(){
    $('#add_task').toggleClass('addable');
    $('#sb').toggleClass('hidden');
    $('#sphere').toggleClass('col-9').toggleClass('col-12');
    $('.sphere-toggle').toggleClass('pad-it');
  });

  //trackbar
  $('#hours_range').on('change', function(){
      $('#hours2complete').text($('#hours_range').val());
  });

  var clicker = 0;

  var count = $('#sphere .poly-video').length - 1;
  $('.toggle-arrow-left.no-link').on('click', function(){    
    if(clicker > 0){
      clicker = clicker - 1;    
    }
    var the_id = "#data_" + clicker;
    $('#sphere > .poly-video.show').removeClass('show');
    $(the_id).addClass('show');
    window.location.hash = the_id;
  }); 

  $('.toggle-arrow-right.no-link').on('click', function(){
    if(clicker < count){
      clicker = clicker + 1;    
    }
    var the_id = "#" + "data_" + clicker;
    $('#sphere > .poly-video.show').removeClass('show');
    $(the_id).addClass('show');
    window.location.hash = the_id;
    console.log(the_id);
  }); 

  var mouseX, mouseY;
  $('#sphere').dblclick(function(e){
    mouseX = e.pageX + 28;
    mouseY = e.pageY - 18;

    $('body').on('click', function(){
      $("#popup").removeClass("appear");
    });

    $("#popup").removeClass("appear").css({
        "left": mouseX + 'px',
        "top": mouseY + 'px'
    });

    if($("#popup").hasClass('appear')){

      $("#popup").removeClass('appear');
      $("#popup").delay(500).addClass('appear');

    }else{
      $("#popup").addClass('appear');
    } 
  });

  $('.key').mouseenter(function(){
    var key_note = $(this).data('hover');
    $(this).append("<span class='key-hover'>" + key_note + "</span>");
    $('.key-hover').fadeIn();
  }).mouseout(function(){
    $('.key-hover').fadeOut();
    $(this).children('.key-hover').remove();
  });
  $("#hours2complete").text('1');
  $('#discount_credits').change( function() { 
      var rangeVal = $(this).val();
      $("#hours2complete").text(rangeVal);
  });
  $('a.metrics').on('click', function(){
    $('#metrics_popup').fadeIn();
    $('#metrics_popup_bg').fadeIn();
    return false;
  });
  $('#metrics_popup_bg').on('click', function(){
    $('#metrics_popup').fadeOut();
    $('#metrics_popup_bg').fadeOut();
  });
  $('span#metrics_close').on('click', function(){
    $('#metrics_popup').fadeOut();
    $('#metrics_popup_bg').fadeOut();
  });
  $('.project-desc > textarea').attr('rows', 5);
  $(".project-priority").after(
      "  <div class='add-team-members m-y-b'><input name='add_team_member' type='text' placeholder='+ Team Members'></div>  <div class='add-task-group m-y-b'><input name='add_task_group' type='text' placeholder='+ Task Groups'></div>"
    );
});

