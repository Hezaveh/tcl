let postsArray = []

function renderPosts() {
    let html = ""
    for (let post of postsArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    })

document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }
    
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
            document.getElementById("new-post").reset();
        })
})

/**
 * Challenge part 1: GET the current weather for your city with 
 * the Open Weather API and log it to the console.
 * 
 * BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/
 * Endpoint: /weather
 * Query: ??? (https://openweathermap.org/current)
    * NOTE: It says you need to include `appid` in your query, but you can skip that this time
 */


 fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=ottawa&units=metric")
    .then(res => res.json())
    .then(data => console.log(data))

//important links:
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
//https://jsonplaceholder.typicode.com/guide/ and look for the "Listing nested resources" section)
//https://restfulapi.net/
//https://www.restapitutorial.com/lessons/whatisrest.html
//https://docs.google.com/presentation/d/e/2PACX-1vTEztADtG8OhJ4695LYwtVftNgriQK7zAOsYNru9OfaPA1mQEAlkNd1BqgOdec1aZRC6PxSxOnlrBeH/pub?start=false&loop=false&delayms=3000&slide=id.g7fabbaef24_1_232
//https://docs.google.com/presentation/d/e/2PACX-1vSxS5iMjTveO-IBqdDE65dgouZStLTW-Vlyt3N9js3FnMCeW8cwSgmrkGzX2i_g0qGCM6fJDKZ-r3Se/pub?start=false&loop=false&delayms=3000&slide=id.gd9ac681391_0_63