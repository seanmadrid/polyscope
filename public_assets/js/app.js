(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    $(this).removeClass('addable');
  });

  $('#save_project').on('click', function(){
    $('#sb').addClass('hidden');
    $('#sphere').removeClass('col-9').addClass('col-12');
    $('#add_task').addClass('addable');
    $('.sphere-toggle').removeClass('pad-it');
    return false;
  });

  if($('body').hasClass('main')){

  }else {
    $('#sb').addClass('hidden');
    $('#sphere').removeClass('col-9').addClass('col-12');
    $('#add_task').addClass('addable');
    $('.sphere-toggle').removeClass('pad-it');
  }

  $('a.edit').on('click', function(){
    $('#add_task').toggleClass('addable');
    $('#sb').toggleClass('hidden');
    $('#sphere').toggleClass('col-9').toggleClass('col-12');
    $('.sphere-toggle').toggleClass('pad-it');
    $('#sb').removeClass('sb-task').addClass('sb-project');
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
  $("#hours2complete").text('20');
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
      "<div class='due-date m-y-b'><h3 class='task-title m-sm-y-b'>Due Date</h3><input type='date' name='due date'></div><div class='add-team-members m-y-b'><input name='add_team_member' type='text' placeholder='+ Team Members'></div>  <div class='add-task-group m-y-b'><input name='add_task_group' type='text' placeholder='+ Task Groups'></div>"
    );

  //RED FLAG
  $('#red_flag').on('click', function(){
    $('body').addClass('red-flag-clicked');
    $('#sphere').on('click', function(){
      var redFlagCount = $('.little-red-flag').length();
      $('body').removeClass('red-flag-clicked');
      $('body').append("<div class='little-red-flag rf" + redFlagCount + "'></div>");
      var uniqueRFClass = "rf" + redFlagCount;
      $(uniqueRFClass).css({
        "left": mouseX + 'px',
        "top": mouseY + 'px'
      }); 
    });
  });
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcG9seXNjb3BlX3Byb3RvdHlwZS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9wb2x5c2NvcGVfcHJvdG90eXBlL3NyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL0dMT0JBTCBKUVVFUllcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCl7IFxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoJ2JvZHknKS5jc3MoJ29wYWNpdHknLCAxKTtcbiAgfSk7XG5cbiAgJCgnYS5zaW5nbGUtcHJvamVjdCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAkKHRoaXMpLmhlaWdodCgkKHRoaXMpLndpZHRoKCkpO1xuICB9KTtcblxuICAkKCcuc2luZ2xlLXByb2plY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5oZWlnaHQoJCh0aGlzKS53aWR0aCgpKTtcbiAgfSk7XG5cbiAgJCgnI2FkZF90YXNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAkKCcjc2InKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnI3NwaGVyZScpLmFkZENsYXNzKCdjb2wtOScpLnJlbW92ZUNsYXNzKCdjb2wtMTInKTtcbiAgICAkKCcjc2InKS5yZW1vdmVDbGFzcygnc2ItcHJvamVjdCcpLmFkZENsYXNzKCdzYi10YXNrJyk7XG4gICAgJCgnLnNwaGVyZS10b2dnbGUnKS5hZGRDbGFzcygncGFkLWl0Jyk7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWRkYWJsZScpO1xuICB9KTtcblxuICAkKCcjc2F2ZV9wcm9qZWN0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAkKCcjc2InKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnI3NwaGVyZScpLnJlbW92ZUNsYXNzKCdjb2wtOScpLmFkZENsYXNzKCdjb2wtMTInKTtcbiAgICAkKCcjYWRkX3Rhc2snKS5hZGRDbGFzcygnYWRkYWJsZScpO1xuICAgICQoJy5zcGhlcmUtdG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ3BhZC1pdCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgaWYoJCgnYm9keScpLmhhc0NsYXNzKCdtYWluJykpe1xuXG4gIH1lbHNlIHtcbiAgICAkKCcjc2InKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnI3NwaGVyZScpLnJlbW92ZUNsYXNzKCdjb2wtOScpLmFkZENsYXNzKCdjb2wtMTInKTtcbiAgICAkKCcjYWRkX3Rhc2snKS5hZGRDbGFzcygnYWRkYWJsZScpO1xuICAgICQoJy5zcGhlcmUtdG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ3BhZC1pdCcpO1xuICB9XG5cbiAgJCgnYS5lZGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAkKCcjYWRkX3Rhc2snKS50b2dnbGVDbGFzcygnYWRkYWJsZScpO1xuICAgICQoJyNzYicpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcjc3BoZXJlJykudG9nZ2xlQ2xhc3MoJ2NvbC05JykudG9nZ2xlQ2xhc3MoJ2NvbC0xMicpO1xuICAgICQoJy5zcGhlcmUtdG9nZ2xlJykudG9nZ2xlQ2xhc3MoJ3BhZC1pdCcpO1xuICAgICQoJyNzYicpLnJlbW92ZUNsYXNzKCdzYi10YXNrJykuYWRkQ2xhc3MoJ3NiLXByb2plY3QnKTtcbiAgfSk7XG5cbiAgLy90cmFja2JhclxuICAkKCcjaG91cnNfcmFuZ2UnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICAgICQoJyNob3VyczJjb21wbGV0ZScpLnRleHQoJCgnI2hvdXJzX3JhbmdlJykudmFsKCkpO1xuICB9KTtcblxuICB2YXIgY2xpY2tlciA9IDA7XG5cbiAgdmFyIGNvdW50ID0gJCgnI3NwaGVyZSAucG9seS12aWRlbycpLmxlbmd0aCAtIDE7XG4gICQoJy50b2dnbGUtYXJyb3ctbGVmdC5uby1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXsgICAgXG4gICAgaWYoY2xpY2tlciA+IDApe1xuICAgICAgY2xpY2tlciA9IGNsaWNrZXIgLSAxOyAgICBcbiAgICB9XG4gICAgdmFyIHRoZV9pZCA9IFwiI2RhdGFfXCIgKyBjbGlja2VyO1xuICAgICQoJyNzcGhlcmUgPiAucG9seS12aWRlby5zaG93JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAkKHRoZV9pZCkuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRoZV9pZDtcbiAgfSk7IFxuXG4gICQoJy50b2dnbGUtYXJyb3ctcmlnaHQubm8tbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYoY2xpY2tlciA8IGNvdW50KXtcbiAgICAgIGNsaWNrZXIgPSBjbGlja2VyICsgMTsgICAgXG4gICAgfVxuICAgIHZhciB0aGVfaWQgPSBcIiNcIiArIFwiZGF0YV9cIiArIGNsaWNrZXI7XG4gICAgJCgnI3NwaGVyZSA+IC5wb2x5LXZpZGVvLnNob3cnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICQodGhlX2lkKS5hZGRDbGFzcygnc2hvdycpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGhlX2lkO1xuICAgIGNvbnNvbGUubG9nKHRoZV9pZCk7XG4gIH0pOyBcblxuICB2YXIgbW91c2VYLCBtb3VzZVk7XG4gICQoJyNzcGhlcmUnKS5kYmxjbGljayhmdW5jdGlvbihlKXtcbiAgICBtb3VzZVggPSBlLnBhZ2VYICsgMjg7XG4gICAgbW91c2VZID0gZS5wYWdlWSAtIDE4O1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiI3BvcHVwXCIpLnJlbW92ZUNsYXNzKFwiYXBwZWFyXCIpO1xuICAgIH0pO1xuXG4gICAgJChcIiNwb3B1cFwiKS5yZW1vdmVDbGFzcyhcImFwcGVhclwiKS5jc3Moe1xuICAgICAgICBcImxlZnRcIjogbW91c2VYICsgJ3B4JyxcbiAgICAgICAgXCJ0b3BcIjogbW91c2VZICsgJ3B4J1xuICAgIH0pO1xuXG4gICAgaWYoJChcIiNwb3B1cFwiKS5oYXNDbGFzcygnYXBwZWFyJykpe1xuXG4gICAgICAkKFwiI3BvcHVwXCIpLnJlbW92ZUNsYXNzKCdhcHBlYXInKTtcbiAgICAgICQoXCIjcG9wdXBcIikuZGVsYXkoNTAwKS5hZGRDbGFzcygnYXBwZWFyJyk7XG5cbiAgICB9ZWxzZXtcbiAgICAgICQoXCIjcG9wdXBcIikuYWRkQ2xhc3MoJ2FwcGVhcicpO1xuICAgIH0gXG4gIH0pO1xuXG4gICQoJy5rZXknKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCl7XG4gICAgdmFyIGtleV9ub3RlID0gJCh0aGlzKS5kYXRhKCdob3ZlcicpO1xuICAgICQodGhpcykuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J2tleS1ob3Zlcic+XCIgKyBrZXlfbm90ZSArIFwiPC9zcGFuPlwiKTtcbiAgICAkKCcua2V5LWhvdmVyJykuZmFkZUluKCk7XG4gIH0pLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XG4gICAgJCgnLmtleS1ob3ZlcicpLmZhZGVPdXQoKTtcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcua2V5LWhvdmVyJykucmVtb3ZlKCk7XG4gIH0pO1xuICAkKFwiI2hvdXJzMmNvbXBsZXRlXCIpLnRleHQoJzIwJyk7XG4gICQoJyNkaXNjb3VudF9jcmVkaXRzJykuY2hhbmdlKCBmdW5jdGlvbigpIHsgXG4gICAgICB2YXIgcmFuZ2VWYWwgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgJChcIiNob3VyczJjb21wbGV0ZVwiKS50ZXh0KHJhbmdlVmFsKTtcbiAgfSk7XG4gICQoJ2EubWV0cmljcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgJCgnI21ldHJpY3NfcG9wdXAnKS5mYWRlSW4oKTtcbiAgICAkKCcjbWV0cmljc19wb3B1cF9iZycpLmZhZGVJbigpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gICQoJyNtZXRyaWNzX3BvcHVwX2JnJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAkKCcjbWV0cmljc19wb3B1cCcpLmZhZGVPdXQoKTtcbiAgICAkKCcjbWV0cmljc19wb3B1cF9iZycpLmZhZGVPdXQoKTtcbiAgfSk7XG4gICQoJ3NwYW4jbWV0cmljc19jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgJCgnI21ldHJpY3NfcG9wdXAnKS5mYWRlT3V0KCk7XG4gICAgJCgnI21ldHJpY3NfcG9wdXBfYmcnKS5mYWRlT3V0KCk7XG4gIH0pO1xuICAkKCcucHJvamVjdC1kZXNjID4gdGV4dGFyZWEnKS5hdHRyKCdyb3dzJywgNSk7XG4gICQoXCIucHJvamVjdC1wcmlvcml0eVwiKS5hZnRlcihcbiAgICAgIFwiPGRpdiBjbGFzcz0nZHVlLWRhdGUgbS15LWInPjxoMyBjbGFzcz0ndGFzay10aXRsZSBtLXNtLXktYic+RHVlIERhdGU8L2gzPjxpbnB1dCB0eXBlPSdkYXRlJyBuYW1lPSdkdWUgZGF0ZSc+PC9kaXY+PGRpdiBjbGFzcz0nYWRkLXRlYW0tbWVtYmVycyBtLXktYic+PGlucHV0IG5hbWU9J2FkZF90ZWFtX21lbWJlcicgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9JysgVGVhbSBNZW1iZXJzJz48L2Rpdj4gIDxkaXYgY2xhc3M9J2FkZC10YXNrLWdyb3VwIG0teS1iJz48aW5wdXQgbmFtZT0nYWRkX3Rhc2tfZ3JvdXAnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPScrIFRhc2sgR3JvdXBzJz48L2Rpdj5cIlxuICAgICk7XG5cbiAgLy9SRUQgRkxBR1xuICAkKCcjcmVkX2ZsYWcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICQoJ2JvZHknKS5hZGRDbGFzcygncmVkLWZsYWctY2xpY2tlZCcpO1xuICAgICQoJyNzcGhlcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHJlZEZsYWdDb3VudCA9ICQoJy5saXR0bGUtcmVkLWZsYWcnKS5sZW5ndGgoKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygncmVkLWZsYWctY2xpY2tlZCcpO1xuICAgICAgJCgnYm9keScpLmFwcGVuZChcIjxkaXYgY2xhc3M9J2xpdHRsZS1yZWQtZmxhZyByZlwiICsgcmVkRmxhZ0NvdW50ICsgXCInPjwvZGl2PlwiKTtcbiAgICAgIHZhciB1bmlxdWVSRkNsYXNzID0gXCJyZlwiICsgcmVkRmxhZ0NvdW50O1xuICAgICAgJCh1bmlxdWVSRkNsYXNzKS5jc3Moe1xuICAgICAgICBcImxlZnRcIjogbW91c2VYICsgJ3B4JyxcbiAgICAgICAgXCJ0b3BcIjogbW91c2VZICsgJ3B4J1xuICAgICAgfSk7IFxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4iXX0=
