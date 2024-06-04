const tv = document.querySelector('.tv')
const oyuncu = document.querySelector('.oyuncu')
const düşman = document.querySelector('.düşman')
const skor = document.querySelector('.skor')

let x = window.innerWidth;
let y = 90;
let düşmanSpeed = 5
let count = 0
let msg
let oyunbitti = false;

window.addEventListener('click', ()=>{
  oyuncu.style.bottom = `${y}px`
  setTimeout(e=>{
    oyuncu.style.bottom = `10px`
  }, 600)
})
function run(){
  let oyuncuCoord = oyuncu.getBoundingClientRect();
  let düşmanCoord = düşman.getBoundingClientRect();
  if (!oyunbitti) {
    x -= düşmanSpeed
  }
  if (x < -60) {
    count += 1
    x = window.innerWidth
  }
  skor.innerText = `Skor: ${count}`
  düşman.style.left = `${x}px`
  if (((düşmanCoord.bottom <= oyuncuCoord.bottom || (düşmanCoord.bottom < (oyuncuCoord.bottom + 70) && (düşmanCoord.left >= (oyuncuCoord.left)))) && (düşmanCoord.left == (oyuncuCoord.left + 50) || düşmanCoord.left <= (oyuncuCoord.left)))) {
    x = window.innerWidth + 400
    oyuncu.style.bottom = `10px`
    msg = confirm(`Kaybettin !\n\n Skorunuz${count}`)
    count = 0
    oyunbitti = true
    if (msg === true) {
      oyunbitti = false
    }
  } 
  requestAnimationFrame(run)
}
run()