const joke = document.querySelector("[joke-text]");
const joke_btn = document.querySelector(".joke-btn");

window.addEventListener("load",()=>{
    FetchAndDisplayJoke();
})

function FetchAndDisplayJoke()
{
    console.log("hello jee")
    fetch("https://icanhazdadjoke.com/slack")
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        joke.innerHTML = data?.attachments[0]?.text;
    })
    .catch((error)=>console.log(error))
}

joke_btn.addEventListener('click',()=>{
    FetchAndDisplayJoke();
})