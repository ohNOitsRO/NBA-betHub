let currentDate = dayjs().format('YYYY-MM-DD');
let dateDisplay = dayjs().format('MM/DD/YYYY');
let todayDate = document.querySelector("#current-date");
let homeTeam = document.querySelector("#team_1");
let awayTeam = document.querySelector("#team_2");
let homeScore = document.querySelector("#points_1");
let awayScore = document.querySelector("#points_2");
let mainBox = document.querySelector("#main-text");

todayDate.textContent = dateDisplay;

// Get All NBA Basketball games data
function getGames(){
    fetch ("https://v1.basketball.api-sports.io/games?league=12&season=2022-2023&timezone=America/New_York&date=" + currentDate, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "v1.basketball.api-sports.io",
		    "x-rapidapi-key": "899ae7af4ff633f8e77f19cb19037169"
	    }

    })

    .then(response => {
        return response.json();
    
    })

    .then (function(data) {
        console.log(data);

        for (i=0; i < data.response.length - 1; i++){

            homeTeam.textContent = data.response[i].teams.home.name;
            awayTeam.textContent = data.response[i].teams.away.name;

            if (data.response[i].scores.home.total && data.response[i].scores.away.total === null){
                homeScore.textContent = "0";
                awayScore.textContent = "0";
            }

            homeScore.textContent = data.response[i].scores.home.total;
            awayScore.textcontent = data.response[i].scores.away.total;

        }

    })

    .catch(err => {
	    console.log(err);

    });

}

// Generate Random NBA Basketball gif and live scores
function getGifApi(){
    fetch ("https://api.giphy.com/v1/gifs/search?api_key=F6a8XYTRkUMdxsTcwsoz13tuoKcObSik&q=nba-basketball&limit=25&offset=0&rating=pg-13&lang=en")
    
    .then(response => {
            return response.json();
        	
    })

    .then(data => {
            var gif = document.querySelector("#gif-container");
            gif.src = data.data[Math.floor(Math.random() * 25)].images.original.url;
            
        $(".material-icons").click(function(event){
            event.preventDefault();
            getGames();
            gif.src = data.data[Math.floor(Math.random() * 25)].images.original.url;

        });
           
    })

    .catch(err => {
        console.log(err);

    });

}


$("#standings").click(function(event){
    event.preventDefault();

    mainBox.style.display = "flex";
    mainBox.innerHTML = "";
    mainBox.textContent = "COMING SOON!"
    

});

$("#odds").click(function(event){
    event.preventDefault();
    
    mainBox.style.display = "flex";
    mainBox.innerHTML = "";
    mainBox.textContent = "COMING SOON!"
    

});


getGifApi();