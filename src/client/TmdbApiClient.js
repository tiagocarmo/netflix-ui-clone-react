import axios from 'axios';
import shuffle from '../utils/shuffle';
import supernatural from './supernatural.json';

const API_KEY = '4cb6df1ef97d71ce804aa322eafbcd0d';
const NETWORK_ID = 213;

const API_URL = 'https://api.themoviedb.org/3';

// Para publicar no github, favor usar a const abaixo
// const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3';
// Assim evita o erro de mixing content (falta do HTTPS na API)

const config = `with_network=${NETWORK_ID}&language=pt-BR&api_key=${API_KEY}`;

class TmdbApiClient {
  _getHttpClient() {
    const httpClient = axios.create({
      baseURL: API_URL
    });
    httpClient.defaults.responseType = 'json';
    return httpClient;
  }

  netflixOriginals = async () => {
    const httpClient = this._getHttpClient();
    const response = await httpClient.get(`/discover/tv/?${config}`);
    return shuffle(response.data.results);
  };

  trendingOnWeek = async () => {
    const httpClient = this._getHttpClient();
    const response = await httpClient.get(`/trending/all/week?${config}`);
    return shuffle(response.data.results);
  };

  topRated = async () => {
    const httpClient = this._getHttpClient();
    const response = await httpClient.get(`/movie/top_rated?${config}`);
    return shuffle(response.data.results);
  };

  movies = async () => {
    const httpClient = this._getHttpClient();
    const response = await httpClient.get(`/discover/movie?${config}`);
    return shuffle(response.data.results);
  };

  series = async () => {
    const httpClient = this._getHttpClient();
    const response = await httpClient.get(`/discover/tv?${config}`);
    return shuffle(response.data.results);
  };

  moreInfoSerie = () => {// id
    //const httpClient = this._getHttpClient();
    //const response = await httpClient.get(`/tv/${id}?${config}`);
    //return response.data;
    //return JSON.stringify(supernatural);
    return {
      name: supernatural.name,
      overview: supernatural.overview,
      backdrop_path: supernatural.backdrop_path,
      poster_path: supernatural.poster_path
    };
  };
}

export default new TmdbApiClient();
