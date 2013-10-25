function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.button/" + s : s.substring(0, index) + "/nl.fokkezb.button/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0004,
    key: "title",
    style: {
        width: "100%",
        height: Ti.UI.SIZE,
        textAlign: "center",
        touchEnabled: false
    }
} ];