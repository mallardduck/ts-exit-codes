export enum BashExitCodes {
    General = 1,
    ShellMisuse,
    CannotExecute = 126,
    CommandNotFound,
    InvalidExitArg,
    UserTerminated = 130,
}
