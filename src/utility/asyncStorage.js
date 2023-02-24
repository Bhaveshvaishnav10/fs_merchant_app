import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ADDRESS_ONE_SS,
  ADDRESS_TWO_SS,
  AUTH_TOKEN_SS,
  CITY_SS,
  CLIENT_HASHID_SS,
  DOB_SS,
  EMAIL_SS,
  ENTITYID_SS,
  FIRST_NAME_SS,
  GENDER_SS,
  LAST_NAME_SS,
  MOBILE_NUMBER_SS,
  PAN_NUMBER_SS,
  PINCODE_SS,
  STATE_SS,
} from './valueConstants';

export const storeAsyncStorageData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, String(value));
  } catch (e) {
    // saving error
  }
};

export const getAsyncStorageData = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch (e) {
    // saving error
  }
};

export const removeAyncStorageItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // saving error
  }
};

export const removeAllAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // saving error
  }
};

export const userDetailsSet = async data => {
  await storeAsyncStorageData(FIRST_NAME_SS, data?.firstName);
  await storeAsyncStorageData(LAST_NAME_SS, data?.lastName);
  await storeAsyncStorageData(GENDER_SS, data?.gender);
  await storeAsyncStorageData(PAN_NUMBER_SS, data?.pan);
  await storeAsyncStorageData(DOB_SS, JSON.stringify(data?.dob));
  await storeAsyncStorageData(MOBILE_NUMBER_SS, data?.mobileNumber);
  await storeAsyncStorageData(EMAIL_SS, data?.email);

  await storeAsyncStorageData(CITY_SS, data?.city);
  await storeAsyncStorageData(STATE_SS, data?.state);
  await storeAsyncStorageData(PINCODE_SS, data?.pincode);
  await storeAsyncStorageData(ADDRESS_ONE_SS, data?.address1);
  await storeAsyncStorageData(ADDRESS_TWO_SS, data?.address2);
  await storeAsyncStorageData(DOB_SS, data?.dob);
  await storeAsyncStorageData(ENTITYID_SS, data?.entityId);
};
