// Hide navigation menu after button click
$('.navbar-nav>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
});

// Fix navbar button highlighting
$(".nav-item").on("click", function(){
      $(".nav-item").removeClass("active");
      $(this).addClass("active");
 });

 // Domu buttons click action (scroll to link)
 $("#domuButton1").on("click", function(){
      document.getElementById("tesarstvi").scrollIntoView();
      console.log("Test");
 });
 $("#domuButton2").on("click", function(){
      document.getElementById("truhlarstvi").scrollIntoView();
      console.log("Test");
 });
 $("#domuButton3").on("click", function(){
      document.getElementById("vyskovePrace").scrollIntoView();
      console.log("Test");
 });
 $("#domuButton4").on("click", function(){
      document.getElementById("potapecskePrace").scrollIntoView();
      console.log("Test");
 });

 // Email form submission with Ajax
$("#emailForm").on("submit", function(e) {
   e.preventDefault(); // avoid to execute the actual submit of the form.

   $.ajax({
      url: "https://formsubmit.co/ajax/tomas-martinek@email.cz",
      method: "POST",
      data: {
         Jméno: $(this).find('input[name=name]').val(),
         Email: $(this).find('input[name=email]').val(),
         Zpráva: $(this).find('input[name=message]').val(),
         _honey: $(this).find('input[name=_honey]').val(),
         _subject: "Zpráva z webu!",
         _template: "box",
      },
      dataType: "json",
      success: function(e) {
         alert("Email úspešně odeslán!");
      },
      error: function(e) {
         alert("Nastal problém, email se nepodařilo odeslat.");
      }
  });
});