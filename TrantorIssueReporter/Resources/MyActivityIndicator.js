function MyActivityIndicator(args) {
    var args = args || {};
    args.top || 140;
    {
        args.text || "Loading ...";
    }
    var self;
    self = args.infiniteLoading ? Ti.UI.Android.createProgressIndicator({
        message: "Loading...",
        location: Ti.UI.Android.PROGRESS_INDICATOR_DIALOG,
        type: Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT
    }) : Ti.UI.Android.createProgressIndicator({
        message: "Loading...",
        location: Ti.UI.Android.PROGRESS_INDICATOR_DIALOG,
        type: Ti.UI.Android.PROGRESS_INDICATOR_DETERMINANT,
        min: 0,
        max: 100
    });
    self.openIndicator = function(message) {
        self.show();
        self.message = message;
    };
    self.setMessage = function(message) {
        self.message = message;
    };
    self.setValue = function(value) {
        self.value = value;
    };
    self.closeIndicator = function() {
        self.hide();
    };
    return self;
}

module.exports = MyActivityIndicator;