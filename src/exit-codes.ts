import {SysExitCodes} from "./sys-exit-codes";
import {BashExitCodes} from "./bash-exit-codes";

export const ExitCodes = {
    // General
    Ok: 0,
    ...BashExitCodes,
    ...SysExitCodes,
}
export type ExitCodes = typeof ExitCodes;
