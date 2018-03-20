$( function() {
  $( "#datepicker" ).datepicker();
} );

function myFunction() {

    $(document).ready(function(){
    $('#datepicker').attr("placeholder", Date());
    });
