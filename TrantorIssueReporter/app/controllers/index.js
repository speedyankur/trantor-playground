$.loginWindow.open();
$.loginWindow.add(Alloy.Globals.progressBar);
function doLogin() {
	if ($.username.value == "") {
		Alloy.createWidget('toasty', {
			title : 'Alert',
			message : 'Please enter your username',
			type : 'alert'
		}).show();
		$.username.focus();
		return;
	}
	if ($.password.value == "") {
		Alloy.createWidget('toasty', {
			title : 'Alert',
			message : 'Please enter your password',
			type : 'alert'
		}).show();
		$.password.focus();
		return;
	}	
	Alloy.Globals.User.login($.username.value, $.password.value, function(
			status) {
		if (status) {
			var controller = Alloy.createController('allTabs');
			var win = controller.getView();
			win.open();
		} else {
			var errorAlert = Titanium.UI.createAlertDialog({
				title : 'Error',
				message : 'Some unknow error has occured.',
				buttonNames : [ 'OK' ]
			});
			errorAlert.show();
		}

	})

}
