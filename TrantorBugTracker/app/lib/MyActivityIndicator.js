/**
 * Indicator Indicator with a spinner and a label
 * 
 * @param {Object}
 *            args
 */
function MyActivityIndicator(args) {
	var width = 180, height = 50;

	var args = args || {};
	var top = args.top || 140;
	var text = args.text || 'Loading ...';
	var self, view, activityIndicator, label;

	if (OS_ANDROID) {
		if (args.infiniteLoading) {

			self = Ti.UI.Android.createProgressIndicator({
				message : 'Loading...',
				location : Ti.UI.Android.PROGRESS_INDICATOR_DIALOG, // display
																	// in dialog
				type : Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT
			// display a spinner
			});

		} else {
			self = Ti.UI.Android.createProgressIndicator({
				message : 'Loading...',
				location : Ti.UI.Android.PROGRESS_INDICATOR_DIALOG, // display
																	// in dialog
				type : Ti.UI.Android.PROGRESS_INDICATOR_DETERMINANT, // display
																		// a
																		// spinner
				min : 0,
				max : 100
			});
		}

	} else {

		self = Titanium.UI.createWindow({
			height : height,
			width : width,
			top : top,
			borderRadius : 10,
			touchEnabled : false,
			backgroundColor : '#000',
			opacity : 0.6
		});

		view = Ti.UI.createView({
			width : Ti.UI.SIZE,
			height : Ti.UI.FILL,
			center : {
				x : (width / 2),
				y : (height / 2)
			},
			layout : 'horizontal'
		});

		activityIndicator = Ti.UI.createActivityIndicator({
			style : Ti.UI.iPhone.ActivityIndicatorStyle.PLAIN,
			left : 0,
			height : Ti.UI.FILL,
			width : 30
		});

		label = Titanium.UI.createLabel({
			left : 10,
			width : Ti.UI.FILL,
			height : Ti.UI.FILL,
			text : text,
			color : '#fff',
			font : {
				fontFamily : 'Helvetica Neue',
				fontSize : 16,
				fontWeight : 'bold'
			}
		});

		view.add(activityIndicator);
		view.add(label);
		self.add(view);
		// self.open();
		self.hide();

	}

	self.openIndicator = function(message) {

		if (OS_ANDROID) {
			self.show();
			self.message = message;
		} else {
			label.text = message;
			activityIndicator.show();
			self.show();

		}
	}
	self.setMessage = function(message) {
		if (OS_ANDROID) {
			self.message = message;
		} else {
			label.text = message;
		}
	}
	self.setValue = function(value) {
		if (OS_ANDROID) {
			self.value = value;
		}

	}

	self.closeIndicator = function() {

		if (OS_ANDROID) {
			self.hide();
		} else {
			activityIndicator.hide();
			self.hide();
		}

	}

	return self;
}

// Public interface
module.exports = MyActivityIndicator;
