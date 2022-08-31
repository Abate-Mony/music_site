class ErrorHandler extends Error {
    constructor(message, status) {
        super(message)
        this.message = message
        this.status = status
    }
}
const initError = (message, status) => {
    return new ErrorHandler(message, status)
}
module.exports = {
    ErrorHandler,
    initError
}