"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = void 0;
function is(value) {
    const candidate = value;
    return ((candidate === null || candidate === void 0 ? void 0 : candidate.token) != null &&
        (candidate === null || candidate === void 0 ? void 0 : candidate.resolve) != null &&
        (candidate === null || candidate === void 0 ? void 0 : candidate.reject) != null);
}
exports.is = is;
//# sourceMappingURL=Request.js.map