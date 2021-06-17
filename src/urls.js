const urls = {
    captions: process.env.REACT_APP_CAPTIONS,
    githubRepo: process.env.REACT_APP_GITHUB_REPO,
    openWeatherUrl: `https://api.openweathermap.org/data/2.5/weather?q=Columbus,Ohio&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
};

export const getFotoSource = (integer) => `${process.env.REACT_APP_FOTO_SOURCE}/${integer} (Custom).JPG`;

export default urls;
