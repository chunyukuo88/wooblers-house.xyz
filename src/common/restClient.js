import urls from '../urls';

export const fetchJsonData = async (urlString) => {
  try {
    const response = await fetch(urlString)
    return response.json();
  } catch(e) {
    console.error(e)
  }
};

export const getWeatherDatum = async (weatherAttribute) => {
  try {
    const data = await fetchJsonData(urls.openWeatherUrl);
    return getSpecificDataPoint(data, weatherAttribute);
  } catch (e) {
    console.error('fetchWeather() failed:', e.message);
  }
};

const getSpecificDataPoint = (data, weatherAttribute) => {
  return (weatherAttribute === 'temp')
    ? data.main.temp
    : data.main.humidity;
};
