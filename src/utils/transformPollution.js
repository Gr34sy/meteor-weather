export function transformPollution(data){
    console.log(data);
    return {
        co: Math.round(data.list[0].components.co),
        no: Math.round(data.list[0].components.no),
        no2: Math.round(data.list[0].components.no2),
        o3: Math.round(data.list[0].components.o3),
        so2: Math.round(data.list[0].components.so2),
        pm2_5: Math.round(data.list[0].components.pm2_5),
        pm10: Math.round(data.list[0].components.pm2_5),
        nh3: Math.round(data.list[0].components.nh3),
    };
}