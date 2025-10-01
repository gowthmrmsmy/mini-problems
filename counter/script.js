let score = {

count : 0

}

document.querySelector('.add').addEventListener('click', () => { addCount();})
document.querySelector('.subtract').addEventListener('click', () => { subtractCount();})
document.querySelector('.reset-button').addEventListener('click', () => { resetCount();})

let addCount = () =>
{

score.count++;
displayCount();

};


let subtractCount = () =>
{

score.count--;
if(score.count < 0){

  score.count = 0;
}
displayCount();

}


let resetCount = () =>
{

  score.count = 0 ;
  displayCount();


}


displayCount = () => 
{

document.querySelector('.showResult').innerHTML = score.count;


} 