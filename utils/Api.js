import axios from 'axios';

const baseUrl = 'https://bayut.p.rapidapi.com';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '0030879367msh58999b1dc0c8d38p171b92jsn40e939d8b667',
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

export const searchPropertiesLocation = async query => {
  const { data } = await axiosInstance.get('auto-complete', {
    params: {
      query,
    },
  });
  return data;
};

export const getPropertyDetails = async id => {
  const { data } = await axiosInstance.get('properties/detail', {
    params: {
      externalID: id,
    },
  });
  return data;
};
