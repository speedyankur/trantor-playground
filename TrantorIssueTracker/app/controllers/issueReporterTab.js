var currentSelctedDateField;

function showPickerView(e) {

	currentSelctedDateField = e.source.name;
	if (OS_IOS)
		$.pickerView.animate(slide_in);
	else {
		$.picker.showDatePickerDialog({
			value : new Date(),
			callback : function(e) {
				if (e.cancel) {
					Ti.API.info('User canceled dialog');
				} else {
					Ti.API.info('User selected date: ' + e.value);
					var selectedDateValue = e.value.toDateString();

					switch (currentSelctedDateField) {

						case "DATE_IDENTIFIED":
							$.dateIdentified.text = selectedDateValue;
							break;
						case "DATE_RESOLVED":
							$.dateResolved.text = selectedDateValue;
							break;

					}
				}
			}
		});
	}
}

function hidePickerView(e) {
	if (OS_IOS)
		$.pickerView.animate(slide_out);
	var selectedDateValue = $.picker.value.toDateString();
	Ti.API.info("picker value string=" + selectedDateValue)
	Ti.API.info("picker value iso=" + $.picker.value.toISOString())
	switch (currentSelctedDateField) {

		case "DATE_IDENTIFIED":
			$.dateIdentified.text = selectedDateValue;
			$.dateIdentified.data = $.picker.value.toISOString();
			break;
		case "DATE_RESOLVED":
			$.dateResolved.text = selectedDateValue;
			$.dateResolved.data = $.picker.value.toISOString();
			break;

	}
}




	

function showStatusPickerDialog(){
	var statusPickerDialog = Titanium.UI.createOptionDialog({
		options : ['OPEN', 'CLOSE','IN-PROGRESS'],
		title : 'Please Select Status Level'
	});
	statusPickerDialog.addEventListener('click', function(e) {
		$.statusField.text = e.source.options[e.index];
	});	
	statusPickerDialog.show();	
}


function showSeverityPickerDialog(){
	var severityPickerDialog = Titanium.UI.createOptionDialog({
		options : ['HIGH', 'MEDIUM','LOW'],
		title : 'Please Select Severity Level'
	});
	severityPickerDialog.addEventListener('click', function(e) {
		$.severityField.text = e.source.options[e.index];
	});	
	severityPickerDialog.show();	
}

var slide_in = Titanium.UI.createAnimation({
	bottom : "-50"
});
var slide_out = Titanium.UI.createAnimation({
	bottom : "-250"
});

function submit() {
	if($.projectField.value == "")
	{
		alert("Enter Project Name");
		$.projectField.focus();
		return;
	}
	if($.descriptionField.value == "")
	{
		alert("Enter Description");
		$.descriptionField.focus();
		return;
	}
	if($.severityField.value == "")
	{
		alert("Enter Severity");
		$.severityField.focus();
		return;
	}	
	var data = {
		"project" : $.projectField.value,
		"Description" : $.descriptionField.value,
		status : $.statusField.text,
		severity : $.severityField.text,
		mitigationPlan : $.mitigationField.value,
		comments : $.commentsField.value
	};
	if ($.dateIdentified.data)
		data["dateIdentified"] = {
			"__type" : "Date",
			"iso" : $.dateIdentified.data
		}

	if ($.dateResolved.data)
		data["dateResolved"] = {
			"__type" : "Date",
			"iso" : $.dateResolved.data
		}

	Ti.API.info("data--" + JSON.stringify(data));
	var dataToPost = JSON.parse(JSON.stringify(data));
	Ti.API.info("data--" + dataToPost);
	Alloy.Globals.dataAccesslayer.addNewIssue(JSON.stringify(data));

}
