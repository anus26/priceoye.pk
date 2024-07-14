// const container_card=document.querySelector('.container_card')
// const card=document.querySelector('.card')
// console.log(container_card);


// function submit() {
//     console.log(container_card.value);
//     console.log(card.value);
    
    
// }
// const card=document.querySelector('.card')
// card.addEventListener('click',()=> {
// console.log(card);
// }

// // )
const  card=document.querySelector('.card')
card.addEventListener('click',(e)=> {
 console.log(card);
card.innerHTML = `

<div class="card" style="width: 18rem;">
<div class="card-body">
  <img width="100px"   src="./asset/images/loudspeaker2.webp" alt="">
<br>
  <span> Ronin wireless-Earbuds</span>
<br>
  <span>RS 4,349</span>
  <br>
 <span> <button onclick="(index)" id="submit" class="btn btn-primary">details</button></span>
  
</div>
</div>
`
}

)

