function Controller() {
    function showFiterPicker() {
        var statusPickerDialog = Titanium.UI.createOptionDialog({
            options: [ "PROJECT", "DESCRIPTION", "DATE-IDENTIFIED" ],
            title: "Please Select your Filter"
        });
        statusPickerDialog.addEventListener("click", function(e) {
            $.sortField.text = e.source.options[e.index];
        });
        statusPickerDialog.show();
    }
    function saveSettings() {
        Ti.App.Properties.setString("filter", $.sortField.text);
        alert("Settings Saved");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settingsTab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.settingsWindow = Ti.UI.createWindow({
        backgroundImage: "images/ios_bg.jpg",
        backgroundRepeat: true,
        title: "Settings",
        id: "settingsWindow"
    });
    $.__views.__alloyId54 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId54"
    });
    $.__views.settingsWindow.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        text: "Sort Issues by:",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.sortField = Ti.UI.createLabel({
        top: 5,
        left: 10,
        right: 10,
        color: "#000",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 40,
        borderRadius: 5,
        id: "sortField"
    });
    $.__views.__alloyId54.add($.__views.sortField);
    showFiterPicker ? $.__views.sortField.addEventListener("click", showFiterPicker) : __defers["$.__views.sortField!click!showFiterPicker"] = true;
    $.__views.next = Alloy.createWidget("nl.fokkezb.button", "widget", {
        top: 15,
        left: 10,
        right: 10,
        width: Ti.UI.FILL,
        borderRadius: 23,
        id: "next",
        title: "Save",
        style: "bs-primary",
        __parentSymbol: $.__views.__alloyId54
    });
    $.__views.next.setParent($.__views.__alloyId54);
    saveSettings ? $.__views.next.on("click", saveSettings) : __defers["$.__views.next!click!saveSettings"] = true;
    $.__views.settingsTab = Ti.UI.createTab({
        window: $.__views.settingsWindow,
        title: " Settings",
        icon: "/images/list_issuesetting.png",
        id: "settingsTab"
    });
    $.__views.settingsTab && $.addTopLevelView($.__views.settingsTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sortField.text = Ti.App.Properties.getString("filter") ? Ti.App.Properties.getString("filter") : "";
    var activity = $.settingsWindow.activity;
    activity.onCreateOptionsMenu = function(e) {
        var menu = e.menu;
        var menuItem1 = menu.add({
            title: "Logout"
        });
        menuItem1.addEventListener("click", function() {
            Alloy.Globals.tabGroup.close();
        });
    };
    __defers["$.__views.sortField!click!showFiterPicker"] && $.__views.sortField.addEventListener("click", showFiterPicker);
    __defers["$.__views.next!click!saveSettings"] && $.__views.next.on("click", saveSettings);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;