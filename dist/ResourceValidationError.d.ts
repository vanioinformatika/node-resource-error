import { BaseResourceError } from "./BaseResourceError";
import { ResourceErrorData } from "./ResourceErrorData";
/**
 * An error class that can be used to signal that validation of a resource has failed
 */
export declare class ResourceValidationError extends BaseResourceError {
    constructor(type: string, data: ResourceErrorData);
}
