console.time("Время выполнения: ");
jQuery.noConflict();
jQuery(function() {
	var em = jQuery('em').length;
	var strong = jQuery('strong').length;
	var mini = jQuery('#ads').length;
	var can = jQuery('link[rel="canonical"]').attr("href");
	var next = jQuery('link[rel="next"]').attr("href");
	var prev = jQuery('link[rel="prev"]').attr("href");
	var rob = jQuery('meta[name="robots"]').attr("content");
	var mdesc = jQuery('meta[name="description"]').attr("content");
	var mkeyw = jQuery('meta[name="keywords"]').attr("content");
	var title = jQuery('title').text();
//if(mini == 1){
	console.log('jQuery ver. ' + jQuery.fn.jquery);
	
	console.group("Инфо");
		if(em>0){console.warn('Найдено: '+em+' < em >');}
		if(strong>0){console.warn('Найдено: '+strong+' < strong >');}
		console.info('Canonical url: '+can+' ');
		console.info('Next url: '+next+' ');
		console.info('Prev url: '+prev+' ');
		console.info('Robots: '+rob+' ');
		console.info('Title: '+title+' ');
		console.info('Desc: '+mdesc+' ');
		console.info('Keyw: '+mkeyw+' ');
	console.groupEnd();
//}
});
console.timeEnd("Время выполнения: ");