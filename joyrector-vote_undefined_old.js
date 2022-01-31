
comment_vote/add


	/comment_vote/add/16302330/minus?token=48029e7f69226180ac5db91940f6164e
	
	/post_vote/add/3514600/minus?token=48029e7f69226180ac5db91940f6164e&abyss=0
	
	
	
jQuery(document).ready(function () {
    jQuery(".postContainer div.vote-plus, .postContainer div.vote-minus").click(function() {
        var id = jQuery(this).closest(".postContainer").attr("id").substr(13);
		jQuery(document).bind("ajaxComplete", function(e, xhr, settings){
			if(settings.url.match(/^\/post_vote\/add\/(.*)$/)){
				var data=xhr.responseText;
				jQuery('#postContainer'+id+' .post_rating').not('.post_comment_list .post_rating').html(data);
			}
		});
    });
	jQuery(".comment div.vote-plus, .comment div.vote-minus").click(function() {
		var comment_id = jQuery(this).closest(".comment").attr("id").substr(7);
		console.log(jQuery(this).closest(".comment").attr("id").substr(7));
		jQuery(document).bind("ajaxComplete", function(e, xhr, settings){
			if(settings.url.match(/^\/comment_vote\/add\/(.*)$/)){
				var data=xhr.responseText;
				//N33D fix wrong commentID
				jQuery('#comment'+comment_id+' span.comment_rating').html(data);
				//3ND fix
			}
		});
	});
});

/* TEST AREA */
jQuery(".comment div.vote-plus, .comment div.vote-minus").click(function() {
	
	console.log('cooment rating changed');
	console.log(jQuery(this).closest(".comment").attr("id"));
	console.log(jQuery(this).closest(".comment").attr("id").substr(7));

	});
	
	
	
	
	
	jQuery('#comment16302075 span.comment_rating') comment_rating