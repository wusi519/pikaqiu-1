const string = `
.skin * { margin: 0; padding: 0; box-sizing: border-box; }
.skin *::before,.skin *::after { box-sizing: border-box; }

/*添加皮肤*/
.skin {
  box-sizing: border-box;
  position: relative;
  background: #ffe600;
  height: 50vh;
}
  /*添加一个鼻子*/
.nose-wrapper {
  position: absolute;
  left: 50%;
  top: 150px;
  margin-left: -20px;
}

.nose {
  box-sizing: border-box;
  width: 20px;
  border: solid 20px transparent;
  border-top-color: red;
  border-radius: 50%;
}
 /*添加眼睛*/
.eye {
  border: 2px solid black;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}

.eye::before {
  content: '';
  display: block;
  border: 2px solid black;
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  left: 8px;
  top: 2px;
}

.eye.left {
  transform: translateX(-150px);
}

.eye.right {
  transform: translateX(150px);
}
 /*添加嘴巴*/
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}

.lip {
  height: 25px;
  width: 80px;
  border: 2px solid black;
  position: absolute;
  top: 40px;
  background: #ffe600;
  border-top: none;
  z-index: 10;
}

.mouth-left {
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  border-left: none;
  transform: rotate(20deg);
}


.mouth-right {
  right: 50%;
  border-bottom-left-radius: 40px 25px;
  border-right: none;
  transform: rotate(-20deg);
}

.mouth-bottom-half-wrapper {
  position: absolute;
  left: 50%;
  bottom: 42px;
  margin-left: -150px;
  height: 110px;
  overflow: hidden;
  width: 300px;
  z-index: 2;
}

.mouth-bottom-half {
  height: 3500px;
  width: 300px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}

.mouth-bottom-half::after {
  content: '';
  position: absolute;
  bottom: -25px;
  left: 50%;
  background: #fc4a62;
  margin-left: -50px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
 /*添加脸颊*/
.face{
  width:68px;
  height: 68px;
  border:2px solid black;
  border-radius:50%;
  position:absolute;
  top:220px;
  background:#fc0d1c;
}
.face-left{
  right:50%;
  margin-right:156px; 
}
.face-right{
  left:50%;
  margin-left:156px;     
}
 /*添加动画*/
.face:hover{
  transform: rotate(45deg);
  -webkit-animation:box .8s infinite ;
}
`

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



