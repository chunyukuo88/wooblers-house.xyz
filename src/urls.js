const urls = {
    captions: process.env.REACT_APP_CAPTIONS,
    githubRepo: process.env.REACT_APP_GITHUB_REPO,
    openWeatherUrl: `https://api.openweathermap.org/data/2.5/weather?q=Westerville,Ohio&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
};

export default urls;
