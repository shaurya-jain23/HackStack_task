const API_KEY = 'api_key=b5dde7a3a2519941ef5f2482f3b1c96c';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const API_URL = BASE_URL + '/discover/movie?sort_by=population.desc&'+API_KEY;
// const searchURL = BASE_URL + '/search/movie?' +API_KEY;
const main= document.getElementById('movie');
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // showmovies(data.results);
    })
    .then(data => {
        data.sort(function(a,b){
          return b.points-a.points;
        })
        for(let val = 0 ;val<data.length; val++) {
          const name = data[val].title;
        //   const points = data[val].points;
        //   const avatar = data[val].avatar;
        
          console.log(val)
        //   document.getElementById(`box${val+1}score`).innerHTML = points;
          document.getElementById(`box${val+1}pname`).innerHTML = title;
        //   document.getElementById(`box${val+1}`).style.backgroundImage = `url(${avatar})`;
          
          // Do whatever you want with the details
          console.log('Name:', title);
        //   console.log('Points:', points);
        //   console.log('Avatar:', avatar);
          console.log('---');
        };
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });


