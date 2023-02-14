let currentDate = dayjs().format('YYYY-MM-DD');
let dateDisplay = dayjs().format('MM/DD/YYYY');
let todayDate = document.querySelector("#current-date");
let homeTeam = document.querySelector("#team_1");
let awayTeam = document.querySelector("#team_2");
let homeScore = document.querySelector("#points_1");
let awayScore = document.querySelector("#points_2");
let mainBox = document.querySelector("#main-text");
let gameTimer = document.querySelector('#timer');
let gameQuarter = document.querySelector('#ovt');
let liveGames = document.querySelector('#live-games');

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
            var p = document.createElement("p");

            p.setAttribute("id", "teamnames"+i);
            p.style.fontSize = '18px';
            liveGames.appendChild(p);
            var teamNames = document.querySelector("#teamnames"+i);

            teamNames.textContent = data.response[i].teams.home.name + "   VS.   " + data.response[i].teams.away.name;
        }


        $("#live-games").click(function(event){
            event.preventDefault();            
            var currentGame = event.target.id.split("teamnames")[1];

            if (data.response[currentGame].teams.home.name === "Atlanta Hawks"){
                data.response[currentGame].teams.home.name = "ATL";    
            }
            if (data.response[currentGame].teams.home.name === "Boston Celtics"){
                data.response[currentGame].teams.home.name = "BOS";    
            }
            if (data.response[currentGame].teams.home.name === "Charlotte Hornets"){
                data.response[currentGame].teams.home.name = "CHA";    
            }
            if (data.response[currentGame].teams.home.name === "Chicago Bulls"){
                data.response[currentGame].teams.home.name = "CHI";    
            }
            if (data.response[currentGame].teams.home.name === "Cleveland Cavaliers"){
                data.response[currentGame].teams.home.name = "CLE";    
            }
            if (data.response[currentGame].teams.home.name === "Dallas Mavericks"){
                data.response[currentGame].teams.home.name = "DAL";    
            }
            if (data.response[currentGame].teams.home.name === "Denver Nuggets"){
                data.response[currentGame].teams.home.name = "DEN";    
            }
            if (data.response[currentGame].teams.home.name === "Detroit Pistons"){
                data.response[currentGame].teams.home.name = "DET";    
            }
            if (data.response[currentGame].teams.home.name === "Golden State Warriors"){
                data.response[currentGame].teams.home.name = "GSW";    
            }
            if (data.response[currentGame].teams.home.name === "Houston Rockets"){
                data.response[currentGame].teams.home.name = "HOU";    
            }
            if (data.response[currentGame].teams.home.name === "Indiana Pacers"){
                data.response[currentGame].teams.home.name = "IND";    
            }
            if (data.response[currentGame].teams.home.name === "Los Angeles Clippers"){
                data.response[currentGame].teams.home.name = "LAC";    
            }
            if (data.response[currentGame].teams.home.name === "Los Angeles Lakers"){
                data.response[currentGame].teams.home.name = "LAL";    
            }
            if (data.response[currentGame].teams.home.name === "Memphis Grizzlies"){
                data.response[currentGame].teams.home.name = "MEM";    
            }
            if (data.response[currentGame].teams.home.name === "Miami Heat"){
                data.response[currentGame].teams.home.name = "MIA";    
            }
            if (data.response[currentGame].teams.home.name === "Milwaukee Bucks"){
                data.response[currentGame].teams.home.name = "MIL";    
            }
            if (data.response[currentGame].teams.home.name === "Minnesota Timberwolves"){
                data.response[currentGame].teams.home.name = "MIN";    
            }
            if (data.response[currentGame].teams.home.name === "New Orleans Pelicans"){
                data.response[currentGame].teams.home.name = "NOP";    
            }
            if (data.response[currentGame].teams.home.name === "New York Knicks"){
                data.response[currentGame].teams.home.name = "NYK";    
            }
            if (data.response[currentGame].teams.home.name === "Brooklyn Nets"){
                data.response[currentGame].teams.home.name = "BKN";    
            }
            if (data.response[currentGame].teams.home.name === "Oklahoma City Thunder"){
                data.response[currentGame].teams.home.name = "OKC";    
            }
            if (data.response[currentGame].teams.home.name === "Orlando Magic"){
                data.response[currentGame].teams.home.name = "ORL";    
            }
            if (data.response[currentGame].teams.home.name === "Philadelphia 76ers"){
                data.response[currentGame].teams.home.name = "PHI";    
            }
            if (data.response[currentGame].teams.home.name === "Phoenix Suns"){
                data.response[currentGame].teams.home.name = "PHO";    
            }
            if (data.response[currentGame].teams.home.name === "Portland Trail Blazers"){
                data.response[currentGame].teams.home.name = "POR";    
            }
            if (data.response[currentGame].teams.home.name === "Sacramento Kings"){
                data.response[currentGame].teams.home.name = "SAC";    
            }
            if (data.response[currentGame].teams.home.name === "San Antonio Spurs"){
                data.response[currentGame].teams.home.name = "SAS";    
            }
            if (data.response[currentGame].teams.home.name === "Toronto Raptors"){
                data.response[currentGame].teams.home.name = "TOR";
            }
            if (data.response[currentGame].teams.home.name === "Utah Jazz"){
                data.response[currentGame].teams.home.name = "UTH";    
            }
            if (data.response[currentGame].teams.home.name === "Washington Wizards"){
                data.response[currentGame].teams.home.name = "WAS";    
            }


            if (data.response[currentGame].teams.away.name === "Atlanta Hawks"){
                data.response[currentGame].teams.away.name = "ATL";    
            }
            if (data.response[currentGame].teams.away.name === "Boston Celtics"){
            data.response[currentGame].teams.away.name = "BOS";    
            }
            if (data.response[currentGame].teams.away.name === "Charlotte Hornets"){
            data.response[currentGame].teams.away.name = "CHA";    
            }
            if (data.response[currentGame].teams.away.name === "Chicago Bulls"){
            data.response[currentGame].teams.away.name = "CHI";    
            }
            if (data.response[currentGame].teams.away.name === "Cleveland Cavaliers"){
            data.response[currentGame].teams.away.name = "CLE";    
            }
            if (data.response[currentGame].teams.away.name === "Dallas Mavericks"){
            data.response[currentGame].teams.away.name = "DAL";    
            }
            if (data.response[currentGame].teams.away.name === "Denver Nuggets"){
            data.response[currentGame].teams.away.name = "DEN";    
            }
            if (data.response[currentGame].teams.away.name === "Detroit Pistons"){
            data.response[currentGame].teams.away.name = "DET";    
            }
            if (data.response[currentGame].teams.away.name === "Golden State Warriors"){
            data.response[currentGame].teams.away.name = "GSW";    
            }
            if (data.response[currentGame].teams.away.name === "Houston Rockets"){
            data.response[currentGame].teams.away.name = "HOU";    
            }
            if (data.response[currentGame].teams.away.name === "Indiana Pacers"){
            data.response[currentGame].teams.away.name = "IND";
            }
            if (data.response[currentGame].teams.away.name === "Los Angeles Clippers"){
            data.response[currentGame].teams.away.name = "LAC";
            }
            if (data.response[currentGame].teams.away.name === "Los Angeles Lakers"){
            data.response[currentGame].teams.away.name = "LAL";
            }
            if (data.response[currentGame].teams.away.name === "Memphis Grizzlies"){
            data.response[currentGame].teams.away.name = "MEM";
            }
            if (data.response[currentGame].teams.away.name === "Miami Heat"){
            data.response[currentGame].teams.away.name = "MIA";
            }
            if (data.response[currentGame].teams.away.name === "Milwaukee Bucks"){
            data.response[currentGame].teams.away.name = "MIL";
            }
            if (data.response[currentGame].teams.away.name === "Minnesota Timberwolves"){
            data.response[currentGame].teams.away.name = "MIN";
            }
            if (data.response[currentGame].teams.away.name === "New Orleans Pelicans"){
            data.response[currentGame].teams.away.name = "NOP";
            }
            if (data.response[currentGame].teams.away.name === "New York Knicks"){
            data.response[currentGame].teams.away.name = "NYK";
            }
            if (data.response[currentGame].teams.away.name === "Brooklyn Nets"){
            data.response[currentGame].teams.away.name = "BKN";
            }
            if (data.response[currentGame].teams.away.name === "Oklahoma City Thunder"){
            data.response[currentGame].teams.away.name = "OKC";
            }
            if (data.response[currentGame].teams.away.name === "Orlando Magic"){
            data.response[currentGame].teams.away.name = "ORL";
            }
            if (data.response[currentGame].teams.away.name === "Philadelphia 76ers"){
            data.response[currentGame].teams.away.name = "PHI";
            }
            if (data.response[currentGame].teams.away.name === "Phoenix Suns"){
            data.response[currentGame].teams.away.name = "PHO";
            }
            if (data.response[currentGame].teams.away.name === "Portland Trail Blazers"){
            data.response[currentGame].teams.away.name = "POR";
            }
            if (data.response[currentGame].teams.away.name === "Sacramento Kings"){
            data.response[currentGame].teams.away.name = "SAC";
            }
            if (data.response[currentGame].teams.away.name === "San Antonio Spurs"){
            data.response[currentGame].teams.away.name = "SAS";
            }
            if (data.response[currentGame].teams.away.name === "Toronto Raptors"){
            data.response[currentGame].teams.away.name = "TOR";
            }
            if (data.response[currentGame].teams.away.name === "Utah Jazz"){
            data.response[currentGame].teams.away.name = "UTH";
            }
            if (data.response[currentGame].teams.away.name === "Washington Wizards"){
            data.response[currentGame].teams.away.name = "WAS";
            }

        homeTeam.textContent = data.response[currentGame].teams.home.name;
        awayTeam.textContent = data.response[currentGame].teams.away.name;
        
        gameTimer.textContent = data.response[currentGame].status.timer;
        gameQuarter.textContent = data.response[currentGame].status.short;
        
        homeScore.textContent = data.response[currentGame].scores.home.total +0;
        awayScore.textContent = data.response[currentGame].scores.away.total +0;
        
        });

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
    liveGames.textContent = "";
    

});

