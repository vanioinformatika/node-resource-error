export class BaseResourceError extends Error {
    constructor(action, type, data) {
        super(`Resource with "${type}" ${action}. Data: ${JSON.stringify(data)}`);
        this.type = type;
        this.data = data;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
    hasMessage() {
        return this.data.hasOwnProperty("message");
    }
    getMessage() {
        return this.hasMessage() ? this.data.message : undefined;
    }
}
//# sourceMappingURL=BaseResourceError.js.map