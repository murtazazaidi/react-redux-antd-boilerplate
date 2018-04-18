import { ENCRYPTION_SECRET } from 'configs/constants';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

const KEY = '_storage_name'

export const loadState = () => {
  const serializedState = localStorage.getItem(KEY);
  if (serializedState === null) {
    return undefined;
  }
  const bytes = AES.decrypt(serializedState.toString(), ENCRYPTION_SECRET);
  return JSON.parse(bytes.toString(Utf8));
};

export const saveState = (state) => {
  const serializedState = AES.encrypt(JSON.stringify(state), ENCRYPTION_SECRET);
  localStorage.setItem(KEY, serializedState);
};
