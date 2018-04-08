$("h1").html("Hey now i am rewrite jquery cmment aor heading ");
$("input").keypress(function(event){
   
if ( event.which == 13 ) {
     $("h1").html($("input").val());
  }
    
});