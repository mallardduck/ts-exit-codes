"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitCodes = void 0;
const sys_exit_codes_1 = require("./sys-exit-codes");
const bash_exit_codes_1 = require("./bash-exit-codes");
exports.ExitCodes = Object.assign(Object.assign({ 
    // General
    Ok: 0 }, bash_exit_codes_1.BashExitCodes), sys_exit_codes_1.SysExitCodes);
