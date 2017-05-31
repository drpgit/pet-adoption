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
      var extraClass = "dog";
    } else {
      var imageType = "img/cat.png";
      var extraClass = "cat";
    }

    var newAdoptee = new Adoptee(inputtedName, inputtedType, inputtedBreed);

    $("#animals").append("<div class='animal available " +
                          extraClass + "'>" +
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

  $(".animals-all").click(function() {
    $('.dog').css('display', 'inline');
    $('.adopted').css('display', 'inline');
    $('.available').css('display', 'inline');
    $('.cat').css('display', 'inline');
  })

  $(".animals-available").click(function() {
    $('.dog').css('display', 'inline');
    $('.available').css('display', 'inline');
    $('.cat').css('display', 'inline');
    $('.adopted').css('display', 'none');
  })

  $(".animals-adopted").click(function() {
    $('.dog').css('display', 'inline');
    $('.adopted').css('display', 'inline');
    $('.cat').css('display', 'inline');
    $('.available').css('display', 'none');
  })

  $(".animals-dogs").click(function() {
    $('.dog').css('display', 'inline');
    $('.adopted').css('display', 'inline');
    $('.available').css('display', 'inline');
    $('.cat').css('display', 'none');
  });

  $(".animals-cats").click(function() {
    $('.adopted').css('display', 'inline');
    $('.available').css('display', 'inline');
    $('.cat').css('display', 'inline');
    $('.dog').css('display', 'none');
  });
});
