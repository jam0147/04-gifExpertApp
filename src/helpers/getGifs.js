
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vGHT9JheHMCZ2ri3y5IM1fc6nsYPEJaP&limit=10&q=${ encodeURI(category) }`
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.preview_gif.url,
        }
    });

    return gifs;
};