import { BaseResourceError } from "./BaseResourceError";
/**
 * An error class that can be used to signal that a resource to be updated has been concurrently modified
 */
export class ResourceConcurrentlyModifiedError extends BaseResourceError {
    constructor(type, data) {
        super("concurrently modified", type, data);
    }
}
//# sourceMappingURL=ResourceConcurrentlyModifiedError.js.map