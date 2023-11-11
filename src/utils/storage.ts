import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24 * 365, // 1 year
  enableCache: true,
  sync: {},
});

export default {
  storeInfo: (key: string, data: any) => {
    storage.save({
      key: key,
      data: data,
      expires: 1000 * 3600 * 24 * 5 * 100,
    });
  },
  load: async (key: string) => {
    try {
      const value = await storage.load({key: key});
      return value;
    } catch (error) {
      if (error) {
        return null;
      }
      throw error;
    }
  },
  remove: async (key: string) => {
    try {
      await storage.remove({key: key});
    } catch (e) {
      // console.log(e);
      throw e;
    }
  },
};
