import {ResponseError} from "../error/response-error.js";

const validate = (schema, request) => {
    const result = schema.validate(request, {
        // klo mau d validate smua ketika validate. biar smua validasi keluarnya
        abortEarly: false,
        // jika d reject field yg tidak d ketahui
        allowUnknown: false
    })
    if (result.error) {
        throw new ResponseError(400, result.error.message);
    } else {
        return result.value;
    }
}

export {
    validate
}
