
import './styles.css';


let api = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/"
let gameid
 const gamename= async (gameid)=>{
    fetch(api,{
    method: "POST",
    body: JSON.stringify({ "name": "Santiago's Game" })
    ,
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response=>response.json())
    .then(data=>{gameid=data.result.slice(14,34)
    console.log(gameid)
})
}

gamename(gameid)


