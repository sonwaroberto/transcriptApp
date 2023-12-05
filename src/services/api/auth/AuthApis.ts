// import {REACT_NATIVE_APP_BASE_URL as BASE_URL} from '@env';
const BASE_URL = 'http://localhost:5001/api';
export const AuthApis = {
  login: BASE_URL + '/auth/signin',
  register: BASE_URL + '/auth/signup',
  updateUserInfo: BASE_URL + '/users/me/edit',
  getUserProfile: BASE_URL + '/users/me',
  forgotPassword: BASE_URL + '/auth/forgot-password',
};
