function fetchImages(newQuery, queryPage) {
  return fetch(
    `https://pixabay.com/api/?q=${newQuery}&page=${queryPage}&key=23459903-45cdb2e5cfc763a2eaddc7311&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Image ${newQuery} not found`));
  });
}

const api = {
  fetchImages,
};

export default api;
