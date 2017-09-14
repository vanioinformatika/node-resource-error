import { BaseResourceError } from "./BaseResourceError";
import { ResourceErrorData } from "./ResourceErrorData";
export declare class ResourceNotFoundError extends BaseResourceError {
    constructor(type: string, data: ResourceErrorData);
}
