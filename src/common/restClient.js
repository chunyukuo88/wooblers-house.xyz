export const fetchJsonData = async (urlString) => {
  return await fetch(urlString)
    .then(res => res.json()
    .catch(err => console.error(err)));
};
