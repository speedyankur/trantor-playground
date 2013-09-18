exports.getAllIssues = function(callback) {

	Alloy.Globals.progressBar.openIndicator("Please wait");
	var xhr = Titanium.Network
			.createHTTPClient({
				ondatastream : function(e) {
					Alloy.Globals.progressBar.setValue((Math
							.round(e.progress * 100)));
				},
				onload : function(e) {
					var responseData = JSON.parse(this.responseText);
					Ti.API.info("This is new responseText :"
							+ responseData.results.length + "------");
					callback(responseData);
					Alloy.Globals.progressBar.closeIndicator();

				},
				onerror : function(e) {
					// Display error message
					var errorAlert = Titanium.UI
							.createAlertDialog({
								title : 'Connection Error',
								message : 'A problem has occured. Please make sure you have internet access and try again.',
								buttonNames : [ 'OK' ],
								cancel : 1
							});
					errorAlert.show();
					Alloy.Globals.progressBar.closeIndicator();

				}
			});
	var url = "https://api.parse.com/1/classes/Issues/";
	xhr.open('GET', url);
	xhr.setRequestHeader('X-Parse-Application-Id',
			'VpoxE6VBC7eT7LIJpEswgF7SLNqHPbPtOt5gih6V');
	xhr.setRequestHeader('X-Parse-REST-API-Key',
			'ewyhKvinwvAgrcygZnIggvfYqTghg2qQg63L8GzS');
	xhr.send();

};