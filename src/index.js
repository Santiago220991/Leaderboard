
import './styles.css';
const player=document.querySelector(".name")
const score=document.querySelector(".score")
const submitbtn=document.querySelector(".submit")
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


const submitfun= async(player,score,gameid)=>{
    if(player.value!=="" && score.value!==""){
    fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores`,{
    method: "POST",
    body: JSON.stringify({ 
        "user": `"${player.value}"`,
        "score": `"${score.value}"`
    })
    ,
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    }
}


submitbtn.addEventListener("click",()=>{
    submitfun(player,score,gameid)
})



