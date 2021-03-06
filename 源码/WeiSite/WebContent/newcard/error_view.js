define([ 'text!../newcard/error_tpl.html', "iscroll" ], function(tpl,
		iscroll) {
	var scroll;

	var indexView = Backbone.View.extend({
		el : '#container',

		events : {

		},

		initialize : function(param) {
			// console.log(param);

		},

		template : _.template(tpl),
		render : function() {
			var $tpl = $(this.template());
			this.$el.html($tpl);
			// animInfinite
			// q启动滚动条
			scroll = new IScroll('#new_step2', {
				fadeScrollbars : false,
				click : true
			// 允许点击
			});
			$(window).trigger('resize');
			document.addEventListener('touchmove', function(e) {
				e.preventDefault();
			}, false);
			$.loadclose();
		}

	});

	return indexView;
});