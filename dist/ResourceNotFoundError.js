import { BaseResourceError } from "./BaseResourceError";
export class ResourceNotFoundError extends BaseResourceError {
    constructor(type, data) {
        super("not found", type, data);
    }
}
//# sourceMappingURL=ResourceNotFoundError.js.map