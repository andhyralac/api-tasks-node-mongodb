const { response } = require('express')

const HttpStatus = {
    OK: 200,
    CREATE: 201,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    INTERNAL_SERVER_ERROR: 500
}


const Ok = (res = response, data) => {
    return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        statusMsg: 'Success',
        data: data
    })
}

const Create = (res = response, data) => {
    return res.status(HttpStatus.CREATE).json({
        status: HttpStatus.CREATE,
        statusMsg: 'Success',
        data: data
    })
}

const NotFound = (res = response, data) => {
    return res.status(HttpStatus.NOT_FOUND).json({
        status: HttpStatus.NOT_FOUND,
        statusMsg: 'Not Found',
        error: data
    })
}

const Unauthorized = (res = response, data) => {
    return res.status(HttpStatus.UNAUTHORIZED).json({
        status: HttpStatus.UNAUTHORIZED,
        statusMsg: "Unauthorized",
        error: data,
    })
}

const Forbidden = (res = response, data) => {
    return res.status(HttpStatus.FORBIDDEN).json({
        status: HttpStatus.FORBIDDEN,
        statusMsg: "Forbidden",
        error: data,
    });
}


const Error = (res = response, data) => {
    console.error(data);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        statusMsg: "Internal server error",
    });
}


module.exports = {
    Ok,
    Create,
    NotFound,
    Unauthorized,
    Forbidden,
    Error
}