"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitCodeDescriptions = void 0;
class ExitCodeDescriptions {
    constructor() {
        this.exitCodeDescriptionMap = {
            0: "Successful termination",
            1: "Catchall for general errors",
            2: "Misuse of shell builtins",
            64: "The command was used incorrectly",
            65: "The input data was incorrect in some way",
            66: "An input file did not exist or was not readable",
            67: "The user specified did not exist",
            68: "The host specified did not exist",
            69: "A service is unavailable",
            70: "An internal software error has been detected",
            71: "An operating system error has been detected",
            72: "Some system file does not exist, cannot be opened, or has some sort of error",
            73: "A (user specified) output file cannot be created",
            74: "An error occurred while doing I/O on some file",
            75: "Temporary failure, indicating something that is not really an error",
            76: "The remote system returned something that was 'not possible' during a protocol exchange",
            77: "You did not have sufficient permission to perform the operation",
            78: "Something was found in an unconfigured or misconfigured state",
            126: "Permission problem or command is not an executable",
            127: "Command not found; Possible problem with $PATH or a typo",
            128: "Invalid argument to exit; exit takes only integer args in the range 0 - 255",
            130: "User terminated script; Script terminated by Control-C",
        };
    }
    static create() {
        return new ExitCodeDescriptions();
    }
    getDescription(exitCode) {
        let exitCodeInt = +exitCode;
        return this.exitCodeDescriptionMap[exitCodeInt];
    }
}
exports.ExitCodeDescriptions = ExitCodeDescriptions;
