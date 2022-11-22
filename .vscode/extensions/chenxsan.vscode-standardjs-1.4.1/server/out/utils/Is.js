"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = exports.boolean = void 0;
const toString = Object.prototype.toString;
function boolean(value) {
    return value === true || value === false;
}
exports.boolean = boolean;
function string(value) {
    return toString.call(value) === '[object String]';
}
exports.string = string;
//# sourceMappingURL=Is.js.map