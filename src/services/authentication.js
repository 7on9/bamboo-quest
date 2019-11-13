import { FETCH_TYPES } from './types'
import { FETCH, MAKE_FROM_BODY } from './fetch';

export const AuthenticationService = {
  login: (email, password) => {
    let formBody = MAKE_FROM_BODY({email, password});
    return FETCH(FETCH_TYPES.POST, "user/login", formBody);
  },
  register: (email, password, name) => {
    let formBody = MAKE_FROM_BODY({email, password, name});
    return FETCH(FETCH_TYPES.POST, "user/register", formBody);
  },
  logout: () => {
    let formBody = MAKE_FROM_BODY({});
    return FETCH(FETCH_TYPES.POST, "user/logout", formBody);
  },
  verify: () => {
    let formBody = MAKE_FROM_BODY({});
    return FETCH(FETCH_TYPES.POST, "user/verify", formBody);
  }
}
