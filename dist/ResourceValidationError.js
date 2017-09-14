import { BaseResourceError } from "./BaseResourceError";
/**
 * An error class that can be used to signal that validation of a resource has failed
 */
export class ResourceValidationError extends BaseResourceError {
    constructor(type, data) {
        super("is not valid", type, data);
    }
}
//# sourceMappingURL=ResourceValidationError.js.map