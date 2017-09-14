import { BaseResourceError } from "./BaseResourceError";
import { ResourceErrorData } from "./ResourceErrorData";
/**
 * An error class that can be used to signal that the referenced resource does not exist
 */
export declare class ResourceNotFoundError extends BaseResourceError {
    constructor(type: string, data: ResourceErrorData);
}
