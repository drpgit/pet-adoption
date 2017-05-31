// Back-end code goes here

function Adoptee(name, type, breed) {
  this.name = name;
  this.type = type;
  this.breed = breed;
  this.status = true;
}

// Front-end code goes here

$(document).ready(function() {
  $("form#animal-new").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#nickname").val();
    var inputtedType = $(".dogcat").val();
    var inputtedBreed = $("#breed").val();

    if (inputtedType === "dog") {
      var imageType = "img/dog.png";
    } else {
      var imageType = "img/cat.png";
    }

    var newAdoptee = new Adoptee(inputtedName, inputtedType, inputtedBreed);

    $("#animals").append("<div class='animal'>" +
                          "<img src='" + imageType +
                          "' alt='generic animal logo'>" +
                          "<h4>" + newAdoptee.name + "</h4>" +
                          "<p>Breed: <span class='animal-breed'>" +
                          newAdoptee.breed + "</span></p>" +
                          "<p>Status: <span class='animal-breed'>" +
                          newAdoptee.status + "</span></p>" +
                          "<button type='button' name='adopt' " +
                          "class='btn btn-success'>Adopt</button>" +
                          "</div>");

    $("input#nickname").text("");
    $("input#breed").text("");

  });
});
