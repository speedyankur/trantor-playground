function Controller() {
    function showPickerView(e) {
        currentSelctedDateField = e.source.name;
        $.picker.showDatePickerDialog({
            value: new Date(),
            callback: function(e) {
                if (e.cancel) Ti.API.info("User canceled dialog"); else {
                    Ti.API.info("User selected date: " + e.value);
                    var selectedDateValue = e.value.toDateString();
                    switch (currentSelctedDateField) {
                      case "DATE_IDENTIFIED":
                        $.dateIdentified.text = selectedDateValue;
                        break;

                      case "DATE_RESOLVED":
                        $.dateResolved.text = selectedDateValue;
                    }
                }
            }
        });
    }
    function hidePickerView() {
        var selectedDateValue = $.picker.value.toDateString();
        Ti.API.info("picker value string=" + selectedDateValue);
        Ti.API.info("picker value iso=" + $.picker.value.toISOString());
        switch (currentSelctedDateField) {
          case "DATE_IDENTIFIED":
            $.dateIdentified.text = selectedDateValue;
            $.dateIdentified.data = $.picker.value.toISOString();
            break;

          case "DATE_RESOLVED":
            $.dateResolved.text = selectedDateValue;
            $.dateResolved.data = $.picker.value.toISOString();
        }
    }
    function showStatusPickerDialog() {
        var statusPickerDialog = Titanium.UI.createOptionDialog({
            options: [ "OPEN", "CLOSE", "IN-PROGRESS" ],
            title: "Please Select Status Level"
        });
        statusPickerDialog.addEventListener("click", function(e) {
            $.statusField.text = e.source.options[e.index];
        });
        statusPickerDialog.show();
    }
    function showSeverityPickerDialog() {
        var severityPickerDialog = Titanium.UI.createOptionDialog({
            options: [ "HIGH", "MEDIUM", "LOW" ],
            title: "Please Select Severity Level"
        });
        severityPickerDialog.addEventListener("click", function(e) {
            $.severityField.text = e.source.options[e.index];
        });
        severityPickerDialog.show();
    }
    function submit() {
        if ("" == $.projectField.value) {
            alert("Enter Project Name");
            $.projectField.focus();
            return;
        }
        if ("" == $.descriptionField.value) {
            alert("Enter Description");
            $.descriptionField.focus();
            return;
        }
        if ("" == $.severityField.value) {
            alert("Enter Severity");
            $.severityField.focus();
            return;
        }
        var data = {
            isDeleted: false,
            project: $.projectField.value,
            Description: $.descriptionField.value,
            status: $.statusField.text,
            severity: $.severityField.text,
            mitigationPlan: $.mitigationField.value,
            comments: $.commentsField.value
        };
        $.dateIdentified.data && (data["dateIdentified"] = {
            __type: "Date",
            iso: $.dateIdentified.data
        });
        $.dateResolved.data && (data["dateResolved"] = {
            __type: "Date",
            iso: $.dateResolved.data
        });
        Ti.API.info("data--" + JSON.stringify(data));
        var dataToPost = JSON.parse(JSON.stringify(data));
        Ti.API.info("data--" + dataToPost);
        Alloy.Globals.dataAccesslayer.addNewIssue(JSON.stringify(data));
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "issueReporterTab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId33 = Ti.UI.createWindow({
        backgroundImage: "images/ios_bg.jpg",
        backgroundRepeat: true,
        title: "New Issue",
        id: "__alloyId33"
    });
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "250",
        bottom: "-250",
        zIndex: "10",
        backgroundColor: "#fff",
        width: "100%",
        layout: "vertical"
    });
    $.__views.__alloyId33.add($.__views.pickerView);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        useSpinner: "true",
        selectionIndicator: "true",
        type: Ti.UI.PICKER_TYPE_DATE
    });
    $.__views.pickerView.add($.__views.picker);
    $.__views.__alloyId40 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId40"
    });
    $.__views.__alloyId33.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        text: "Project:",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.projectField = Ti.UI.createTextField({
        top: 5,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        left: 10,
        right: 10,
        color: "#000",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        height: 40,
        hintText: "Project Name",
        id: "projectField"
    });
    $.__views.__alloyId40.add($.__views.projectField);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        text: "Description:",
        id: "__alloyId42"
    });
    $.__views.__alloyId40.add($.__views.__alloyId42);
    $.__views.descriptionField = Ti.UI.createTextField({
        top: 5,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        left: 10,
        right: 10,
        color: "#000",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        height: 40,
        hintText: "Project Description",
        id: "descriptionField"
    });
    $.__views.__alloyId40.add($.__views.descriptionField);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        text: "Date Identified:",
        id: "__alloyId43"
    });
    $.__views.__alloyId40.add($.__views.__alloyId43);
    $.__views.dateIdentified = Ti.UI.createLabel({
        top: 5,
        left: 10,
        right: 10,
        color: "#000",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 40,
        borderRadius: 5,
        id: "dateIdentified",
        name: "DATE_IDENTIFIED"
    });
    $.__views.__alloyId40.add($.__views.dateIdentified);
    showPickerView ? $.__views.dateIdentified.addEventListener("click", showPickerView) : __defers["$.__views.dateIdentified!click!showPickerView"] = true;
    $.__views.__alloyId44 = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        text: "Date resolved:",
        id: "__alloyId44"
    });
    $.__views.__alloyId40.add($.__views.__alloyId44);
    $.__views.dateResolved = Ti.UI.createLabel({
        top: 5,
        left: 10,
        right: 10,
        color: "#000",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 40,
        borderRadius: 5,
        id: "dateResolved",
        name: "DATE_RESOLVED"
    });
    $.__views.__alloyId40.add($.__views.dateResolved);
    showPickerView ? $.__views.dateResolved.addEventListener("click", showPickerView) : __defers["$.__views.dateResolved!click!showPickerView"] = true;
    $.__views.__alloyId45 = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        text: "Status:",
        id: "__alloyId45"
    });
    $.__views.__alloyId40.add($.__views.__alloyId45);
    $.__views.statusField = Ti.UI.createLabel({
        top: 5,
        left: 10,
        right: 10,
        color: "#000",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 40,
        borderRadius: 5,
        text: "OPEN",
        id: "statusField"
    });
    $.__views.__alloyId40.add($.__views.statusField);
    showStatusPickerDialog ? $.__views.statusField.addEventListener("click", showStatusPickerDialog) : __defers["$.__views.statusField!click!showStatusPickerDialog"] = true;
    $.__views.__alloyId46 = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        text: "Severity:",
        id: "__alloyId46"
    });
    $.__views.__alloyId40.add($.__views.__alloyId46);
    $.__views.severityField = Ti.UI.createLabel({
        top: 5,
        left: 10,
        right: 10,
        color: "#000",
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 40,
        borderRadius: 5,
        id: "severityField"
    });
    $.__views.__alloyId40.add($.__views.severityField);
    showSeverityPickerDialog ? $.__views.severityField.addEventListener("click", showSeverityPickerDialog) : __defers["$.__views.severityField!click!showSeverityPickerDialog"] = true;
    $.__views.__alloyId47 = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        text: "Mitigation Plan:",
        id: "__alloyId47"
    });
    $.__views.__alloyId40.add($.__views.__alloyId47);
    $.__views.mitigationField = Ti.UI.createTextArea({
        top: 10,
        left: 10,
        right: 10,
        height: 64,
        color: "#000",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "mitigationField"
    });
    $.__views.__alloyId40.add($.__views.mitigationField);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        text: "Comments:",
        id: "__alloyId48"
    });
    $.__views.__alloyId40.add($.__views.__alloyId48);
    $.__views.commentsField = Ti.UI.createTextArea({
        top: 10,
        left: 10,
        right: 10,
        height: 64,
        color: "#000",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "commentsField"
    });
    $.__views.__alloyId40.add($.__views.commentsField);
    $.__views.next = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "15",
            fontWeight: "bold"
        },
        borderRadius: "5",
        backgroundImage: "none",
        backgroundSelectedImage: "none",
        height: "40",
        left: "25",
        right: "25",
        top: "15",
        id: "next",
        backgroundColor: "#30D1F4",
        backgroundSelectedColor: "#808080",
        title: "Save"
    });
    $.__views.__alloyId40.add($.__views.next);
    submit ? $.__views.next.addEventListener("click", submit) : __defers["$.__views.next!click!submit"] = true;
    $.__views.issueReporterTab = Ti.UI.createTab({
        window: $.__views.__alloyId33,
        title: " New Issue",
        icon: "/images/list_issueAdd.png",
        id: "issueReporterTab"
    });
    $.__views.issueReporterTab && $.addTopLevelView($.__views.issueReporterTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var currentSelctedDateField;
    {
        Titanium.UI.createAnimation({
            bottom: "-50"
        });
    }
    {
        Titanium.UI.createAnimation({
            bottom: "-250"
        });
    }
    __defers["$.__views.__alloyId38!click!hidePickerView"] && $.__views.__alloyId38.addEventListener("click", hidePickerView);
    __defers["$.__views.dateIdentified!click!showPickerView"] && $.__views.dateIdentified.addEventListener("click", showPickerView);
    __defers["$.__views.dateResolved!click!showPickerView"] && $.__views.dateResolved.addEventListener("click", showPickerView);
    __defers["$.__views.statusField!click!showStatusPickerDialog"] && $.__views.statusField.addEventListener("click", showStatusPickerDialog);
    __defers["$.__views.severityField!click!showSeverityPickerDialog"] && $.__views.severityField.addEventListener("click", showSeverityPickerDialog);
    __defers["$.__views.next!click!submit"] && $.__views.next.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;