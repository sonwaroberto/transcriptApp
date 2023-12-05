import axios from 'axios';
import {WalletApis} from '../api/wallet/WalletApis';

export default class WalletServices {
  public async addWalletService(body: any) {
    const response = await axios.post(WalletApis.addWallet, body);
    return response?.data;
  }

  public async removeWalletService(walletId: string) {
    const response = await axios.delete(`${WalletApis.addWallet}/${walletId}`);
    return response?.data;
  }

  public async getWalletService(walletId: string) {
    const response = await axios.get(`${WalletApis.addWallet}/${walletId}`);
    return response?.data;
  }
}
