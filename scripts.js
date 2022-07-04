// Hide navigation menu after button click
$('.navbar-nav>a').on('click', function(){
     $('.navbar-collapse').collapse('hide');
});

 // Domu buttons click action (scroll to link)
 $(".domu-button").on("click", function(){
     document.getElementById($(this).attr("href")).scrollIntoView();
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