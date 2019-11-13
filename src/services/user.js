import { FETCH_TYPES } from './types'
import { FETCH, MAKE_FROM_BODY } from './fetch';

export const UserService = {
  getAllUsers: () => {
    return FETCH(FETCH_TYPES.GET, "user/", null);
  },
  getMeetingUsers: (idMeeting) => {
    return FETCH(FETCH_TYPES.GET, "user/" + idMeeting, null);
  },
  getUser: (idUser) => {
    return FETCH(FETCH_TYPES.GET, "user/" + idUser, null);
  },
  register: (newUser) => {
    let formBody = MAKE_FROM_BODY({
      newUser: JSON.stringify(newUser)
    });
    return FETCH(FETCH_TYPES.POST, "user/", formBody);
  },
  deleteUser: (idUser) => {
    let formBody = MAKE_FROM_BODY({
      idUser: idUser
    });
    return FETCH(FETCH_TYPES.POST, "user/delete", formBody);
  },
}
