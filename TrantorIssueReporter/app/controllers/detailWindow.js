var args = arguments[0] || {};
$.projectNameField.text = args.project;
$.issueDescriptionField.text = args.Description;
$.dateIdentifiedField.text = args.dateIdentified ? (new Date(
		args.dateIdentified.iso)).toDateString() : "";
$.dateResolvedField.text = args.dateResolved ? (new Date(args.dateResolved.iso))
		.toDateString()
		: "";
$.severityField.text = args.severity;
$.mitigationField.text = args.mitigationPlan;
$.commentsField.text = args.comments;
var status = args.status ? args.status.toLowerCase() : "open";
function updateButtonbar(status) {
	switch (status) {
	case "open":
		$.addClass($.openBtn, "activeState");
		$.removeClass($.progressBtn, "activeState");
		$.removeClass($.closeBtn, "activeState");
		break;
	case "in-progress":
		$.removeClass($.openBtn, "activeState");
		$.addClass($.progressBtn, "activeState");
		$.removeClass($.closeBtn, "activeState");
		break;
	case "close":
		$.removeClass($.openBtn, "activeState");
		$.removeClass($.progressBtn, "activeState");
		$.addClass($.closeBtn, "activeState");
		break;
	}
}
function statusButtonClicked(e) {

	var data = {
		"status" : e.source.name
	};
	if (e.source.name == "close")
		data["closedBy"] = Alloy.Globals.loggedInUser.username;

	Alloy.Globals.dataAccesslayer.updateStatusForIssue(JSON.stringify(data),args.objectId,function(status){
		if(status){
			args.callback(e.source.name);
			Alloy.createWidget('toasty', {
				title : 'Success',
				message : 'Issue status has been updated successfully',
				type : 'confirm'
			}).show();
		}
	});

	updateButtonbar(e.source.name);

}

updateButtonbar(status);




/*
 * Hide nav bar for android
 */
if(OS_ANDROID)
	$.detailWindow.navBarHidden=true;