
const Api_key = 'a37b558536448958d51ac4715e8c81d8'
const Api_base = 'https://api.themoviedb.org/3'


const basicfetch = async (endpoint) => {
    const req = await fetch (`${Api_base}${endpoint}`)
    const json = await req.json()
    return json;

}

export default{
     getHomelist: async () => {
         return [
             {
                 slug: 'Originals',
                 title: 'Originais Netflix',
                 items: await basicfetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${Api_key}`)
                
             },
             {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicfetch(`/trending/all/week?language=pt-BR&api_key=${Api_key}`)
            },
            {
                slug: 'topreated',
                title: 'Em Alta',
                items: await basicfetch(`/movie/top_rated?language=pt-BR&api_key=${Api_key}`)
            },
            {
                slug: 'action',
                title: 'Filmes de Ação',
                items: await basicfetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${Api_key}`)
            },
            {
                slug: 'comedy',
                title: 'Filmes de comédia',
                items: await basicfetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${Api_key}`)
            },
            {
                slug: 'horror',
                title: 'Filmes de Terror',
                items: await basicfetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${Api_key}`)
            },
            {
                slug: 'Romance',
                title: 'Filmes de Romance',
                items: await basicfetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${Api_key}`)
            },
            {
                slug: 'documentary',
                title: 'Filmes de comédia',
                items: await basicfetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${Api_key}`)
            },
            
         ]
     },

     getMovieInfo: async (movieId, type) => {

        let info = {};
        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicfetch(`/movie/${movieId}?language=pt-BR&api_key=${Api_key}`)
    
                    break;
    
                case 'tv':
                    info = await basicfetch(`/tv/${movieId}?language=pt-BR&api_key=${Api_key}`)
    
                    break;
                default:
                    info = null;
                     break;
    
            }
        }
        return info;
    }
}

