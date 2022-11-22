"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = exports.Status = void 0;
const vscode_languageserver_1 = require("vscode-languageserver");
var Status;
(function (Status) {
    Status[Status["ok"] = 1] = "ok";
    Status[Status["warn"] = 2] = "warn";
    Status[Status["error"] = 3] = "error";
})(Status = exports.Status || (exports.Status = {}));
exports.type = new vscode_languageserver_1.NotificationType('standard/status');
//# sourceMappingURL=StatusNotification.js.map