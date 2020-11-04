export const getGifs = async( category)=>{
    //peticion http en javascript actual
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=VktEg7Up8BjZ4RVV8BD9Il42bcHzt9M3`
    const resp = await fetch (url);
    const {data} =  await resp.json();

    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url:img.images?.downsized_medium.url
        }
    })

    return gifs;
}