function onOpen() {
	if (OS_ANDROID) {
		var activity = $.detailWindow.activity;

		if (Alloy.Globals.Android.Api >= 11) {
			activity.actionBar.title = "Detail view";
			// activity.actionBar.displayHomeAsUp = true;
			activity.actionBar.onHomeIconItemSelected = function() {
				Ti.API.info("back Clicked");
				$.detailWindow.close();
			};
		}
	}

}

var args = arguments[0] || {};
$.projectNameField.text = args.project;

$.issueDescriptionField.text = args.Description;

$.dateIdentifiedField.text = (new Date(args.dateIdentified.iso)).toDateString();

$.dateResolvedField.text = (new Date(args.dateResolved.iso)).toDateString();

$.statusField.text =args.status;

$.severityField.text =args.severity;

$.mitigationField.text =args.mitigationPlan;

$.commentsField.text=args.comments;

