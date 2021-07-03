import string from './css'

const player = {
  id:undefined,
  speed:100,
  n:1,
  ui:{
    demo: document.querySelector('#demo'),
    demo2 :document.querySelector('#demo2'),
  },
  init: () => {
    player.ui.demo.innerText = string.substr(0,player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.bindEvents()
    player.play()
  },
  events : {
    '#buttonPause': 'pause',
    '#buttonPlay':'play',
    '#buttonSlowSpeed': 'slow',
    '#buttonNormalSpeed': 'normal',
    '#buttonFastSpeed': 'fast',
  },
  bindEvents: () => {
    for (let key in player.events) {
      if(player.events.hasOwnProperty(key)){
        const value=player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  timeMeter: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = demo.scrollHeight
  },
  play: () => {
    window.clearInterval(player.id)
    player.id = setInterval(player.timeMeter, player.speed)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.speed = 300
    player.play()
  },
  normal: () => {
    player.pause()
    player.speed = 50
    player.play()
  },
  fast: () => {
    player.pause()
    player.speed = 0
    player.play()
  },
}

player.init()



