import axios from 'axios';
import {AuthApis} from '../api/auth/AuthApis';
import {LoginDataType, RegisterDataType} from '../../interface/auth/AuthTypes';
import storage from '../../utils/storage';

export default class AuthSerivces {
  public async loginService(body: LoginDataType) {
    const response = await axios.post(AuthApis.login, body);
    return response?.data;
  }

  public async registerService(body: RegisterDataType) {
    const response = await axios.post(AuthApis.register, body);
    return response?.data;
  }

  public async forgotPasswordService(body: {matricule: string}) {
    const response = await axios.post(AuthApis.forgotPassword, body);
    return response?.data;
  }
  public async loadUserService() {
    let user = await storage.load('@user');
    return user;
  }
}

// const uploadFile = async (url: string, file: any, config: any) => {
//   const formData = new FormData();
//   formData.append('file', {
//     uri: file?.uri,
//     name: file?.fileName,
//     type: file?.type,
//   });

//   return axios.post(url, formData, config);
// };
