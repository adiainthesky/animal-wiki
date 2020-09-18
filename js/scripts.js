$(document).ready(function() {
  $("form#animalInfo").submit(function(event) {
    const animal = $("input:radio[name=animal]:checked").val();


    if (animal = "dog") {
      $("#dogs").show();
    }  else if (animal = "sloth") {
      $("#sloths").show();
    } else {
      $("hippopotamus").show();
    }
    event.preventDefault();
  });
});
