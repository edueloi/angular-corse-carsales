"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = void 0;
function is(value) {
    const candidate = value;
    return candidate != null && typeof candidate.then === 'function';
}
exports.is = is;
//# sourceMappingURL=Thenable.js.map