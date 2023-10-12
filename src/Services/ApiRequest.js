import axios from 'axios';
import { constants } from '../constraints';
import  {API_BASE_URL} from '../constraints/Dimentions'
const Headers = {
  Header: {
    'Content-Type': 'application/json',
  },
  Header2: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
};

export const profile = async (uid) => {
  let data = new FormData();
  data.append('type', 'get_data');
  data.append('table_name', 'users');
  data.append('id', uid);
  try {
    const response = await axios.post(API_BASE_URL,
      data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  }
  catch (error) {
    console.error('Error to get notification', error);
    throw error;
  }

}
const ApiRequest = async data => {
  // This will remove authorization and store id
  const result = await axios.post(API_BASE_URL, data, {
    headers: Headers.Header2,
  });
  return result;
};
export const GetApiRequest = async (url, Apidata) => {
  // This will remove authorization and store id
  const result = await axios.get(constants.baseUrl + url, Apidata, {
    headers: Headers.Header2,
  });
  return result;
};

export default ApiRequest;

export const GetPlaceName = async (myLat, myLon) => {
  try {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${myLat},${myLon}&key=${constants.GOOGLE_API_KEY}`,
    );
    return res
  } catch (error) { console.log(error) }
};