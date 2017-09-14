import {BaseResourceError} from "./BaseResourceError"
import {ResourceErrorData} from "./ResourceErrorData"

/**
 * An error class that can be used to signal that a resource with a specific id already exists
 */
export class ResourceAlreadyExistsError extends BaseResourceError {
    constructor(type: string, data: ResourceErrorData) {
        super("already exists", type, data)
    }
}
