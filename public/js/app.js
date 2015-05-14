$(document).ready(function(){

  $.getJSON("http://localhost:3000/poems", function(poems){
    console.log(poems);
    var container = $("#container");
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {poems: poems};
    var html = template(context);
    container.html(html);
  })

 /* mag.query().then(function(res){
    var container = $("#mags");
    var mags = res.list;

    return displayWithJade(container, "/views/mags.jade", {
      mags: mags
    });

  })*/


})
