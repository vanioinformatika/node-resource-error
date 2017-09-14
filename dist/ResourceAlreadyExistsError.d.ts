import { BaseResourceError } from "./BaseResourceError";
import { ResourceErrorData } from "./ResourceErrorData";
export declare class ResourceAlreadyExistsError extends BaseResourceError {
    constructor(type: string, data: ResourceErrorData);
}
