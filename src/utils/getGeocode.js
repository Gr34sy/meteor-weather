export async function getGeocode(value){
    try{
        const geocodeRes = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=${process.env.API_KEY}`);

        if(!geocodeRes.ok){
            throw new Error(geocodeRes.message);
        }

        const geocode = await geocodeRes.json();
        console.log(geocode);

        return geocode;

    } catch(e){
        return console.log('API request failed');
    }
}