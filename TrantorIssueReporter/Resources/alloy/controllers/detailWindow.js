function Controller() {
    function updateButtonbar(status) {
        switch (status) {
          case "open":
            $.addClass($.openBtn, "activeState");
            $.removeClass($.progressBtn, "activeState");
            $.removeClass($.closeBtn, "activeState");
            break;

          case "in-progress":
            $.removeClass($.openBtn, "activeState");
            $.addClass($.progressBtn, "activeState");
            $.removeClass($.closeBtn, "activeState");
            break;

          case "close":
            $.removeClass($.openBtn, "activeState");
            $.removeClass($.progressBtn, "activeState");
            $.addClass($.closeBtn, "activeState");
        }
    }
    function statusButtonClicked(e) {
        var data = {
            status: e.source.name
        };
        "close" == e.source.name && (data["closedBy"] = Alloy.Globals.loggedInUser.username);
        Alloy.Globals.dataAccesslayer.updateStatusForIssue(JSON.stringify(data), args.objectId, function(status) {
            if (status) {
                args.callback(e.source.name);
                Alloy.createWidget("toasty", {
                    title: "Success",
                    message: "Issue status has been updated successfully",
                    type: "confirm"
                }).show();
            }
        });
        updateButtonbar(e.source.name);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detailWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detailWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        backgroundRepeat: true,
        title: "Detail View",
        id: "detailWindow"
    });
    $.__views.detailWindow && $.addTopLevelView($.__views.detailWindow);
    $.__views.__alloyId3 = Ti.UI.createScrollView({
        bottom: 50,
        layout: "vertical",
        id: "__alloyId3"
    });
    $.__views.detailWindow.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        width: 100,
        text: "Project:",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.projectNameField = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16
        },
        left: 125,
        right: 10,
        id: "projectNameField"
    });
    $.__views.__alloyId4.add($.__views.projectNameField);
    $.__views.__alloyId6 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#808080",
        top: 5,
        id: "__alloyId6"
    });
    $.__views.__alloyId3.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        id: "__alloyId7"
    });
    $.__views.__alloyId3.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        width: 100,
        text: "Description:",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.issueDescriptionField = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16
        },
        left: 125,
        right: 10,
        id: "issueDescriptionField"
    });
    $.__views.__alloyId7.add($.__views.issueDescriptionField);
    $.__views.__alloyId9 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#808080",
        top: 5,
        id: "__alloyId9"
    });
    $.__views.__alloyId3.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        id: "__alloyId10"
    });
    $.__views.__alloyId3.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        width: 100,
        text: "Date Identified:",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.dateIdentifiedField = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16
        },
        left: 125,
        right: 10,
        id: "dateIdentifiedField"
    });
    $.__views.__alloyId10.add($.__views.dateIdentifiedField);
    $.__views.__alloyId12 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#808080",
        top: 5,
        id: "__alloyId12"
    });
    $.__views.__alloyId3.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        id: "__alloyId13"
    });
    $.__views.__alloyId3.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        width: 100,
        text: "Date resolved:",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.dateResolvedField = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16
        },
        left: 125,
        right: 10,
        id: "dateResolvedField"
    });
    $.__views.__alloyId13.add($.__views.dateResolvedField);
    $.__views.__alloyId15 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#808080",
        top: 5,
        id: "__alloyId15"
    });
    $.__views.__alloyId3.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        id: "__alloyId16"
    });
    $.__views.__alloyId3.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        width: 100,
        text: "Severity:",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.severityField = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16
        },
        left: 125,
        right: 10,
        id: "severityField"
    });
    $.__views.__alloyId16.add($.__views.severityField);
    $.__views.__alloyId18 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#808080",
        top: 5,
        id: "__alloyId18"
    });
    $.__views.__alloyId3.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        id: "__alloyId19"
    });
    $.__views.__alloyId3.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        width: 100,
        text: "Mitigation Plan:",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.mitigationField = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16
        },
        left: 125,
        right: 10,
        id: "mitigationField"
    });
    $.__views.__alloyId19.add($.__views.mitigationField);
    $.__views.__alloyId21 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#808080",
        top: 5,
        id: "__alloyId21"
    });
    $.__views.__alloyId3.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        id: "__alloyId22"
    });
    $.__views.__alloyId3.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        width: 100,
        text: "Comments:",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.commentsField = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 16
        },
        left: 125,
        right: 10,
        id: "commentsField"
    });
    $.__views.__alloyId22.add($.__views.commentsField);
    $.__views.buttonBar = Ti.UI.createView({
        bottom: 5,
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        left: 10,
        right: 10,
        borderColor: "#808080",
        layout: "horizontal",
        id: "buttonBar"
    });
    $.__views.detailWindow.add($.__views.buttonBar);
    $.__views.openBtn = Ti.UI.createView({
        width: "33.1%",
        color: "#7A7A7A",
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
                color: "#C9C9C9",
                offset: 1
            } ]
        },
        apiName: "Ti.UI.View",
        id: "openBtn",
        classes: [ "normalState" ],
        name: "open"
    });
    $.__views.buttonBar.add($.__views.openBtn);
    statusButtonClicked ? $.__views.openBtn.addEventListener("click", statusButtonClicked) : __defers["$.__views.openBtn!click!statusButtonClicked"] = true;
    $.__views.__alloyId24 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontWeight: "bold"
        },
        text: "Open",
        name: "open",
        id: "__alloyId24"
    });
    $.__views.openBtn.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        width: 1,
        backgroundColor: "#808080",
        id: "__alloyId25"
    });
    $.__views.buttonBar.add($.__views.__alloyId25);
    $.__views.progressBtn = Ti.UI.createView({
        width: "33.1%",
        color: "#7A7A7A",
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
                color: "#C9C9C9",
                offset: 1
            } ]
        },
        apiName: "Ti.UI.View",
        id: "progressBtn",
        classes: [ "normalState" ],
        name: "in-progress"
    });
    $.__views.buttonBar.add($.__views.progressBtn);
    statusButtonClicked ? $.__views.progressBtn.addEventListener("click", statusButtonClicked) : __defers["$.__views.progressBtn!click!statusButtonClicked"] = true;
    $.__views.__alloyId26 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontWeight: "bold"
        },
        text: "In-Progress",
        name: "in-progress",
        id: "__alloyId26"
    });
    $.__views.progressBtn.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        width: 1,
        backgroundColor: "#808080",
        id: "__alloyId27"
    });
    $.__views.buttonBar.add($.__views.__alloyId27);
    $.__views.closeBtn = Ti.UI.createView({
        width: "33.1%",
        color: "#7A7A7A",
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
                color: "#C9C9C9",
                offset: 1
            } ]
        },
        apiName: "Ti.UI.View",
        id: "closeBtn",
        classes: [ "normalState" ],
        name: "close"
    });
    $.__views.buttonBar.add($.__views.closeBtn);
    statusButtonClicked ? $.__views.closeBtn.addEventListener("click", statusButtonClicked) : __defers["$.__views.closeBtn!click!statusButtonClicked"] = true;
    $.__views.__alloyId28 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontWeight: "bold"
        },
        text: "Close",
        name: "close",
        id: "__alloyId28"
    });
    $.__views.closeBtn.add($.__views.__alloyId28);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.projectNameField.text = args.project;
    $.issueDescriptionField.text = args.Description;
    $.dateIdentifiedField.text = args.dateIdentified ? new Date(args.dateIdentified.iso).toDateString() : "";
    $.dateResolvedField.text = args.dateResolved ? new Date(args.dateResolved.iso).toDateString() : "";
    $.severityField.text = args.severity;
    $.mitigationField.text = args.mitigationPlan;
    $.commentsField.text = args.comments;
    var status = args.status ? args.status.toLowerCase() : "open";
    updateButtonbar(status);
    $.detailWindow.navBarHidden = true;
    __defers["$.__views.openBtn!click!statusButtonClicked"] && $.__views.openBtn.addEventListener("click", statusButtonClicked);
    __defers["$.__views.progressBtn!click!statusButtonClicked"] && $.__views.progressBtn.addEventListener("click", statusButtonClicked);
    __defers["$.__views.closeBtn!click!statusButtonClicked"] && $.__views.closeBtn.addEventListener("click", statusButtonClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;