import React, { useState, useEffect } from 'react';
import TmdbApiClient from '../../../client/TmdbApiClient';
import Template from '../../templates/Regular';
import Featured from '../../molecules/Featured';
import List from '../../molecules/List';

const Browser = () => {
  const [originals, setOriginals] = useState(null);
  const [originalFeatured, setOriginalFeatured] = useState(null);
  const [trending, setTrending] = useState(null);
  const [toprated, setTopRated] = useState(null);
  const [movies, setMovies] = useState(null);
  const [series, setSeries] = useState(null);

  useEffect(() => {
    const fetchNetflixOriginals = async () => {
      let responseOriginals = await TmdbApiClient.netflixOriginals();
      const responseFeatured = TmdbApiClient.moreInfoSerie();
      setOriginals(responseOriginals);
      setOriginalFeatured(responseFeatured);

      // Solução original, com o billboard aleatorio
      //const responseFeatured = await TmdbApiClient.moreInfoSerie(responseOriginals[0].id);
      //setOriginals(responseOriginals.shift());
      //setOriginalFeatured(responseFeatured);
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
      { originalFeatured && <Featured item={originalFeatured} /> }
      <Template>
        { originals && <List name='Originais Netflix' list={originals} /> }
        { trending && <List name='Tendência na Semana' list={trending} /> }
        { toprated && <List name='Melhores notas no IMDB' list={toprated} /> }
        { movies && <List name='Filmes' list={movies} /> }
        { series && <List name='Séries' list={series} /> }
      </Template>
    </>
  );
};

export default Browser;
