import { ResourceErrorData } from "./ResourceErrorData";
export declare class BaseResourceError extends Error {
    readonly type: string;
    readonly data: ResourceErrorData;
    constructor(action: string, type: string, data: ResourceErrorData);
    hasMessage(): boolean;
    getMessage(): string | undefined;
}
