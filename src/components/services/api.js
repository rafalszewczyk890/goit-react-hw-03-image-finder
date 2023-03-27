import axios from 'axios';
const API_KEY = '33215953-674c55a945dec9bfe68981b61';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchPhotos = async (searchQuery, page) => {
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};

export default fetchPhotos;
