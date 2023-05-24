// this is onclick method in dicee.html
const refreshPage = (() => {
    let randomnumber1 = Math.floor((Math.random() * 6 + 1))
    // console.log(randomnumber1)
    let img1 = document.querySelectorAll('img')[0]
    // random dice image 
    let randomImage1 = 'images/dice' + randomnumber1 + '.png'
    // this is using stright method using src 
    // img1.src='images/dice'+randomnumber1+'.png'

    // this is set attribute method 
    img1.setAttribute('src', randomImage1)

    // this is second dice 
    let randomnumber2 = Math.floor((Math.random() * 6 + 1))

    img2 = document.querySelectorAll('img')[1]
    let randomImage2 = 'images/dice' + randomnumber2 + '.png'
    // this is setAttribute to use a random image 
    img2.setAttribute('src', randomImage2)
    // this is stright method to generate the random image 
    // img2.src='images/dice'+randomnumber2+'.png'

    let h2 = document.querySelector('h2')
    if (randomnumber1 > randomnumber2) {
        h2.innerHTML = 'Player 1 win🏆'
    }
    else if (randomnumber2 > randomnumber1) {
        h2.innerHTML = 'Player 2 win 🏆'
    }
    else {
        h2.innerHTML = 'Draw '
    }
})

const reloadGame = (() => {
    window.location.reload()
})

// this is current year 
var currentDate = new Date();
var date = currentDate.getFullYear();

function updateTime() {
    document.getElementById('currentTime').innerHTML = 'copyright &copy ' + date;
}

window.onload = (() => {
    updateTime()
})


