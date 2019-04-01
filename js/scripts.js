// $(document).ready(function() {
//   $("#favThings").submit(function(event) {
//
//     event.preventDefault();
//     var name = $("input#name").val();
//     var food = $("input#food").val();
//     var music = $("input#music").val();
//     var spiritAnimal = $("input#spiritAnimal").val();
//     var movie = $("input#movie").val();
//
//     var array = [name, food, music, spiritAnimal, movie];
//
//     $(".name").text(nameInput);
//     $(".food").text(foodInput);
//     $(".music").text(musicInput);
//     $(".spiritAnimal").text(spiritAnimalInput);
//     $(".movie").text(movieInput);
//
//
//     $("#array").show();
//
//
//
// });
//
// });
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var favThings = ["name", "food", "music", "spiritAnimal", "movie"];
    favThings.forEach(function(hi){
      var userInput = $("input#" + hi).val();
      $("." + hi).text(userInput);
    });

    $(".story").show();

    event.preventDefault();
  });
});
