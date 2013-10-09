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
	//alert("username--" + Alloy.Globals.loggedInUser.username);
	if (e.source.name == "close")
		data["closedBy"] = Alloy.Globals.loggedInUser.username;

	//alert("data--" + JSON.stringify(data)+"--objectId--"+args.objectId);
	Alloy.Globals.dataAccesslayer.updateStatusForIssue(JSON.stringify(data),args.objectId);

	updateButtonbar(e.source.name);

}

updateButtonbar(status);