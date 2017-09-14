import { BaseResourceError } from "./BaseResourceError";
/**
 * An error class that can be used to signal that a resource with a specific id already exists
 */
export class ResourceAlreadyExistsError extends BaseResourceError {
    constructor(type, data) {
        super("already exists", type, data);
    }
}
//# sourceMappingURL=ResourceAlreadyExistsError.js.map