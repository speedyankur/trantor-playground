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
            Ti.API.info("status--" + status);
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
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#FFF",
                offset: 0
            }, {
                color: "#F0F0F0",
                offset: 1
            } ]
        },
        title: "Login",
        id: "loginWindow",
        navBarHidden: "true"
    });
    $.__views.loginWindow && $.addTopLevelView($.__views.loginWindow);
    $.__views.__alloyId29 = Ti.UI.createImageView({
        top: "10",
        image: "/images/logo.png",
        height: "100",
        id: "__alloyId29"
    });
    $.__views.loginWindow.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createScrollView({
        top: "100",
        layout: "vertical",
        id: "__alloyId30"
    });
    $.__views.loginWindow.add($.__views.__alloyId30);
    $.__views.heading = Ti.UI.createLabel({
        color: "#000",
        top: 5,
        left: 10,
        right: 10,
        textAlign: "center",
        font: {
            fontSize: 15
        },
        text: "Enter Your 'Death by a Thousand Cuts' Login Information.If you're not currently a member, please contact your admin",
        id: "heading"
    });
    $.__views.__alloyId30.add($.__views.heading);
    $.__views.formContainer = Ti.UI.createView({
        top: 10,
        borderWidth: 1,
        borderColor: "#C1C4C8",
        borderRadius: 5,
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        left: 10,
        right: 10,
        id: "formContainer"
    });
    $.__views.__alloyId30.add($.__views.formContainer);
    $.__views.__alloyId31 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#FBFBFB",
                offset: 0
            }, {
                color: "#D6D6D6",
                offset: 1
            } ]
        },
        id: "__alloyId31"
    });
    $.__views.formContainer.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        text: "Username",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.username = Ti.UI.createTextField({
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        left: 10,
        right: 10,
        bottom: 10,
        backgroundColor: "#fff",
        color: "#000",
        height: 40,
        borderWidth: 1,
        borderColor: "#C1C4C8",
        borderRadius: 5,
        paddingLeft: 10,
        value: "apptest",
        id: "username",
        autocorrect: "false",
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        hintText: "User Id"
    });
    $.__views.__alloyId31.add($.__views.username);
    $.__views.__alloyId33 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#FBFBFB",
                offset: 0
            }, {
                color: "#D6D6D6",
                offset: 1
            } ]
        },
        id: "__alloyId33"
    });
    $.__views.formContainer.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        text: "Password",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.password = Ti.UI.createTextField({
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        left: 10,
        right: 10,
        bottom: 10,
        backgroundColor: "#fff",
        color: "#000",
        height: 40,
        borderWidth: 1,
        borderColor: "#C1C4C8",
        borderRadius: 5,
        paddingLeft: 10,
        value: "apptest",
        id: "password",
        hintText: "Password",
        passwordMask: "true"
    });
    $.__views.__alloyId33.add($.__views.password);
    $.__views.__alloyId35 = Alloy.createWidget("nl.fokkezb.button", "widget", {
        top: 15,
        left: 10,
        right: 10,
        width: Ti.UI.FILL,
        borderRadius: 23,
        title: "Login",
        style: "bs-primary",
        id: "__alloyId35",
        __parentSymbol: $.__views.__alloyId30
    });
    $.__views.__alloyId35.setParent($.__views.__alloyId30);
    doLogin ? $.__views.__alloyId35.on("click", doLogin) : __defers["$.__views.__alloyId35!click!doLogin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.loginWindow.open();
    $.loginWindow.add(Alloy.Globals.progressBar);
    __defers["$.__views.__alloyId35!click!doLogin"] && $.__views.__alloyId35.on("click", doLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;