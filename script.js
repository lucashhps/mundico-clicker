const mundico_mouth = document.querySelector('.mundico-mouth')
const image = document.querySelector('.image')
const title = document.querySelector('#title')
var audio = new Audio('./images/audio/BLACKPINK-_붐바야__BOOMBAYAH_-MV.mp3')

const interval = setInterval(() => {
    const red = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    image.style.border = `10px solid rgb(${red}, ${blue}, ${green})`
    title.style.color = `rgb(${red}, ${blue}, ${green})`
}, 200)

mundico_mouth.addEventListener('click', () => {
    audio.play()
    const mundico = document.getElementById('mundico')
    console.log(mundico)
    if(mundico.getAttribute('src') == "./images/mundico2.jpeg"){
        mundico.src = "./images/mundico1.jpeg"
    }
    else{
        mundico.src = "./images/mundico2.jpeg"
    }

    }
)
