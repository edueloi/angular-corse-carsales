"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = void 0;
const Is = require("./Is");
function is(item) {
    const candidate = item;
    return (candidate != null &&
        Is.string(candidate.directory) &&
        (Is.boolean(candidate.changeProcessCWD) ||
            candidate.changeProcessCWD === undefined));
}
exports.is = is;
