import React, {useEffect, useState} from "react";
import './App.css'
import Tmdb from './tmdb';
import Movierow from './componentes/movierow'
import FilmeDestaque from './componentes/filmeDestaque'
import Header from './componentes/header'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomelist();
      setMovieList(list);

      let Originals = list.filter(i=>i.slug === 'Originals')
      let randomChosen = Math.floor(Math.random() * (Originals[0].items.results.length -1))
      let chosen = Originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);

    }
    loadAll();

  }, [])


  return(
    <div className="Page">

      <Header />

      {featuredData && 
      <FilmeDestaque item={featuredData}/>}

      <section className="lists">
        {movieList.map((item, key)=>(
          <Movierow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      
    </div>
  );
}