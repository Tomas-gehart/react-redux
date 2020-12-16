export const fetchUserchannelss = () => {
    return $.ajax({
        url: `/api/user_channelss/`,
    });
};

export const createUserchannels = (userchannels) => {
    return $.ajax({
        url: `/api/user_channelss/`,
        method: 'POST',
        data: { userchannels }
    });
};