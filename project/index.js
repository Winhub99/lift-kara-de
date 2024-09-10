let formEl = document.getElementById('Inputs');
let containerEL = document.getElementById('container')
containerEL.style.marginLeft='25px'
formEl.addEventListener('submit',function(e){
    e.preventDefault()
    formEl.style.display='none'
    let floors =document.getElementById('floors').value;
    console.log('the no. of floors required are :',floors);
    let lifts =document.getElementById('lifts').value;
    console.log('the no. of lifts required are :',lifts);

    let destination=0;
    
    for(let i=0;i<floors;i++){
        const div = document.createElement('div')
        const hr = document.createElement('hr')
        const span = document.createElement('span')
       
        const btns = document.createElement('div')
        const up =document.createElement('button')
        up.addEventListener('click', ()=>{
            console.log('up button clicked!');
            
        })
        const down =document.createElement('button')

        down.addEventListener('click', ()=>{
            console.log('down button clicked!');
            
        })
        btns.appendChild(up)
        btns.appendChild(down)
       
        btns.style.display='flex'
        btns.style.flexDirection='column'
        btns.style.gap='10px'
        btns.style.width='30px'
        btns.style.height='30px'
        btns.style.position='relative'
        btns.style.top='-36px'

        up.className='btn'
        down.className='btn'
        up.textContent='U'
        down.textContent="D"

        div.style.display='flex'
        div.style.alignItems='center'
        div.style.width ='750px'
        // div.style.marginBottom='125px'
        div.style.marginTop='125px'

        hr.style.border ='2px solid black'
        hr.style.flexGrow='1'
        hr.style.margin='0 10px'

        span.textContent= 'Floor ' + (floors - i)
        div.appendChild(btns)
        div.appendChild(hr)
        div.appendChild(span)

        if(i== floors-2){
            div.style.marginBottom='50px'
            //div.style.marginTop='50px'
        }


        if(i == floors - 1){
            const liftsContainer= document.createElement('div')
            liftsContainer.style.display='flex'
            liftsContainer.style.marginLeft='50px'
             liftsContainer.style.position='relative'
            liftsContainer.style.top='5.20px'
            
            down.style.visibility="hidden"

            for(let j=0;j<lifts;j++){
                const lift = document.createElement('div')
                lift.id= 'lift'+ j;
                div.style.marginTop='-7.5px'
                lift.style.width='70px'
                lift.style.height='90px'
                lift.style.border='1px solid black'
                lift.style.backgroundColor='aqua'
                lift.style.marginLeft='75px'
                liftsContainer.appendChild(lift)
            }
            containerEL.appendChild(liftsContainer)

        }

        if(i== 0){
            up.style.visibility="hidden"
        }

        containerEL.appendChild(div)

    }  


})