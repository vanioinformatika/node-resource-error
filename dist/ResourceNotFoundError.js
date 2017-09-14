import { BaseResourceError } from "./BaseResourceError";
/**
 * An error class that can be used to signal that the referenced resource does not exist
 */
export class ResourceNotFoundError extends BaseResourceError {
    constructor(type, data) {
        super("not found", type, data);
    }
}
//# sourceMappingURL=ResourceNotFoundError.js.map