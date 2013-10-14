function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.button/" + s : s.substring(0, index) + "/nl.fokkezb.button/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    function applyProperties(properties) {
        var apply = {};
        if (properties.title) {
            apply.text = properties.title;
            titleid = null;
        } else if (properties.titleid) {
            apply.text = L(properties.titleid);
            titleid = properties.titleid;
        }
        properties.upperCase && (apply.text = apply.toUpperCase());
        _.extend(apply, _.pick(properties, "color", "font", "shadowColor", "shadowOffset"));
        if (void 0 !== properties.textAlign && (properties.width || "SIZE" !== $.title.width)) {
            apply.textAlign = properties.textAlign;
            apply.width = Ti.UI.FILL;
        }
        if (void 0 !== properties.verticalAlign && (properties.height || "SIZE" !== $.title.height)) {
            apply.verticalAlign = properties.verticalAlign;
            apply.height = Ti.UI.FILL;
        }
        properties.font && (apply.font = _.clone(properties.font));
        _.size(apply) && $.title.applyProperties(apply);
    }
    function setTitle(title) {
        return applyProperties({
            title: title
        });
    }
    function getTitle() {
        return $.title.text;
    }
    function setTitleid(titleid) {
        return applyProperties({
            titleid: titleid
        });
    }
    function getTitleid() {
        return titleid;
    }
    new (require("alloy/widget"))("nl.fokkezb.button");
    this.__widgetId = "nl.fokkezb.button";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "title";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.title = Ti.UI.createLabel({
        width: 100,
        height: Ti.UI.SIZE,
        textAlign: "center",
        touchEnabled: false,
        id: "title"
    });
    $.__views.title && $.addTopLevelView($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var titleid;
    arguments[0] && applyProperties(arguments[0]);
    exports.applyProperties = applyProperties;
    exports.getTitle = getTitle;
    exports.setTitle = setTitle;
    exports.getTitleid = getTitleid;
    exports.setTitleid = setTitleid;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;