let score = {

  status : '',
  numberofHeads : 0 ,
  numberofTails : 0

} ;


document.querySelector('.flipCoin').addEventListener('click',() => { 
  flipCoin()
})

let flipCoin = () =>
{

  let randomNumber = Math.floor(Math.random()*2);
  
  let usermove = randomNumber === 0 ? 'Heads' : 'Tails' ;

  if(usermove === 'Heads')
  {
    score.status  = 'Heads';
    score.numberofHeads ++;
    
  }
  else 
  {
    score.status  = 'Tails';
    score.numberofTails ++;
    
  }

 displayResult()
  }

 displayResult = () =>
  {

    document.querySelector('.heads').innerHTML = score.numberofHeads;
    document.querySelector('.tails').innerHTML = score.numberofTails;
    document.querySelector('.status').innerHTML = score.status;


  } 