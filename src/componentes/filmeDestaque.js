import React from 'react';
import './filmeDestaque.css';


export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);

    }
    return (
        <section className="destaque" style={{

            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
           <div className="vertical">
           <div className="horizontal">
               <div className="nomeeFilme">
                   {item.original_name}
               </div>
               <div className="Informa">
                   <div className="pontos">{item.vote_average}</div>
                   <div className="ano">{firstDate.getFullYear()}</div>
                   <div className="Temporada">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's': ''}</div>
               </div>
               <div className="descrição">{item.overview}</div>
               <div className="botoes">
                   <a className="but" href={`/watch/${item.id}`}>Assistir</a>
                   <a className="but" href={`/list/add/${item.id}`}>+ Minha Lista</a>

               </div>
               <div className="generos"><strong>Gêneros:</strong> {genres.join(', ')}</div>
           </div>
           </div>
           
        </section>

    );
};