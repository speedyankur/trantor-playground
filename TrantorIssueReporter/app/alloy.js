if( OS_ANDROID ) {
    Alloy.Globals.Android = { 
        "Api" : Ti.Platform.Android.API_LEVEL
    };
}

var MyActivityIndicator = require('MyActivityIndicator');
var progressBar = new MyActivityIndicator({infiniteLoading:true});
Alloy.Globals.progressBar = progressBar;



Alloy.Globals.dataAccesslayer = require('dataAccessLayer/Issue');
Alloy.Globals.User = require('dataAccessLayer/User');

Alloy.Globals.loggedInUser = {};