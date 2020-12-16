export const fetchchannels = () => {
  return $.ajax({
    url: `/api/channels/`,
  });
};

export const fetchchannel = (id) => {
  return $.ajax({
    url: `/api/channels/${id}`,
  });
};

export const createchannel = (channels) => {
  return $.ajax({
    url: `/api/channels/`,
    method: "POST",
    data: { channels },
  });
};

export const editchannel = (id) => {
  return $.ajax({
    url: `/api/channels/${channels.id}`,
    method: "PATCH",
    data: { channels },
  });
};

export const removechannel = (id) => {
  return $.ajax({
    url: `/api/channels/${id}`,
    method: "DELETE",
  });
};
