import React, { useState, useEffect } from 'react';
import TmdbApiClient from '../../../client/TmdbApiClient';
import Template from '../../templates/Regular';
import Featured from '../../molecules/Featured';
import List from '../../molecules/List';

const Browser = () => {
  const [originals, setOriginals] = useState([]);
  const [originalFeatured, setOriginalFeatured] = useState([]);
  const [trending, setTrending] = useState([]);
  const [toprated, setTopRated] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchNetflixOriginals = async () => {
      let responseOriginals = await TmdbApiClient.netflixOriginals();
      const responseFeatured = await TmdbApiClient.moreInfoSerie(responseOriginals[0].id);
      setOriginals(responseOriginals.shift());
      setOriginalFeatured(responseFeatured);
    };
    fetchNetflixOriginals();

    const fetchTrending = async () => {
      const response = await TmdbApiClient.trendingOnWeek();
      setTrending(response);
    };
    fetchTrending();

    const fetchTopRated = async () => {
      const response = await TmdbApiClient.topRated();
      setTopRated(response);
    };
    fetchTopRated();

    const fetchMovies = async () => {
      const response = await TmdbApiClient.movies();
      setMovies(response);
    };
    fetchMovies();

    const fetchSeries = async () => {
      const response = await TmdbApiClient.series();
      setSeries(response);
    };
    fetchSeries();
  }, []);

  return (
    <>
      <Featured item={originalFeatured} />
      <Template>
        <List name='Originais Netflix' list={originals} />
        <List name='Tendência na Semana' list={trending} />
        <List name='Melhores notas no IMDB' list={toprated} />
        <List name='Filmes' list={movies} />
        <List name='Séries' list={series} />
      </Template>
    </>
  );
};

export default Browser;
