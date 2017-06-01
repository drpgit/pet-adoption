// Back-end code goes here

function Adoptee(name, type, breed) {
  this.name = name;
  this.type = type;
  this.breed = breed;
  this.status = "Available";
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
                          "<p>Status: <span class='animal-status'>" +
                          newAdoptee.status + "</span></p>" +
                          "<button type='button' name='adopt' " +
                          "class='btn btn-success adopt'>Adopt</button>" +
                          "</div>");

    $("input#nickname").text("");
    $("input#breed").text("");

    $("button.adopt").last().click(function() {
      newAdoptee.status = "Adopted";
      $(".animal-status").text(newAdoptee.status);
      $(this).addClass("disabled");
      $(this).removeClass("btn-success");
      $(this).parent().addClass("adopted");
      $(this).parent().removeClass("available");
    });
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
