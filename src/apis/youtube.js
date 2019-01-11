import axios from 'axios';

const KEY = 'AIzaSyB5txLZnIiFDJ1KR1xmpLxApqto92vT3Ic';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY  
  }
});