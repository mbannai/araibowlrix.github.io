$(function() {
	$(".hpb-trigger-o").css("cursor","pointer");
	$('.hpb-trigger-o').click(function() {
		var elements = getTargetElements(this);
		for(i = 0; i < elements.length; i++){
			var element = jQuery(elements[i]);
			if (element.is(':hidden')) {		
				element.slideDown();
			}
			else {
				element.slideUp();	
			}
		};
	});

	$(".hpb-trigger").each(function(){
		var elements = getTargetElements(this);
		for(i = 0; i < elements.length; i++){
			jQuery(elements[i]).css("display","none");	
		};
	});
	$(".hpb-trigger").css("cursor","pointer");
	$('.hpb-trigger').click(function() {
		var elements = getTargetElements(this);
		for(i = 0; i < elements.length; i++){
			var element = jQuery(elements[i]);
			if (element.is(':hidden')) {		
				element.slideDown();
			}
			else {
				element.slideUp();	
			}
		};
	});

	function getTargetElements(trigger){
		var elements = new Array();
		var tagH = trigger.tagName;
		var tagList = new Array();
		if(tagH.match(/^(h|H)[1-6]$/)){
			var level = parseInt(tagH.charAt(1));
			if(level != NaN)
			{
				for(i=0; i<level; i++){
					tagList[i] = eval(i+1);
				}	 
			}
		} else{
			return;
		}
		var j = 0;
		var bEnd = 0;
		$(jQuery(trigger)).nextAll().each(function() {
			for (i = 0; i < tagList.length; i++) {
				var re = new RegExp('^(h|H)' + tagList[i] + '$');
 				if(this.tagName.match(re)){
					bEnd = 1;
					return elements;	
				}
			}
			if(bEnd == 1){
				return elements;
			}
			elements[j] = this;
			j += 1;
		});	
		return elements;	
	};
});