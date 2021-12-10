document.addEventListener('DOMContentLoaded', () => {
  const M = fetch('https://top-250-movies.herokuapp.com/api/v1/movies/top').then((response) => {
    console.log(response);
    return response.json()
  })

  M.then((result) => {
    // console.log(result);
    result.forEach((movie_info) => {
      // console.log(movie_info);
      const body = document.querySelector('.styled-table')
      body.innerHTML += `
      <tr>
        <td>${movie_info.rank}</td>
        <td>${movie_info.title}</td>
        <td>${movie_info.year}</td>
        <td>${movie_info.director}</td>
        <td>${movie_info.main_stars}</td>
        <td>${movie_info.rating}</td>
      </tr> 
      `
    })
  })



})
