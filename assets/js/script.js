var currentDate = dayjs().format('YYYY-MM-DD');
var dateDisplay = dayjs().format('MM/DD/YYYY');
var liveScores = document.querySelector("#live-scores");
var todayDate = document.querySelector("#current-date");

// todayDate.textContent = dateDisplay;

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
        for (i=0; i < data.response.length - 1; i++){
            var p = document.createElement("p");
            var line = document.createElement("li");

            p.setAttribute("id", "teamnames"+i);
            liveScores.appendChild(p);
            var teamNames = document.querySelector("#teamnames"+i)

            line.setAttribute("id", "game"+i);
            liveScores.appendChild(line);
            var gameScores = document.querySelector("#game"+i);

            teamNames.textContent = data.response[i].teams.home.name + "   VS.   " + data.response[i].teams.away.name;
            gameScores.textContent = data.response[i].status.long + "  -  " + data.response[i].scores.away.total + " - " + data.response[i].scores.home.total;

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
            var gif = document.querySelector(".gif-container");
            gif.src = data.data[Math.floor(Math.random() * 25)].images.original.url;
            
        $(".btn").click(function(event){
            event.preventDefault();
            getGames();
            gif.src = data.data[Math.floor(Math.random() * 25)].images.original.url;

        });
           
    })

    .catch(err => {
        console.log(err);

    });

}

getGifApi();