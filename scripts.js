// Hide navigation menu after button click
$('.navbar-nav>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// Fix navbar button highlighting
$(".nav-item").on("click", function(){
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
 });