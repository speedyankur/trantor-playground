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


if (OS_ANDROID) {

	var activity = $.settingsWindow.activity;
	activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;
		var menuItem1 = menu.add({
			title : "Logout"
		});
		menuItem1.addEventListener('click', function() {
			Alloy.Globals.tabGroup.close();
		});
	}
} else {
	var refershButton = Titanium.UI.createButton({
		title : "Logout"
	});
	$.settingsWindow.setRightNavButton(refershButton);
	refershButton.addEventListener("click", function() {
		Alloy.Globals.tabGroup.close();
	});
}