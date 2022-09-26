import { successResponse } from "@libs/api-gateway";
const greeting = async (event) => {
    return successResponse({
        message: "Hello from SLS based lambda",
    });
};
export const main = greeting;
//# sourceMappingURL=handler.js.map