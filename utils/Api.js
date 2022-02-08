import axios from 'axios';

const baseUrl = 'https://bayut.p.rapidapi.com';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': 'd7eced58a5mshf3cffed5507f39bp1fd8c2jsn691be238951f',
  },
});

export const getProperties = async query => {
  const { data } = await axiosInstance.get('properties/list', {
    params: {
      locationExternalIDs: query.locationExternalIDs || 5002,
      ...query,
    },
  });
  return data;
};
