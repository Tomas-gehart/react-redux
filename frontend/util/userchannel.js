export const fetchUserrooms = () => {
    return $.ajax({
        url: `/api/user_rooms/`,
    });
};

export const createUserroom = (userroom) => {
    return $.ajax({
        url: `/api/user_rooms/`,
        method: 'POST',
        data: { userroom }
    });
};