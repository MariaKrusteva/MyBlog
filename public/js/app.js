$(document).ready(function(){

  $.getJSON("http://localhost:3000/poems", function(poems){
    var container = $("#container");
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {poems: poems};
    var html = template(context);
    container.html(html);

    $(".addNewComment").on("click", function(){
      var author = $(this).prev().val();
      var text = $(this).prev().prev().val();
      var id = $(this).attr('id');
      //make PUT query to the poem
      debugger;
    });

  });

  $.getJSON("http://localhost:3000/resipes", function(resipes){
    var container = $("#foodContainer");
    var source   = $("#food-template").html();
    var template = Handlebars.compile(source);
    var context = {resipes: resipes};
    var html = template(context);
    container.html(html);

  });




})
