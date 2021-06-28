import urls from "../urls";

export const fetchJsonData = async (urlString) => {
  return await fetch(urlString)
    .then(res => res.json()
    .catch(err => console.error(err)));
};

export async function fetchWeather(weatherAttribute) {
  try {
    const data = await fetch(urls.openWeatherUrl)
      .then(res => res.json())
      .catch(e => console.error(e.message));
    const result = (weatherAttribute === 'temp')
      ? data.main.temp
      : data.main.humidity;
    return result;
  } catch (e) {
    console.error('fetchWeather() failed', e.message);
  }
}
