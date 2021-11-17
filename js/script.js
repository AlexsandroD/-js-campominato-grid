
    
    const container = document.querySelector('.container');
    const button = document.getElementById('btn');
    let selectValue = '';


    button.addEventListener('click', () =>{
    selectValue = document.getElementById('level').value;
    console.log(selectValue)
    
    switch(selectValue){
        case 'easy':
            
            const addBox = () => {
              
               const node = document.createElement('div');  
               node.className = 'box';
                
                return node
            }
            
            for(let i = 0; i < 100; i++){
                const item = addBox();
                item.innerText = i + 1;
                container.appendChild(item);
        
                item.addEventListener('click', function(){
                    console.log(this);
                    this.classList.add('active');
                })
            }
        break;
        
        case 'medium':
            const addBox2 = () => {
              
                const node = document.createElement('div');  
                node.className = 'box2';
                 
                 return node
             }
             
             for(let i = 0; i < 81; i++){
                 const item = addBox2();
                 item.innerText = i + 1;
                 container.appendChild(item);
         
                 item.addEventListener('click', function(){
                     console.log(this);
                     this.classList.add('active');
                 })
             }
        break;     

        case 'hard':
            const addBox3 = () => {
              
                const node = document.createElement('div');  
                node.className = 'box3';
                 
                 return node
             }
             
             for(let i = 0; i < 49; i++){
                 const item = addBox3();
                 item.innerText = i + 1;
                 container.appendChild(item);
         
                 item.addEventListener('click', function(){
                     console.log(this);
                     this.classList.add('active');
                 })
             }
    }        

   
})





