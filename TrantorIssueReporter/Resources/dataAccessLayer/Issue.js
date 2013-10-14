exports.getAllIssues = function(callback) {
    Alloy.Globals.progressBar.openIndicator("Please wait");
    var xhr = Titanium.Network.createHTTPClient({
        ondatastream: function(e) {
            Alloy.Globals.progressBar.setValue(Math.round(100 * e.progress));
        },
        onload: function() {
            var responseData = JSON.parse(this.responseText);
            callback(responseData);
            Alloy.Globals.progressBar.closeIndicator();
        },
        onerror: function() {
            Alloy.Globals.progressBar.closeIndicator();
            var errorAlert = Titanium.UI.createAlertDialog({
                title: "Connection Error",
                message: "A problem has occured. Please make sure you have internet access and try again.",
                buttonNames: [ "OK" ]
            });
            errorAlert.show();
        }
    });
    var url = 'https://api.parse.com/1/classes/Issues?where={"isDeleted":false}';
    xhr.open("GET", url);
    xhr.setRequestHeader("X-Parse-Application-Id", "VpoxE6VBC7eT7LIJpEswgF7SLNqHPbPtOt5gih6V");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "ewyhKvinwvAgrcygZnIggvfYqTghg2qQg63L8GzS");
    xhr.send();
};

exports.deleteIssue = function(issueId, callback) {
    Alloy.Globals.progressBar.openIndicator("Deleting Issue, Please wait");
    var xhr = Titanium.Network.createHTTPClient({
        ondatastream: function(e) {
            Alloy.Globals.progressBar.setValue(Math.round(100 * e.progress));
        },
        onload: function() {
            var responseData = JSON.parse(this.responseText);
            callback(responseData);
            Alloy.Globals.progressBar.closeIndicator();
        },
        onerror: function() {
            Alloy.Globals.progressBar.closeIndicator();
            var errorAlert = Titanium.UI.createAlertDialog({
                title: "Connection Error",
                message: "A problem has occured. Please make sure you have internet access and try again.",
                buttonNames: [ "OK" ]
            });
            errorAlert.show();
        }
    });
    var url = "https://api.parse.com/1/classes/Issues/" + issueId;
    xhr.open("PUT", url);
    xhr.setRequestHeader("X-Parse-Application-Id", "VpoxE6VBC7eT7LIJpEswgF7SLNqHPbPtOt5gih6V");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "ewyhKvinwvAgrcygZnIggvfYqTghg2qQg63L8GzS");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send('{"isDeleted":true}');
};

exports.addNewIssue = function(data) {
    Alloy.Globals.progressBar.openIndicator("Submitting Issue");
    var xhr = Titanium.Network.createHTTPClient({
        ondatastream: function(e) {
            Alloy.Globals.progressBar.setValue(Math.round(100 * e.progress));
        },
        onload: function() {
            JSON.parse(this.responseText);
            Alloy.Globals.progressBar.closeIndicator();
            var errorAlert = Titanium.UI.createAlertDialog({
                title: "Issue Submitted successfully ",
                message: "Issue Submitted Successfully, You can see the same issue listed under All Issues Tab",
                buttonNames: [ "OK" ]
            });
            errorAlert.show();
        },
        onerror: function(e) {
            Ti.API.info(JSON.stringify(e));
            var errorAlert = Titanium.UI.createAlertDialog({
                title: "Connection Error",
                message: "A problem has occured. Please make sure you have internet access and try again.",
                buttonNames: [ "OK" ]
            });
            errorAlert.show();
            Alloy.Globals.progressBar.closeIndicator();
        }
    });
    var url = "https://api.parse.com/1/classes/Issues/";
    xhr.open("POST", url);
    xhr.setRequestHeader("X-Parse-Application-Id", "VpoxE6VBC7eT7LIJpEswgF7SLNqHPbPtOt5gih6V");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "ewyhKvinwvAgrcygZnIggvfYqTghg2qQg63L8GzS");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
};

exports.updateStatusForIssue = function(data, issueId) {
    Alloy.Globals.progressBar.openIndicator("Updating Issue");
    var xhr = Titanium.Network.createHTTPClient({
        onload: function() {
            Alloy.Globals.progressBar.closeIndicator();
            var errorAlert = Titanium.UI.createAlertDialog({
                title: "Update Success ",
                message: "Issue has been updated successfully.",
                buttonNames: [ "OK" ]
            });
            errorAlert.show();
        },
        onerror: function(e) {
            Ti.API.info(JSON.stringify(e));
            var errorAlert = Titanium.UI.createAlertDialog({
                title: "Connection Error",
                message: "A problem has occured. Please make sure you have internet access and try again.",
                buttonNames: [ "OK" ]
            });
            errorAlert.show();
            Alloy.Globals.progressBar.closeIndicator();
        }
    });
    var url = "https://api.parse.com/1/classes/Issues/" + issueId;
    xhr.open("PUT", url);
    xhr.setRequestHeader("X-Parse-Application-Id", "VpoxE6VBC7eT7LIJpEswgF7SLNqHPbPtOt5gih6V");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "ewyhKvinwvAgrcygZnIggvfYqTghg2qQg63L8GzS");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
};