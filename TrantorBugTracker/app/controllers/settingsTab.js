$.sortField.text = Ti.App.Properties.getString('filter') ? Ti.App.Properties.getString('filter') : "";

function showFiterPicker() {
	var statusPickerDialog=Titanium.UI.createOptionDialog({
		options:['PROJECT','DESCRIPTION','DATE-IDENTIFIED'],
		title:'Please Select your Filter'
	});
	statusPickerDialog.addEventListener('click', function(e) {
		$.sortField.text=e.source.options[e.index];
	});
	statusPickerDialog.show();
}


function saveSettings() {
	Ti.App.Properties.setString('filter',$.sortField.text);
	alert("Settings Saved");
}
