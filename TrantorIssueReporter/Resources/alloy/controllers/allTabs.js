function Controller() {
    function getDeviceToken() {
        Titanium.Network.registerForPushNotifications({
            types: [ Titanium.Network.NOTIFICATION_TYPE_BADGE, Titanium.Network.NOTIFICATION_TYPE_ALERT, Titanium.Network.NOTIFICATION_TYPE_SOUND ],
            success: function(e) {
                deviceToken = e.deviceToken;
                registerForPush();
            },
            error: function(e) {
                alert("Error: " + e.message);
            },
            callback: function() {}
        });
    }
    function registerForPush() {
        Cloud.PushNotifications.subscribe({
            channel: "demo_alert",
            type: "ios",
            device_token: deviceToken
        }, function(e) {
            e.success ? alert("subscribe Success :" + (e.error && e.message || JSON.stringify(e))) : alert("subscribe Error:" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "allTabs";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabGroup = Ti.UI.createTabGroup({
        id: "tabGroup"
    });
    $.__views.allIssuesTab = Alloy.createController("issuesTab", {
        id: "allIssuesTab"
    });
    $.__views.tabGroup.addTab($.__views.allIssuesTab.getViewEx({
        recurse: true
    }));
    $.__views.issueReporterTab = Alloy.createController("issueReporterTab", {
        id: "issueReporterTab"
    });
    $.__views.tabGroup.addTab($.__views.issueReporterTab.getViewEx({
        recurse: true
    }));
    $.__views.settingsTab = Alloy.createController("settingsTab", {
        id: "settingsTab"
    });
    $.__views.tabGroup.addTab($.__views.settingsTab.getViewEx({
        recurse: true
    }));
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tabGroup.add(Alloy.Globals.progressBar);
    $.tabGroup.open();
    Alloy.Globals.tabGroup = $.tabGroup;
    var deviceToken;
    var Cloud = require("ti.cloud");
    Cloud.Users.login({
        login: "push123",
        password: "push123"
    }, function(e) {
        if (e.success) {
            e.users[0];
            getDeviceToken();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;