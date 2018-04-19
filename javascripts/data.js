let movies = [];
let categories = [];

const getMovies = () => {
  return movies;
};

const setMovies = (movieArray) => {
  movies = movieArray;
};

const setCategories = (categoryArray) => {
  categories = categoryArray;
};

const getCategories = () => {
  return categories;
};

const getcategoriesByMovie = (movieId) => {
  const selectedCategory = [];
  categories.forEach((category) => {
    if (category.id === movieId) {
      selectedCategory.push(category);
    }
  });
  return selectedCategory;
};

module.exports = {
  getMovies,
  setMovies,
  setCategories,
  getCategories,
  getcategoriesByMovie,
};
