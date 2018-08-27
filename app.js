 // https://api-marcalencc-metacritic-v1.p.mashape.com/movie/{dash-separated-title}/{year}


const movieDBurl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=70934102a0fb0332d5f5caf3d3ba9643&language=en-US&region=US&page=1';
const imageURL = 'http://image.tmdb.org/t/p/w185/'
const movieList = document.getElementById('movieList');
const movies = document.getElementsByClassName('movie');
const rtURL = "";
const mcURL = "";


const request = new XMLHttpRequest();
request.open('GET', movieDBurl, true);
request.onload = function(){
    if(request.status >= 200 && request.status < 400){
        var data = JSON.parse(request.responseText);
        getMovieTitles(data);
        getMovieImages(data);
        getMovieDesc(data);
        createRatingsList(data);
        console.log(data);
    } else{
        console.error(request.statusText);
    }
}
request.onerror = function(){
    console.log('error');
}

request.send();



function getMovieTitles(data){    
    for(var i = 0; i < data.results.length; i++){
        var movie = document.createElement('li');
        var movie_header = document.createElement('h2');
        var title = document.createTextNode(data.results[i].title);
        movie_header.appendChild(title);
        movie.className = 'movie';
        movie.appendChild(movie_header);
        movieList.appendChild(movie);
        
    }
}


function getMovieImages(data){
    for(var i = 0; i < movies.length; i++){
        var imageDiv = document.createElement('div');
        var img = document.createElement('img');
        img.src = imageURL + data.results[i].poster_path;
        movies[i].appendChild(img);
    
    }
}

function getMovieDesc(data){
    for(var i = 0; i < movies.length; i++){
        var desc = document.createElement('p');
        var text = document.createTextNode(data.results[i].overview);
        desc.appendChild(text);
        movies[i].appendChild(desc);
    }
}


function createRatingsList(){

    for(var i = 0; i < movies.length; i++){
        var ratingDiv = document.createElement('div');
        var list = document.createElement('ul');
        movies[i].appendChild(ratingDiv);
        ratingDiv.className = 'ratings-block';
        document.getElementsByClassName('ratings-block')[i].appendChild(list);
        list.className = 'ratings-list';
    }
}

function rottentomatoes(){

}

function metacritic(){

}