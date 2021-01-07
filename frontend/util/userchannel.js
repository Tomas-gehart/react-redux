export const fetchUser = () => {
    return $.ajax({
        url: `/api/user_channels/`,
    });
};

export const createUserchannels = (userchannels) => {
    return $.ajax({
        url: `/api/user_channels/`,
        method: 'POST',
        data: { userchannels }
    });
};