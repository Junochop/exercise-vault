const loadMovies = require('./movies');
const loadCategories = require('./categories');
const moviesDom = require('./moviesDom');
const data = require('./data');

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  console.log(categoriesData);
  data.setCategories(categoriesData);
};

const whenMoviesLoad = function () {
  const moviesData = JSON.parse(this.responseText)['movie-elements'];
  console.log(moviesData);
  data.setMovies(moviesData);
  moviesDom(moviesData);
};

const errorFunction = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadMovies(whenMoviesLoad, errorFunction);
  loadCategories(whenCategoriesLoad, errorFunction);
};

module.exports = {
  initializer,
};
