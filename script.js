const numsBtn = document.querySelectorAll('.rating-btn');
let subMsg = document.querySelector('#sucess-head h1');
let ratingCard = document.querySelector('#rating-card');
let subBtn = document.querySelector('#sub-btn');
let canBtn = document.querySelector('#can-btn');



function onSubmit(val){

ratingCard.style.display = 'none';
document.querySelector('#sub-ui').style.display = 'block';

 subMsg.innerText = `Your Rating is ${val} 
                      Thank you for your FeedBack`

}


numsBtn.forEach( (btns) => {
   console.log(btns);

   btns.addEventListener('click' , () => {

   let btnVal = btns.value

   
   subBtn.addEventListener('click' , () => {

    onSubmit(btnVal);

   })
      

   });

});


canBtn.addEventListener('click' , ()=>{

  ratingCard.style.display = 'none';

});

// document.addEventListener('click' , () => {

//   ratingCard.style.display = 'none';

// })