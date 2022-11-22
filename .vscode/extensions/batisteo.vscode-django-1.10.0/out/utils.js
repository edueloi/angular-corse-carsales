"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postInitHook = exports.SnippetProvider = void 0;
const toml = require("toml");
const vscode = require("vscode");
const util_1 = require("util");
class SnippetProvider {
    constructor(extensionUri) {
        this.extensionUri = extensionUri;
    }
    readSnippets(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const location = vscode.Uri.joinPath(this.extensionUri, 'completions/snippets', name);
            const buffer = yield vscode.workspace.fs.readFile(location);
            const str = new util_1.TextDecoder("utf-8").decode(buffer);
            return toml.parse(str).snippets;
        });
    }
}
exports.SnippetProvider = SnippetProvider;
function postInitHook() {
    return __awaiter(this, void 0, void 0, function* () { });
}
exports.postInitHook = postInitHook;
//# sourceMappingURL=utils.js.map