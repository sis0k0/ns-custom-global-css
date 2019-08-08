const application = require("tns-core-modules/application");
require("tns-core-modules/ui/styling/style-scope");

global.registerModule("./app.css", () => require("~/app1.css"));
global.registerModule("app.css", () => require("~/app1.css"));

application.loadAppCss();

