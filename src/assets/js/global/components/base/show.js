jQuery(document).ready(function() {
	// Configure/customize these variables.
	var showChar = 100;  // How many characters are shown by default
	var ellipsestext = "...";
	var moretext = "المزيد >";
	var lesstext = "< عرض أقل";
	

	jQuery('.table .pj.more').each(function() {
		var content = $(this).html();
 
		if(content.length > showChar) {
 
			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);
 
			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
			jQuery(this).html(html);
		}
 
	});
 
	jQuery(".morelink").click(function(){
		if($(this).hasClass("less")) {
			jQuery(this).removeClass("less");
			jQuery(this).html(moretext);
		} else {
			jQuery(this).addClass("less");
			jQuery(this).html(lesstext);
		}
		jQuery(this).parent().prev().toggle();
		jQuery(this).prev().toggle();
		return false;
	});
})jQuery;