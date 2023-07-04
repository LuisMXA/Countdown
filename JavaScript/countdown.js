const overlay = document.querySelector('.overlay')
const countcontainer = document.getElementById('countdown')
const morpheus = document.querySelector('.morpheus')

const getRemainTime = deadline => {
     let now = new Date()
     let remainTime = (new Date(deadline) - now + 1000) / 1000
     let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2)
     let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2)
     let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2)
     let remainDays = Math.floor(remainTime / (3600 * 24))

     return {
          remainTime,
          remainSeconds,
          remainMinutes,
          remainHours,
          remainDays
     }
}

const countDown = (deadline, element) => {
     const elem = document.getElementById(element)

     const timerUpdate = setInterval(() => {
          let time = getRemainTime(deadline)
          const clock = `
          <div class="counter"><span class="time">${time.remainDays}</span><span class="text">Días</span></div>
          <div class="counter"><span class="time"> ${time.remainHours}</span><span class="text">Horas</span></div>
          <div class="counter"><span class="time">${time.remainMinutes}</span><span class="text">Minutos</span></div>
          <div class="counter"><span class="time">${time.remainSeconds}</span><span class="text">Segundos</span></div>
          `
          
          elem.innerHTML = clock

          if (time.remainTime <= 1) {
               clearInterval(timerUpdate)
               overlay.classList.toggle('active')
               canvas.classList.toggle('active')
               morpheus.classList.toggle('active')
               countcontainer.classList.toggle('inactive')
               countcontainer.classList.remove('active')
               
          } 
     }, 1000)
}

countDown('Tue Jul 4 2023 18:25:35 GMT-0300','countdown')
//countDown('Sun Oct 21 2023 00:00:00 GMT-0300','countdown')
