
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var favThings = ["name", "food", "music", "spiritAnimal", "movie"];
    favThings.forEach(function(hi){
      var userInput = $("input#" + hi).val();
      $("." + hi).text(userInput);
    });

    things = [$("#name").val(), $("#food").val(), $("#music").val() ,$("#spiritAnimal").val() ,$("#movie").val()];
    $(".story").show();

    // console.log(things);
    // things.forEach
    //   $("#fig0").append("<li>" + $("#name").val() + "</li>");
    //   $("#fig0").append("<li>" + $("#food").val() + "</li>");
    //   $("#fig0").append("<li>" + $("#music").val() + "</li>");
    //   $("#fig0").append("<li>" + $("#spiritAnimal").val() + "</li>");
    //   $("#fig0").append("<li>" + $("#movie").val() + "</li>");

    var array2 = [];
    array2.push(things[0], things[1], things[2]);
    $("#answer1").text("We also love " + array2[0]);
    $("#answer2").text("We also love " + array2[1]);
    $("#answer3").text("We also love " + array2[2]);


    event.preventDefault();
  });
});
