$("a[href^=#]").click(function(e) {
    e.preventDefault();
    var dest = $(this).attr('href');
    console.log(dest);
    $('html,body').animate({
        scrollTop: $(dest).offset().top
    }, 'slow');
});

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});



//Smooth scrolling with links
$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

// Smooth scrolling when the document is loaded and ready
$(document).ready(function(){
	$('html,body').animate({scrollTop:$(location.hash).offset().‌​top}, 500);
});