import { BaseResourceError } from "./BaseResourceError";
export class ResourceAlreadyExistsError extends BaseResourceError {
    constructor(type, data) {
        super("already exists", type, data);
    }
}
//# sourceMappingURL=ResourceAlreadyExistsError.js.map