import urls from '../urls';

const { log, error } = console;

export const fetchJsonData = async (urlString) => {
  return await fetch(urlString)
    .then(res => res.json()
    .catch(err => error(err)));
};

export const getWeatherDatum = async (weatherAttribute) => {
  try {
    const data = await fetchJsonData(urls.openWeatherUrl);
    log(data);
    return getSpecificDataPoint(data, weatherAttribute);
  } catch (e) {
    error('fetchWeather() failed:', e.message);
  }
};

const getSpecificDataPoint = (data, weatherAttribute) => {
  return (weatherAttribute === 'temp')
    ? data.main.temp
    : data.main.humidity;
};
