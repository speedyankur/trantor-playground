function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "toasty/" + s : s.substring(0, index) + "/toasty/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0009,
    key: "toasty",
    style: {
        backgroundColor: "#000000",
        borderRadius: 10,
        navBarHidden: true,
        opacity: 0,
        width: "70%",
        height: "30%"
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "centerWrapper",
    style: {
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "title",
    style: {
        color: "#ffffff",
        font: {
            fontSize: "18sp",
            fontWeight: "bold"
        },
        textAlign: "center",
        top: "5dp",
        left: "2dp",
        right: "2dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "message",
    style: {
        color: "#ffffff",
        font: {
            fontSize: "16sp"
        },
        textAlign: "center",
        top: "5dp",
        left: "2dp",
        right: "2dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL
    }
} ];