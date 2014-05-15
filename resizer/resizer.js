	
//RESIZER resize in height several children (by their selector) from a folk element
/*
* @param {children : selector of children}
* @returns {undefined}
*/
(function($){
	$.fn.resizer = function(param) {
	return this.each(function() {
		var el = [];
		var childs = param.childrens;
		var mobileWidth = param.mobile;
		if(!mobileWidth) mobileWidth = 768;
		var that = $(this);

		var init = function() {
			that.find(''+childs+'').each(function(){
				var child = $(this);
				el.push(child);
			});
			resizering();
		};
		var resizering = function() {
			if($(window).width() >= mobileWidth){
				var h = 0;
				for(var i in el){
					el[i].css('height', '');
					el[i].removeAttr('style');
					var curH = el[i].outerHeight();
					if(h < curH) h = curH;
				}
				for(var i in el){
					el[i].css('height', h);
				}
			} else {
				for(var i in el){
					el[i].css('height', '');
					el[i].removeAttr('style');
				}
			}
		};
		init();
		$(window).on('resize', resizering);
	});
	};
})(jQuery);

/*
$('SELECTOR').resizer({
	childrens : $('SELECTOR'),
	mobile : default 768
});
*/