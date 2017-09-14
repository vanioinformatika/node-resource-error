import { BaseResourceError } from "./BaseResourceError";
import { ResourceErrorData } from "./ResourceErrorData";
/**
 * An error class that can be used to signal that a resource to be updated has been concurrently modified
 */
export declare class ResourceConcurrentlyModifiedError extends BaseResourceError {
    constructor(type: string, data: ResourceErrorData);
}
