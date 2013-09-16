var currentSelctedDateField;
function showPickerView(e) {
	if (OS_IOS)
		e.source.blur();
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
						$.dateIdentified.value = selectedDateValue;
						break;
					case "DATE_RESOLVED":
						$.dateResolved.value = selectedDateValue;
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
	Ti.API.info("picker value=" + selectedDateValue)
	switch (currentSelctedDateField) {

	case "DATE_IDENTIFIED":
		$.dateIdentified.value = selectedDateValue;
		break;
	case "DATE_RESOLVED":
		$.dateResolved.value = selectedDateValue;
		break;

	}
}

var slide_in = Titanium.UI.createAnimation({
	bottom : "-50"
});
var slide_out = Titanium.UI.createAnimation({
	bottom : "-250"
});