const moviesItemOutputDiv = document.getElementById('content-div');

const domString = (movies) => {
  let domStrang = '';
  movies.forEach((movie) => {
    domStrang += `<div class="col-sm-3 movies">`;
    domStrang += `<h3 class="movie-title" data-movie-id="${movie.id}">${movie.name}</h3>`;
    domStrang += `<h3 class="movie-cost" src="${movie.cost}"></h3>`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printMoviesToDom = (movies) => {
  moviesItemOutputDiv.innerHTML = domString(movies);
};

module.exports = printMoviesToDom;
