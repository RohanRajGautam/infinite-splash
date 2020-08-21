const key = '?client_id=2bSEzlBpFNe-kyUzTXyU8-J9-rcxqP7F4P0PEQW3URU';

const URL = 'https://api.unsplash.com/photos/';

const fetchImages = async (page) => {
  const response = await fetch(`${URL}${key}&per_page=6&page=${page}`);
  const data = await response.json();

  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchImageStats = async (id) => {
  const response = await fetch(`${URL}${id}/statistics/${key}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchImages, fetchImageStats };
