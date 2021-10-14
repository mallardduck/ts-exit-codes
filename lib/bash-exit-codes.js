"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BashExitCodes = void 0;
var BashExitCodes;
(function (BashExitCodes) {
    BashExitCodes[BashExitCodes["General"] = 1] = "General";
    BashExitCodes[BashExitCodes["ShellMisuse"] = 2] = "ShellMisuse";
    BashExitCodes[BashExitCodes["CannotExecute"] = 126] = "CannotExecute";
    BashExitCodes[BashExitCodes["CommandNotFound"] = 127] = "CommandNotFound";
    BashExitCodes[BashExitCodes["InvalidExitArg"] = 128] = "InvalidExitArg";
    BashExitCodes[BashExitCodes["UserTerminated"] = 130] = "UserTerminated";
})(BashExitCodes = exports.BashExitCodes || (exports.BashExitCodes = {}));