$("#odds").click(function(event){
    event.preventDefault();
    
    mainBox.style.display = "flex";
    mainBox.innerHTML = "";
    mainBox.textContent = "COMING SOON!"
    liveGames.textContent = "";
    

});

$("#live-scores").click(function(event){
    event.preventDefault();
    getGames();
    

});

getGifApi();
getGames();

function getHomeTeamName(){
    if (data.response[i].teams.home.name === "Atlanta Hawks"){
            data.response[i].teams.home.name = "ATL";

    }
    if (data.response[i].teams.home.name === "Boston Celtics"){
        data.response[i].teams.home.name = "BOS";

    }
    if (data.response[i].teams.home.name === "Charlotte Hornets"){
        data.response[i].teams.home.name = "CHA";

    }
    if (data.response[i].teams.home.name === "Chicago Bulls"){
        data.response[i].teams.home.name = "CHI";

    }
    if (data.response[i].teams.home.name === "Cleveland Cavaliers"){
        data.response[i].teams.home.name = "CLE";

    }
    if (data.response[i].teams.home.name === "Dallas Mavericks"){
        data.response[i].teams.home.name = "DAL";

    }
    if (data.response[i].teams.home.name === "Denver Nuggets"){
        data.response[i].teams.home.name = "DEN";

    }
    if (data.response[i].teams.home.name === "Detroit Pistons"){
        data.response[i].teams.home.name = "DET";

    }
    if (data.response[i].teams.home.name === "Golden State Warriors"){
        data.response[i].teams.home.name = "GSW";

    }
    if (data.response[i].teams.home.name === "Houston Rockets"){
        data.response[i].teams.home.name = "HOU";

    }
    if (data.response[i].teams.home.name === "Indiana Pacers"){
        data.response[i].teams.home.name = "IND";

    }
    if (data.response[i].teams.home.name === "Los Angeles Clippers"){
        data.response[i].teams.home.name = "LAC";

    }
    if (data.response[i].teams.home.name === "Los Angeles Lakers"){
        data.response[i].teams.home.name = "LAL";

    }
    if (data.response[i].teams.home.name === "Memphis Grizzlies"){
        data.response[i].teams.home.name = "MEM";

    }
    if (data.response[i].teams.home.name === "Miami Heat"){
        data.response[i].teams.home.name = "MIA";

    }
    if (data.response[i].teams.home.name === "Milwaukee Bucks"){
        data.response[i].teams.home.name = "MIL";

    }
    if (data.response[i].teams.home.name === "Minnesota Timberwolves"){
        data.response[i].teams.home.name = "MIN";

    }
    if (data.response[i].teams.home.name === "New Orleans Pelicans"){
        data.response[i].teams.home.name = "NOP";

    }
    if (data.response[i].teams.home.name === "New York Knicks"){
        data.response[i].teams.home.name = "NYK";

    }
    if (data.response[i].teams.home.name === "Brooklyn Nets"){
        data.response[i].teams.home.name = "BKN";

    }
    if (data.response[i].teams.home.name === "Oklahoma City Thunder"){
        data.response[i].teams.home.name = "OKC";

    }
    if (data.response[i].teams.home.name === "Orlando Magic"){
        data.response[i].teams.home.name = "ORL";

    }
    if (data.response[i].teams.home.name === "Philadelphia 76ers"){
        data.response[i].teams.home.name = "PHI";

    }
    if (data.response[i].teams.home.name === "Phoenix Suns"){
        data.response[i].teams.home.name = "PHO";

    }
    if (data.response[i].teams.home.name === "Portland Trail Blazers"){
        data.response[i].teams.home.name = "POR";

    }
    if (data.response[i].teams.home.name === "Sacramento Kings"){
        data.response[i].teams.home.name = "SAC";

    }
    if (data.response[i].teams.home.name === "San Antonio Spurs"){
        data.response[i].teams.home.name = "SAS";

    }
    if (data.response[i].teams.home.name === "Toronto Raptors"){
        data.response[i].teams.home.name = "TOR";

    }
    if (data.response[i].teams.home.name === "Utah Jazz"){
        data.response[i].teams.home.name = "UTH";

    }
    if (data.response[i].teams.home.name === "Washington Wizards"){
        data.response[i].teams.home.name = "WAS";

    }

}


