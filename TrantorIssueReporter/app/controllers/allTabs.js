$.tabGroup.add(Alloy.Globals.progressBar);
$.tabGroup.open();
Alloy.Globals.tabGroup = $.tabGroup;

var deviceToken;

var Cloud = require('ti.cloud');

Cloud.Users.login({
	login : 'push123',
	password : 'push123'
}, function(e) {
	if (e.success) {
		var user = e.users[0];
		//alert("Loggin successfully" + JSON.stringify(user));
		getDeviceToken();
	} else {
		//alert("Login Error :" + e.message);
	}
});

//getting device token
function getDeviceToken(){
    Titanium.Network.registerForPushNotifications({
        types: [
            Titanium.Network.NOTIFICATION_TYPE_BADGE,
            Titanium.Network.NOTIFICATION_TYPE_ALERT,
            Titanium.Network.NOTIFICATION_TYPE_SOUND
        ],
    success:function(e)
    {
        deviceToken = e.deviceToken;
        //alert("deviceToken = "+deviceToken);
        registerForPush();
    },
    error:function(e)
    {
        alert("Error: "+e.message);
    },
    callback:function(e)
    {
        //alert("push notification received"+JSON.stringify(e.data));
    }
    });
}


function registerForPush() {
	Cloud.PushNotifications.subscribe({
		channel : 'demo_alert',
		type : 'ios',
		device_token : deviceToken
	}, function(e) {
		if (e.success) {
			alert('subscribe Success :'
					+ ((e.error && e.message) || JSON.stringify(e)));
		} else {
			alert('subscribe Error:'
					+ ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}

