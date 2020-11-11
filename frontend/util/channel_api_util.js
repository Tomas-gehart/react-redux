export const fetchrooms = () => {
  return $.ajax({
    url: `/api/rooms/`,
  });
};

export const fetchroom = (id) => {
  return $.ajax({
    url: `/api/rooms/${id}`,
  });
};

export const createroom = (room) => {
  return $.ajax({
    url: `/api/rooms/`,
    method: "POST",
    data: { room },
  });
};

export const editroom = (id) => {
  return $.ajax({
    url: `/api/rooms/${room.id}`,
    method: "PATCH",
    data: { room },
  });
};

export const removeroom = (id) => {
  return $.ajax({
    url: `/api/rooms/${id}`,
    method: "DELETE",
  });
};
