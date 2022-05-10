import './styles.css';


const player=document.querySelector(".name")
const score=document.querySelector(".score")
const submitbtn=document.querySelector(".submit")
const refreshbtn=document.querySelector(".refresh")
const scoresdiv=document.querySelector(".scores-div")

let   gameid=localStorage.getItem('scores')
let api = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/"


 const gamename= async (gameid)=>{
    let response= await fetch(api,{
    method: "POST",
    body: JSON.stringify({ "name": "Santiago's Game" })
    ,
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    response= await response.json()
    gameid=await response.result.slice(14,34)
    console.log(gameid)
    localStorage.setItem("scores",gameid)
}



const submitfun= async(player,score,gameid)=>{
    if(player.value!=="" && score.value!==""){
    fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores`,{
    method: "POST",
    body: JSON.stringify({ 
        "user": `${player.value}`,
        "score": `${score.value}`
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

const refreshfun= async (gameid,scoresdiv)=>{
    let result=[]
    let response= await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores`,{
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    response= await response.json()
    console.log(response)
    response.result.forEach((element,index)=>{
        if(index%2==0){
            result.push(element)
        }})
    console.log(result)
    result.forEach(element=>{
    scoresdiv.innerHTML+=`<li>${element.user}  ${element.score}</li>`
    })
    }
    



if(gameid===null){gamename()}

submitbtn.addEventListener("click",()=>{
    submitfun(player,score,gameid)
})

refreshbtn.addEventListener("click",()=>{
    refreshfun(gameid,scoresdiv)
})


