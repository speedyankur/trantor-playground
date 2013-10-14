function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.button/" + s : s.substring(0, index) + "/nl.fokkezb.button/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0006,
    key: "outer",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "inner",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
} ];