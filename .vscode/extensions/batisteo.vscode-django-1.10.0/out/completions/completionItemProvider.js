'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DjangoUrlCompletionItemProvider = exports.DjangoTemplatetagsCompletionItemProvider = exports.DjangoViewCompletionItemProvider = exports.DjangoModelCompletionItemProvider = exports.DjangoMigrationCompletionItemProvider = exports.DjangoManagerCompletionItemProvider = exports.DjangoFormCompletionItemProvider = exports.DjangoAdminCompletionItemProvider = exports.DjangoPythonCompletionItemProvider = void 0;
const constants_1 = require("../constants");
const base_1 = require("./base");
class DjangoPythonCompletionItemProvider extends base_1.DjangoCompletionItemProvider {
    constructor(snippetPrvider) {
        super();
        this.selector = constants_1.PYTHON_SELECTOR;
        this.directory = 'python';
        this.files = ["imports.toml", "utils.toml"];
        this.loadSnippets(snippetPrvider);
    }
}
exports.DjangoPythonCompletionItemProvider = DjangoPythonCompletionItemProvider;
class DjangoAdminCompletionItemProvider extends base_1.DjangoCompletionItemProvider {
    constructor(snippetPrvider) {
        super();
        this.selector = Object.assign({ pattern: '**/admin{**/,}*.py' }, constants_1.PYTHON_SELECTOR);
        this.directory = "admin";
        this.files = ["classes.toml", "imports.toml", "options.toml"];
        this.loadSnippets(snippetPrvider);
    }
}
exports.DjangoAdminCompletionItemProvider = DjangoAdminCompletionItemProvider;
class DjangoFormCompletionItemProvider extends base_1.DjangoCompletionItemProvider {
    constructor(snippetPrvider) {
        super();
        this.selector = Object.assign({ pattern: '**/forms{**/,}*.py' }, constants_1.PYTHON_SELECTOR);
        this.directory = "forms";
        this.files = ["classes.toml", "imports.toml", "fields.toml", "fields-postgres.toml", "methods.toml"];
        this.loadSnippets(snippetPrvider);
    }
}
exports.DjangoFormCompletionItemProvider = DjangoFormCompletionItemProvider;
class DjangoManagerCompletionItemProvider extends base_1.DjangoCompletionItemProvider {
    constructor(snippetPrvider) {
        super();
        this.selector = Object.assign({ pattern: '**/{models,managers,querysets}{**/,}*.py' }, constants_1.PYTHON_SELECTOR);
        this.directory = "models";
        this.files = ["managers.toml"];
        this.loadSnippets(snippetPrvider);
    }
}
exports.DjangoManagerCompletionItemProvider = DjangoManagerCompletionItemProvider;
class DjangoMigrationCompletionItemProvider extends base_1.DjangoCompletionItemProvider {
    constructor(snippetPrvider) {
        super();
        this.selector = Object.assign({ pattern: '**/migrations/**/*.py' }, constants_1.PYTHON_SELECTOR);
        this.directory = "models";
        this.files = ["migrations.toml"];
        this.loadSnippets(snippetPrvider);
    }
}
exports.DjangoMigrationCompletionItemProvider = DjangoMigrationCompletionItemProvider;
class DjangoModelCompletionItemProvider extends base_1.DjangoCompletionItemProvider {
    constructor(snippetPrvider) {
        super();
        this.selector = Object.assign({ pattern: '**/{models,migrations}{**/,}*.py' }, constants_1.PYTHON_SELECTOR);
        this.directory = "models";
        this.files = ["classes.toml", "imports.toml", "fields.toml", "fields-postgres.toml", "methods.toml"];
        this.loadSnippets(snippetPrvider);
    }
}
exports.DjangoModelCompletionItemProvider = DjangoModelCompletionItemProvider;
class DjangoViewCompletionItemProvider extends base_1.DjangoCompletionItemProvider {
    constructor(snippetPrvider) {
        super();
        this.selector = Object.assign({ pattern: '**/views{**/,}*.py' }, constants_1.PYTHON_SELECTOR);
        this.directory = "views";
        this.files = ["classes.toml", "imports.toml", "methods.toml"];
        this.loadSnippets(snippetPrvider);
    }
}
exports.DjangoViewCompletionItemProvider = DjangoViewCompletionItemProvider;
class DjangoTemplatetagsCompletionItemProvider extends base_1.DjangoCompletionItemProvider {
    constructor(snippetPrvider) {
        super();
        this.selector = Object.assign({ pattern: '**/templatetags/**/*.py' }, constants_1.PYTHON_SELECTOR);
        this.directory = "templatetags";
        this.files = ["imports.toml", "methods.toml"];
        this.loadSnippets(snippetPrvider);
    }
}
exports.DjangoTemplatetagsCompletionItemProvider = DjangoTemplatetagsCompletionItemProvider;
class DjangoUrlCompletionItemProvider extends base_1.DjangoCompletionItemProvider {
    constructor(snippetPrvider) {
        super();
        this.selector = Object.assign({ pattern: '**/urls{**/,}*.py' }, constants_1.PYTHON_SELECTOR);
        this.directory = "urls";
        this.files = ["imports.toml", "methods.toml", "regexes.toml"];
        this.loadSnippets(snippetPrvider);
    }
}
exports.DjangoUrlCompletionItemProvider = DjangoUrlCompletionItemProvider;
//# sourceMappingURL=completionItemProvider.js.map