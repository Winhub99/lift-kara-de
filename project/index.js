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
    
    for(let i=0;i<floors;i++){
        const div = document.createElement('div')
        const hr = document.createElement('hr')
        const span = document.createElement('span')
        div.style.display='flex'
        div.style.alignItems='center'
        div.style.width ='750px'
        div.style.marginBottom='125px'

        hr.style.border ='2px solid black'
        hr.style.flexGrow='1'
        hr.style.margin='0 10px'

        span.textContent= 'Floor ' + (floors - i)
        div.appendChild(hr)
        div.appendChild(span)

        if(i== floors-2){
            div.style.marginBottom='50px'
        }

        if(i == floors - 1){
            const liftsContainer= document.createElement('div')
            liftsContainer.style.display='flex'
            liftsContainer.style.marginLeft='50px'
            for(let j=0;j<lifts;j++){
                const lift = document.createElement('div')
                div.style.marginTop='-7.5px'
                lift.style.width='50px'
                lift.style.height='75px'
                lift.style.border='1px solid black'
                lift.style.backgroundColor='aqua'
                lift.style.marginLeft='75px'
                liftsContainer.appendChild(lift)
            }
            containerEL.appendChild(liftsContainer)

        }

        containerEL.appendChild(div)

    }  

    // const lift = document.createElement('div')
    // lift.style.width='50px'
    // lift.style.height='75px'
    // lift.style.border='1px solid black'
    // lift.style.backgroundColor='aqua'
    // containerEL.appendChild(lift)
})