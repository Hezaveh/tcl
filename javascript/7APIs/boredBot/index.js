

/*document.getElementById("bored-button").addEventListener("click", function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("idea").textContent = data.activity
            document.getElementById("title").textContent = "🤖 HappyBot 🤖"
            document.body.classList.add("fun")        
        })

})*/



function getActivityIdea() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(res => res.json())
        .then(data => {
            document.getElementById("idea").textContent = data.activity
            document.body.classList.add("fun")
            document.getElementById("title").textContent = "🤖 HappyBot 🤖"
        })
}

document.getElementById("bored-button").addEventListener("click", getActivityIdea)

