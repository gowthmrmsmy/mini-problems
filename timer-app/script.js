let startTimer;
let time = 0;
console.log(typeof(!startTimer));
console.log(!startTimer);
document.querySelector('.start').addEventListener('click', () =>
{

  if(!startTimer)
  {

    startTimer = setInterval(() => {
    time++;
    displayTime()
    console.log(startTimer);
    },1000);
    

  

  } 
});


document.querySelector('.stop').addEventListener('click', () => {

 if(startTimer)
 {
  
  clearInterval(startTimer);
  startTimer = 0;

  displayTime();
 }



})


document.querySelector('.reset').addEventListener('click', () => {

  startTimer = 0;
  time = 0;
  displayTime();


})


let displayTime = () =>
{

let hours = Math.floor(time/3600);
let minutes = Math.floor (time % 3600 / 60 );
let seconds = time % 60;



let formatted = `${String(hours).padStart(2,'0')}:
                 ${String(minutes).padStart(2,'0')}:
                 ${String(seconds).padStart(2,'0')}`

document.querySelector('.timer').textContent = formatted;



}