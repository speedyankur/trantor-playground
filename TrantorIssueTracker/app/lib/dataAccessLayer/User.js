exports.login = function(username, password, callback) {

	Alloy.Globals.progressBar.openIndicator("Please wait");
	var xhr = Titanium.Network
			.createHTTPClient({
				ondatastream : function(e) {

				},
				onload : function(e) {

					Alloy.Globals.progressBar.closeIndicator();
					callback(e.success);

				},
				onerror : function(e) {
					// Display error message
					// /alert(JSON.stringify(e))
					if (!e.success) {
						Alloy.Globals.progressBar.closeIndicator();
						var errorAlert = Titanium.UI.createAlertDialog({
							title : 'Login failed',
							message : 'Please check your username/password.',
							buttonNames : [ 'OK' ]
						});
						errorAlert.show();
					} else {
						Alloy.Globals.progressBar.closeIndicator();
						var errorAlert = Titanium.UI
								.createAlertDialog({
									title : 'Connection Error',
									message : 'A problem has occured. Please make sure you have internet access and try again.',
									buttonNames : [ 'OK' ]
								});
						errorAlert.show();
					}

				}
			});
	var url = "https://api.parse.com/1/login?username=" + username
			+ "&password=" + password;
	xhr.open('GET', url);
	xhr.setRequestHeader('X-Parse-Application-Id',
			'VpoxE6VBC7eT7LIJpEswgF7SLNqHPbPtOt5gih6V');
	xhr.setRequestHeader('X-Parse-REST-API-Key',
			'ewyhKvinwvAgrcygZnIggvfYqTghg2qQg63L8GzS');
	xhr.send();

};