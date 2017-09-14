import {ResourceErrorData} from "./ResourceErrorData"

export class BaseResourceError extends Error {
    public readonly type: string

    public readonly data: ResourceErrorData

    constructor(action: string, type: string, data: ResourceErrorData) {
        super(`Resource with "${type}" ${action}. Data: ${JSON.stringify(data)}`)
        this.type = type
        this.data = data
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor)
    }

    public hasMessage(): boolean {
        return this.data.hasOwnProperty("message")
    }

    public getMessage(): string | undefined {
        return this.hasMessage() ? this.data.message : undefined
    }
}
