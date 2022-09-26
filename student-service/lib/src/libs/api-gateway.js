export const successResponse = (response) => {
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
};
export const clientErrorResponse = (response) => {
    return {
        statusCode: 400,
        body: JSON.stringify(response)
    };
};
//# sourceMappingURL=api-gateway.js.map