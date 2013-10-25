var data = [];

$.tableView.addEventListener('click', function(e) {
	if(e.row.hasChild){
		var issueDetails = e.row.issueDetails;
		issueDetails.callback = function(status){
			var issueDetails = e.row.issueDetails; 
			issueDetails.status = status.toLowerCase();
			e.row.issueDetails = issueDetails;
		}
		var detailWindow = Alloy.createController('detailWindow', issueDetails).getView();
		$.issuesTab.open(detailWindow, {
			animated : true
		});		
	}

});

function onLongpress(eOuter) {
	var editDialog = Titanium.UI.createOptionDialog({
		options : ['Delete', 'Cancel'],
		cancel : 1,
		destructive : 0,
		title : 'Please Select Option'
	});
	editDialog.addEventListener('click', function(e) {

		if (e.index == 0) {
			var issueObjectId = eOuter.row.issueDetails.objectId;
			var rowId = eOuter.index;
			Alloy.Globals.dataAccesslayer.deleteIssue(issueObjectId, function(result) {
				$.tableView.deleteRow(rowId);
				Alloy.createWidget('toasty', {
					title : 'Success',
					message : 'Issue has been deleted successfully',
					type : 'confirm'
				}).show();
			})
		}
	});
	editDialog.show();
}

function refreshIssues(e) {
	data = [];
	Alloy.Globals.dataAccesslayer.getAllIssues(function(response) {
		if (response) {
			if (response.results.length > 0) {
				//Ti.API.info("before sorting--" + JSON.stringify(response.results));
				var sorter = Ti.App.Properties.getString('filter') ? Ti.App.Properties.getString('filter') : "";
				switch(sorter) {
					case "PROJECT":
						response.results = _.sortBy(response.results, function(issue) {
							return issue.project;
						})
						break;
					case "DESCRIPTION":
						response.results = _.sortBy(response.results, function(issue) {
							return issue.Description;
						})
						break;

					case "DATE-IDENTIFIED":
						response.results = _.sortBy(response.results, function(issue) {

							return issue.dateIdentified ? new Date(issue.dateIdentified.iso) : "";
						})
						break;
				}
				//Ti.API.info("after sorting--" + JSON.stringify(response.results));

				for (var i = 0; i < response.results.length; i++) {
					var args = {};
					args.title = response.results[i].Description;
					args.hasChild = true;
					var severity = response.results[i].severity ? response.results[i].severity.toLowerCase() : "";
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
					var issueRow = Alloy.createController('issueRow', args).getView();
					issueRow.issueDetails = response.results[i];
					data.push(issueRow);
				}
			} else {
				var args = {};
				args.title = "No Issues Found";
				args.leftImage = "none";
				args.hasChild = false;
				var issueRow = Alloy.createController('issueRow', args).getView();
				data.push(issueRow);

			}

		}
		$.tableView.setData(data);
		if (e && typeof (e.hide) === 'function') {
			e.hide();
		}
	});

}

exports.refreshIssues = refreshIssues;
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
