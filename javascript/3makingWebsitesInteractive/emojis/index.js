
const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderImojis(){
    emojiContainer.innerHTML = ""
    for(let i = 0; i < myEmojis.length; i++){
        // emojiContainer.innerHTML += myEmojis[i]
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderImojis()    

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderImojis()    
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderImojis()    
    }
})

popBtn.addEventListener("click", function(){
        myEmojis.pop()
        renderImojis()    
})

shiftBtn.addEventListener("click", function(){
        myEmojis.shift()
        renderImojis()    
})
