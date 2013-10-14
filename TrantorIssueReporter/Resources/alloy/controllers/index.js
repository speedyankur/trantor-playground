function Controller() {
    function doLogin() {
        if ("" == $.username.value) {
            Alloy.createWidget("toasty", {
                title: "Alert",
                message: "Please enter your username",
                type: "alert"
            }).show();
            $.username.focus();
            return;
        }
        if ("" == $.password.value) {
            Alloy.createWidget("toasty", {
                title: "Alert",
                message: "Please enter your password",
                type: "alert"
            }).show();
            $.password.focus();
            return;
        }
        Alloy.Globals.User.login($.username.value, $.password.value, function(status) {
            if (status) {
                var controller = Alloy.createController("allTabs");
                var win = controller.getView();
                win.open();
            } else {
                var errorAlert = Titanium.UI.createAlertDialog({
                    title: "Error",
                    message: "Some unknow error has occured.",
                    buttonNames: [ "OK" ]
                });
                errorAlert.show();
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loginWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Login",
        id: "loginWindow"
    });
    $.__views.loginWindow && $.addTopLevelView($.__views.loginWindow);
    $.__views.__alloyId29 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId29"
    });
    $.__views.loginWindow.add($.__views.__alloyId29);
    $.__views.heading = Ti.UI.createLabel({
        color: "#000",
        top: 40,
        left: 10,
        right: 10,
        textAlign: "center",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        text: "Please enter your login details",
        id: "heading"
    });
    $.__views.__alloyId29.add($.__views.heading);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        text: "Username :",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.username = Ti.UI.createTextField({
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        left: 10,
        right: 10,
        backgroundColor: "#fff",
        color: "#000",
        height: 40,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        value: "apptest",
        id: "username",
        autocorrect: "false",
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        hintText: "User Id"
    });
    $.__views.__alloyId29.add($.__views.username);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        text: "Password :",
        id: "__alloyId31"
    });
    $.__views.__alloyId29.add($.__views.__alloyId31);
    $.__views.password = Ti.UI.createTextField({
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        left: 10,
        right: 10,
        backgroundColor: "#fff",
        color: "#000",
        height: 40,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        value: "apptest",
        id: "password",
        hintText: "Password",
        passwordMask: "true"
    });
    $.__views.__alloyId29.add($.__views.password);
    $.__views.__alloyId32 = Alloy.createWidget("nl.fokkezb.button", "widget", {
        top: 15,
        title: "Login",
        style: "bs-default",
        id: "__alloyId32",
        __parentSymbol: $.__views.__alloyId29
    });
    $.__views.__alloyId32.setParent($.__views.__alloyId29);
    doLogin ? $.__views.__alloyId32.on("click", doLogin) : __defers["$.__views.__alloyId32!click!doLogin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.loginWindow.open();
    $.loginWindow.add(Alloy.Globals.progressBar);
    __defers["$.__views.__alloyId32!click!doLogin"] && $.__views.__alloyId32.on("click", doLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;