function getAwayTeamName(){
    if (data.response[i].teams.away.name === "Atlanta Hawks"){
            data.response[i].teams.away.name = "ATL";

    }
    if (data.response[i].teams.away.name === "Boston Celtics"){
        data.response[i].teams.away.name = "BOS";

    }
    if (data.response[i].teams.away.name === "Charlotte Hornets"){
        data.response[i].teams.away.name = "CHA";

    }
    if (data.response[i].teams.away.name === "Chicago Bulls"){
        data.response[i].teams.away.name = "CHI";

    }
    if (data.response[i].teams.away.name === "Cleveland Cavaliers"){
        data.response[i].teams.away.name = "CLE";

    }
    if (data.response[i].teams.away.name === "Dallas Mavericks"){
        data.response[i].teams.away.name = "DAL";

    }
    if (data.response[i].teams.away.name === "Denver Nuggets"){
        data.response[i].teams.away.name = "DEN";

    }
    if (data.response[i].teams.away.name === "Detroit Pistons"){
        data.response[i].teams.away.name = "DET";

    }
    if (data.response[i].teams.away.name === "Golden State Warriors"){
        data.response[i].teams.away.name = "GSW";

    }
    if (data.response[i].teams.away.name === "Houston Rockets"){
        data.response[i].teams.away.name = "HOU";

    }
    if (data.response[i].teams.away.name === "Indiana Pacers"){
        data.response[i].teams.away.name = "IND";

    }
    if (data.response[i].teams.away.name === "Los Angeles Clippers"){
        data.response[i].teams.away.name = "LAC";

    }
    if (data.response[i].teams.away.name === "Los Angeles Lakers"){
        data.response[i].teams.away.name = "LAL";

    }
    if (data.response[i].teams.away.name === "Memphis Grizzlies"){
        data.response[i].teams.away.name = "MEM";

    }
    if (data.response[i].teams.away.name === "Miami Heat"){
        data.response[i].teams.away.name = "MIA";

    }
    if (data.response[i].teams.away.name === "Milwaukee Bucks"){
        data.response[i].teams.away.name = "MIL";

    }
    if (data.response[i].teams.away.name === "Minnesota Timberwolves"){
        data.response[i].teams.away.name = "MIN";

    }
    if (data.response[i].teams.away.name === "New Orleans Pelicans"){
        data.response[i].teams.away.name = "NOP";

    }
    if (data.response[i].teams.away.name === "New York Knicks"){
        data.response[i].teams.away.name = "NYK";

    }
    if (data.response[i].teams.away.name === "Brooklyn Nets"){
        data.response[i].teams.away.name = "BKN";

    }
    if (data.response[i].teams.away.name === "Oklahoma City Thunder"){
        data.response[i].teams.away.name = "OKC";

    }
    if (data.response[i].teams.away.name === "Orlando Magic"){
        data.response[i].teams.away.name = "ORL";

    }
    if (data.response[i].teams.away.name === "Philadelphia 76ers"){
        data.response[i].teams.away.name = "PHI";

    }
    if (data.response[i].teams.away.name === "Phoenix Suns"){
        data.response[i].teams.away.name = "PHO";

    }
    if (data.response[i].teams.away.name === "Portland Trail Blazers"){
        data.response[i].teams.away.name = "POR";

    }
    if (data.response[i].teams.away.name === "Sacramento Kings"){
        data.response[i].teams.away.name = "SAC";

    }
    if (data.response[i].teams.away.name === "San Antonio Spurs"){
        data.response[i].teams.away.name = "SAS";

    }
    if (data.response[i].teams.away.name === "Toronto Raptors"){
        data.response[i].teams.away.name = "TOR";

    }
    if (data.response[i].teams.away.name === "Utah Jazz"){
        data.response[i].teams.away.name = "UTH";

    }
    if (data.response[i].teams.away.name === "Washington Wizards"){
        data.response[i].teams.away.name = "WAS";

    }

}