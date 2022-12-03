import axios from 'axios'


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'c33f580aa0msh2ba4ba7ea9b975cp1dc45djsn757d824b79a4',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

   return data;
}