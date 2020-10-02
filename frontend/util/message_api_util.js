export const createMessage = (message) => (
    $.ajax({
        method: "POST",
        url: "api/message",
        data: {message: message}
    })
);