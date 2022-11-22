"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = void 0;
const Is = require("./Is");
function is(item) {
    const candidate = item;
    return (candidate != null &&
        Is.string(candidate.language) &&
        (Is.boolean(candidate.autoFix) || candidate.autoFix === undefined));
}
exports.is = is;
