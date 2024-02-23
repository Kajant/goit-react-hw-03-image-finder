import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
const API_KEY = '37043269-bb47305c6baa743caf5a51673';

export default async function requestAxios(query, page, perPage) {
  axios.defaults.params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: page,
  };
  const response = await axios.get(`api/`);
  const data = await response.data;
  return data;
}