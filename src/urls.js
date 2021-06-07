const openWeatherApiKey = 'eb366c82727f387afc53658766e245e8';

const urls = {
    captions: `https://woobler-photos.s3.amazonaws.com/captions.txt`,
    githubRepo: 'https://github.com/chunyukuo88/Brothaus',
    openWeatherUrl: 'https://api.openweathermap.org/data/2.5/weather?q=Columbus,Ohio&appid=' + openWeatherApiKey,
};

export const getFotoSource = (integer) => `https://woobler-photos.s3.amazonaws.com/${integer} (Custom).JPG`;

export default urls;