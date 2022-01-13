import React, {useState} from 'react';
import './movierow.css';


export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(-400);

    const voltar = () => {
        let x = scrollX + 200;
        if(x > 0){
            x = 0;

        }
        setScrollX(x);

    }

    const vai = () => {
        let x = scrollX - 200;
        let litata = items.results.length * 150;
        if((window.innerWidth - litata) > x){
            x = (window.innerWidth - litata) - 650;

        }
        setScrollX(x);

    }
    return (
        <div className="moviee">
            <h2>{title}</h2>
            <div className="antes" onClick={voltar}>
                <img src="https://img.icons8.com/ios-filled/50/white/back.png"/>
           
            </div>
            <div className="next" onClick={vai}>
                <img src="https://img.icons8.com/external-becris-lineal-becris/50/000000/external-next-mintab-for-ios-becris-lineal-becris.png"/>
                
            </div>
            <div className="movierow--listarea">
                <div className="movierow--list" style={{marginLeft: scrollX,
                width: items.results.length * 200}}>
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key} className="movierow--item">
                          <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                    </div>
              
            ))}

                </div>
           

        </div>
        </div>
       
    )
}
   