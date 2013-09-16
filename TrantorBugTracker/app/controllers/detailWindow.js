function onOpen() {
	if (OS_ANDROID) {
		var activity = $.detailWindow.activity;

		if (Alloy.Globals.Android.Api >= 11) {
			activity.actionBar.title = "Detail view";
			//activity.actionBar.displayHomeAsUp = true;
			activity.actionBar.onHomeIconItemSelected = function() {
				Ti.API.info("back Clicked");
				$.detailWindow.close();
			};
		}
	}

}
