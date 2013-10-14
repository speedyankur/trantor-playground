function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.pullToRefresh/" + s : s.substring(0, index) + "/nl.fokkezb.pullToRefresh/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0014,
    key: "ptr",
    style: {
        width: Ti.UI.FILL,
        height: 51,
        backgroundColor: "#F5F8FA"
    }
}, {
    isClass: true,
    priority: 10000.0015,
    key: "ptrCenter",
    style: {
        bottom: 11,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        visible: false
    }
}, {
    isClass: true,
    priority: 10000.0016,
    key: "ptrArrow",
    style: {
        left: 8,
        width: 12,
        height: 30,
        image: WPATH("/images/clean.png")
    }
}, {
    isClass: true,
    priority: 10000.0017,
    key: "ptrIndicator",
    style: {
        left: 0,
        style: Ti.UI.ActivityIndicatorStyle.DARK
    }
}, {
    isClass: true,
    priority: 10000.0019,
    key: "ptrText",
    style: {
        left: 30,
        wordWrap: false,
        color: "#8899A6",
        font: {
            fontSize: 13
        }
    }
}, {
    isClass: true,
    priority: 10000.002,
    key: "ptrLine",
    style: {
        bottom: 0,
        height: 1,
        width: Ti.UI.FILL,
        backgroundColor: "#E1E8ED"
    }
} ];