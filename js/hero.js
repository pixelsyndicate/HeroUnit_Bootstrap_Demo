var theNewScript = document.createElement("script");
theNewScript.type = "text/javascript";
theNewScript.src = "//code.jquery.com/jquery-2.1.0.min.js";
document.getElementsByTagName("head")[0].appendChild(theNewScript);

// jQuery MAY OR MAY NOT be loaded at this stage
var waitForLoad = function () {
    if (typeof jQuery != "undefined") {
        $.get("js/bootstrap.min.js");
    } else {
        window.setTimeout(waitForLoad, 1000);
    }
};
window.setTimeout(waitForLoad, 1000);


$("div.navbar .navbar-collapse ul a").click(function () {
    this.addClass("active");
});