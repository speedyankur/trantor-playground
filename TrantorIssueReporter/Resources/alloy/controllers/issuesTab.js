function Controller() {
    function onLongpress(eOuter) {
        var editDialog = Titanium.UI.createOptionDialog({
            options: [ "Delete", "Cancel" ],
            cancel: 1,
            destructive: 0,
            title: "Please Select Option"
        });
        editDialog.addEventListener("click", function(e) {
            if (0 == e.index) {
                var issueObjectId = eOuter.row.issueDetails.objectId;
                var rowId = eOuter.index;
                Alloy.Globals.dataAccesslayer.deleteIssue(issueObjectId, function() {
                    $.tableView.deleteRow(rowId);
                    Alloy.createWidget("toasty", {
                        title: "Success",
                        message: "Issue has been deleted successfully",
                        type: "confirm"
                    }).show();
                });
            }
        });
        editDialog.show();
    }
    function refreshIssues(e) {
        data = [];
        Alloy.Globals.dataAccesslayer.getAllIssues(function(response) {
            if (response) if (response.results.length > 0) {
                var sorter = Ti.App.Properties.getString("filter") ? Ti.App.Properties.getString("filter") : "";
                switch (sorter) {
                  case "PROJECT":
                    response.results = _.sortBy(response.results, function(issue) {
                        return issue.project;
                    });
                    break;

                  case "DESCRIPTION":
                    response.results = _.sortBy(response.results, function(issue) {
                        return issue.Description;
                    });
                    break;

                  case "DATE-IDENTIFIED":
                    response.results = _.sortBy(response.results, function(issue) {
                        return issue.dateIdentified ? new Date(issue.dateIdentified.iso) : "";
                    });
                }
                for (var i = 0; response.results.length > i; i++) {
                    var args = {};
                    args.title = response.results[i].Description;
                    args.hasChild = true;
                    var severity = response.results[i].severity ? response.results[i].severity.toLowerCase() : "";
                    switch (severity) {
                      case "high":
                        args.leftImage = "/images/busy-icon.png";
                        break;

                      case "medium":
                        args.leftImage = "/images/green-icon.png";
                        break;

                      case "low":
                        args.leftImage = "/images/warning-icon.png";
                    }
                    var issueRow = Alloy.createController("issueRow", args).getView();
                    issueRow.issueDetails = response.results[i];
                    data.push(issueRow);
                }
            } else {
                var args = {};
                args.title = "No Issues Found";
                args.leftImage = "none";
                args.hasChild = false;
                var issueRow = Alloy.createController("issueRow", args).getView();
                data.push(issueRow);
            }
            $.tableView.setData(data);
            e && "function" == typeof e.hide && e.hide();
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "issuesTab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.issuesWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "All Issues",
        id: "issuesWindow"
    });
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView"
    });
    $.__views.issuesWindow.add($.__views.tableView);
    onLongpress ? $.__views.tableView.addEventListener("longpress", onLongpress) : __defers["$.__views.tableView!longpress!onLongpress"] = true;
    $.__views.issuesTab = Ti.UI.createTab({
        window: $.__views.issuesWindow,
        title: " Issues",
        icon: "/images/list_issue.png",
        id: "issuesTab"
    });
    $.__views.issuesTab && $.addTopLevelView($.__views.issuesTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    $.tableView.addEventListener("click", function(e) {
        if (e.row.hasChild) {
            var issueDetails = e.row.issueDetails;
            issueDetails.callback = function(status) {
                var issueDetails = e.row.issueDetails;
                issueDetails.status = status.toLowerCase();
                e.row.issueDetails = issueDetails;
            };
            var detailWindow = Alloy.createController("detailWindow", issueDetails).getView();
            $.issuesTab.open(detailWindow, {
                animated: true
            });
        }
    });
    exports.refreshIssues = refreshIssues;
    refreshIssues();
    var activity = $.issuesWindow.activity;
    activity.onCreateOptionsMenu = function(e) {
        var menu = e.menu;
        var menuItem1 = menu.add({
            title: "Refresh"
        });
        menuItem1.addEventListener("click", function() {
            refreshIssues();
        });
    };
    __defers["$.__views.ptr!release!refreshIssues"] && $.__views.ptr.on("release", refreshIssues);
    __defers["$.__views.tableView!longpress!onLongpress"] && $.__views.tableView.addEventListener("longpress", onLongpress);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;