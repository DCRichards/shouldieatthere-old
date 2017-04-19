import axios from 'axios';

axios.defaults.baseURL = 'http://api.ratings.food.gov.uk';
axios.defaults.headers.common['x-api-version'] = '2';

/* eslint import/prefer-default-export: 0 */
export function getEstablishment(name, location) {
  return axios.get(`Establishments?name=${name}&address=${location}`);
}
