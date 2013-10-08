var args = arguments[0] || {};
$.projectNameField.text = args.project;

$.issueDescriptionField.text = args.Description;

$.dateIdentifiedField.text = args.dateIdentified ? (new Date(args.dateIdentified.iso)).toDateString() : "";

$.dateResolvedField.text = args.dateResolved ? (new Date(args.dateResolved.iso)).toDateString() : "";

$.statusField.text = args.status;

$.severityField.text = args.severity;

$.mitigationField.text = args.mitigationPlan;

$.commentsField.text = args.comments;



