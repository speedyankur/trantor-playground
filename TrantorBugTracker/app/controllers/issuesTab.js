var data = [];

$.tableView.addEventListener('click', function(e) {
	var issueDetails = e.row.issueDetails;
	var detailWindow = Alloy.createController('detailWindow', issueDetails)
			.getView();
	$.issuesTab.open(detailWindow, {
		animated : true
	});
});
function refreshIssues() {
	data = [];
	Alloy.Globals.dataAccesslayer.getAllIssues(function(response) {
		if (response) {
			if (response.results.length > 0) {
				for ( var i = 0; i < response.results.length; i++) {
					var args = {};
					args.title = response.results[i].Description;
					var severity = response.results[i].severity.toLowerCase();
					switch (severity) {
					case "high":
						args.leftImage = "/images/busy-icon.png";
						break;
					case "medium":
						args.leftImage = "/images/green-icon.png";
						break;
					case "low":
						args.leftImage = "/images/warning-icon.png";
						break;

					}
					Ti.API.info(response.results[i].severity + "--"
							+ args.leftImage)
					var issueRow = Alloy.createController('issueRow', args)
							.getView();
					issueRow.issueDetails = response.results[i];
					data.push(issueRow);
				}
			} else {
				var args = {};
				args.title = "No Issues Found";
				args.leftImage = "none";
				var issueRow = Alloy.createController('issueRow', args)
						.getView();
				data.push(issueRow);

			}

		}
		$.tableView.setData(data);
	});
}

refreshIssues();

if (OS_ANDROID) {

	var activity = $.issuesWindow.activity;
	activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;
		var menuItem1 = menu.add({
			title : "Refresh"
		});
		menuItem1.addEventListener('click', function() {
			refreshIssues();
		});
	}
} else {
	var refershButton = Titanium.UI.createButton({
		title : "Refersh"
	});
	$.issuesWindow.setRightNavButton(refershButton);
	refershButton.addEventListener("click", function() {
		refreshIssues();
	});
}

// runtime unit tests
/*
 * if (!ENV_PROD) { require('specs/issuesTab')($); }
 */
