import { BaseResourceError } from "./BaseResourceError";
import { ResourceErrorData } from "./ResourceErrorData";
export declare class ResourceValidationError extends BaseResourceError {
    constructor(type: string, data: ResourceErrorData);
}
