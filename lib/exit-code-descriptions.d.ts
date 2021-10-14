import { ExitCodes } from './exit-codes';
import { SysExitCodes } from "./sys-exit-codes";
import { BashExitCodes } from "./bash-exit-codes";
declare type AnyExitCode = BashExitCodes | SysExitCodes | ExitCodes;
export declare class ExitCodeDescriptions {
    exitCodeDescriptionMap: {
        0: string;
        1: string;
        2: string;
        64: string;
        65: string;
        66: string;
        67: string;
        68: string;
        69: string;
        70: string;
        71: string;
        72: string;
        73: string;
        74: string;
        75: string;
        76: string;
        77: string;
        78: string;
        126: string;
        127: string;
        128: string;
        130: string;
    };
    static create(): ExitCodeDescriptions;
    getDescription(exitCode: AnyExitCode): string;
}
export {};
