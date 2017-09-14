import { BaseResourceError } from "./BaseResourceError";
export class ResourceValidationError extends BaseResourceError {
    constructor(type, data) {
        super("is not valid", type, data);
    }
}
//# sourceMappingURL=ResourceValidationError.js.map