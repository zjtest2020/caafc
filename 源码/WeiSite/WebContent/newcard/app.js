define([ '../../newcard/model', '../../newcard/app_view' ], function(Model,
		View) {

	var controller = function(id) {
		$.loading();
		var model = new Model();
		model.set("productCode", id);
		controller.currentView && controller.currentView.undelegateEvents();// 销毁所有监听

		var view = new View({// 将model给view
			model : model
		});

		view.render(); // 利用Model定义的默认属性初始化界面
		controller.currentView = view;

		controller.onRouteChange = function() {
			// console.log('change'); // 可以做一些销毁工作，例如view.undelegateEvents()
			view.undelegateEvents();// 销毁所有监听
		};

	}
	return controller;
});