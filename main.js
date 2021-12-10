document.addEventListener('DOMContentLoaded', () => {
  const M = fetch('https://top-250-movies.herokuapp.com/api/v1/movies/top').then((response) => {
    console.log(response);
    return response.json()
  })

  M.then((result) => {
    console.log(result);
  })



})