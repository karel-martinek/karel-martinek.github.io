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
