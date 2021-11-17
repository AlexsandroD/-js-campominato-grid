


// for(i = 0; i < 64; i++){
    //  let box  = document.createElement('div');
    //  box.classList.add('box');
    //  console.log(box)
    //  container.append(box);
    // }
    
const container = document.querySelector('.container');
let items = '';

for(i = 1; i <= 100; i++){
    items += `<div class="box">${i}</div>`;
    
}
container.innerHTML = items;

