

const container = document.querySelector('.container');
let items = '';

// for(i = 0; i < 64; i++){
//  let box  = document.createElement('div');
//  box.classList.add('box');
//  console.log(box)
//  container.append(box);
// }


for(i = 0; i < 64; i++){
    items += `<div class="box"></div>`;
    
}
container.innerHTML = items;
   