exports.getAllIssues = function(callback) {

	Alloy.Globals.progressBar.openIndicator("Please wait");
	var xhr = Titanium.Network.createHTTPClient({
		ondatastream : function(e) {
			Alloy.Globals.progressBar.setValue((Math.round(e.progress * 100)));
		},
		onload : function(e) {
			var responseData = JSON.parse(this.responseText);
			callback(responseData);
			Alloy.Globals.progressBar.closeIndicator();

		},
		onerror : function(e) {
			// Display error message
			Alloy.Globals.progressBar.closeIndicator();
			var errorAlert = Titanium.UI.createAlertDialog({
				title : 'Connection Error',
				message : 'A problem has occured. Please make sure you have internet access and try again.',
				buttonNames : ['OK']
			});
			errorAlert.show();
			

		}
	});
	var url = "https://api.parse.com/1/classes/Issues?"+'where={"isDeleted":false}';
	xhr.open('GET', url);
	xhr.setRequestHeader('X-Parse-Application-Id', 'VpoxE6VBC7eT7LIJpEswgF7SLNqHPbPtOt5gih6V');
	xhr.setRequestHeader('X-Parse-REST-API-Key', 'ewyhKvinwvAgrcygZnIggvfYqTghg2qQg63L8GzS');
	xhr.send();

};
exports.deleteIssue = function(issueId,callback) {

	Alloy.Globals.progressBar.openIndicator("Deleting Issue, Please wait");
	var xhr = Titanium.Network.createHTTPClient({
		ondatastream : function(e) {
			Alloy.Globals.progressBar.setValue((Math.round(e.progress * 100)));
		},
		onload : function(e) {
			var responseData = JSON.parse(this.responseText);
			callback(responseData);
			Alloy.Globals.progressBar.closeIndicator();

		},
		onerror : function(e) {
			// Display error message
			Alloy.Globals.progressBar.closeIndicator();
			var errorAlert = Titanium.UI.createAlertDialog({
				title : 'Connection Error',
				message : 'A problem has occured. Please make sure you have internet access and try again.',
				buttonNames : ['OK']
			});
			errorAlert.show();
			

		}
	});
	var url = "https://api.parse.com/1/classes/Issues/"+issueId;
	xhr.open('PUT', url);
	xhr.setRequestHeader('X-Parse-Application-Id', 'VpoxE6VBC7eT7LIJpEswgF7SLNqHPbPtOt5gih6V');
	xhr.setRequestHeader('X-Parse-REST-API-Key', 'ewyhKvinwvAgrcygZnIggvfYqTghg2qQg63L8GzS');
	xhr.setRequestHeader('Content-Type', 'application/json');	
	xhr.send('{"isDeleted":true}');

};

exports.addNewIssue = function(data,callback) {
	
	Alloy.Globals.progressBar.openIndicator("Submitting Issue");
	var xhr = Titanium.Network.createHTTPClient({
		ondatastream : function(e) {
			Alloy.Globals.progressBar.setValue((Math.round(e.progress * 100)));
		},
		onload : function(e) {
			var responseData = JSON.parse(this.responseText);
			Alloy.Globals.progressBar.closeIndicator();
			callback(true);

		},
		onerror : function(e) {
			// Display error message
			Ti.API.info(JSON.stringify(e));
			var errorAlert = Titanium.UI.createAlertDialog({
				title : 'Connection Error',
				message : 'A problem has occured. Please make sure you have internet access and try again.',
				buttonNames : ['OK']
			});
			errorAlert.show();
			Alloy.Globals.progressBar.closeIndicator();

		}
	});
	var url = "https://api.parse.com/1/classes/Issues/";
	xhr.open('POST', url);
	xhr.setRequestHeader('X-Parse-Application-Id', 'VpoxE6VBC7eT7LIJpEswgF7SLNqHPbPtOt5gih6V');
	xhr.setRequestHeader('X-Parse-REST-API-Key', 'ewyhKvinwvAgrcygZnIggvfYqTghg2qQg63L8GzS');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(data);

}; 
exports.updateStatusForIssue = function(data,issueId,callback) {
	Alloy.Globals.progressBar.openIndicator("Updating Issue");
	var xhr = Titanium.Network.createHTTPClient({
		onload : function(e) {
			Alloy.Globals.progressBar.closeIndicator();
			callback(true);
			

		},
		onerror : function(e) {
			// Display error message
			Ti.API.info(JSON.stringify(e));
			var errorAlert = Titanium.UI.createAlertDialog({
				title : 'Connection Error',
				message : 'A problem has occured. Please make sure you have internet access and try again.',
				buttonNames : ['OK']
			});
			errorAlert.show();
			Alloy.Globals.progressBar.closeIndicator();
			callback(false);
			

		}
	});
	var url = "https://api.parse.com/1/classes/Issues/"+issueId;
	xhr.open('PUT', url);
	xhr.setRequestHeader('X-Parse-Application-Id', 'VpoxE6VBC7eT7LIJpEswgF7SLNqHPbPtOt5gih6V');
	xhr.setRequestHeader('X-Parse-REST-API-Key', 'ewyhKvinwvAgrcygZnIggvfYqTghg2qQg63L8GzS');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(data);

}; 
