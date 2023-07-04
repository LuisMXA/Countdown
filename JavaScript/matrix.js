const canvas = document.getElementById('canvas')
const container = document.querySelector('.container')
const ctx = canvas.getContext('2d')

window.addEventListener('resize', resizeCanvas, false)

let w = canvas.width
let h = canvas.height
let colums = Math.floor(w / 20) + 1
let axisY = Array(colums).fill(0)

function resizeCanvas() {
     canvas.width = document.body.offsetWidth
     canvas.height = document.body.offsetHeight
     w = canvas.width
     h = canvas.height
     colums = Math.floor(w / 20) + 1
     axisY = Array(colums).fill(0)
     
     matrix()
}
resizeCanvas()

function matrix () {
     
     ctx.fillStyle = '#0002'
     ctx.fillRect(0, 0, w, h)
     ctx.fillStyle = '#0f0'
     ctx.font = '16pt monospace'
     
     axisY.forEach((y, index)=> {

          const text = String.fromCharCode(Math.random() * (parseInt('30a0',16) - parseInt('30ff',16)) + (parseInt('30a0',16)))
          const x = index * 20
          ctx.fillText(text, x, y)
          if (y > 100 + Math.random() * 10000) {
               axisY[index] = 0
          }else {
               axisY[index] = y + 20
          }
     })
}

setInterval(matrix, 50)