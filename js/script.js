
    
    const container = document.querySelector('.container');
    const button = document.getElementById('btn');
    let risposta = scelta();
    let classeBox = classe();


    function scelta (num){
        return num;
    }
    function classe(stile){
        return stile;
    }
    
    const addBox = () => {
      
       const node = document.createElement('div');  
       node.className = classeBox;
        
        return node
    }

    for(let i = 0; i < 100; i++){
        const item = addBox();
        item.classList.add('box')
        item.innerText = i + 1;
        container.append(item);

        item.addEventListener('click', function(){
            console.log(this);
            this.classList.add('active');
        })
    }


    button.addEventListener('click',  () =>{
    const selectValue = document.getElementById('level').value;
    container.innerHTML = '';
    console.log(selectValue);

        switch(selectValue){

            case 'easy':
            risposta = scelta(100) ;
            console.log(risposta)
            classeBox= classe('box');
            break;

            case 'medium':
            risposta = scelta(81) ;
            console.log(risposta)
            classeBox= classe('box2');
            break;
            
            
            case 'hard':
                risposta = scelta(49) ;
                console.log(risposta)
                classeBox= classe('box3')
            break;
                }
    
        
        for(let i = 0; i < risposta; i++){
            const item = addBox();
            item.innerText = i + 1;
            container.append(item);
    
            item.addEventListener('click', function(){
                console.log(this);
                this.classList.add('active');
            })
        }

     
    })

    

   
    
    




