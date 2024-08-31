let formEl = document.getElementById('Inputs');
let containerEL = document.getElementById('container')
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
        hr.style.border ='2px solid black'
        div.style.width ='750px'
        div.style.marginBottom='125px'

        span.textContent= 'Floor ' + (floors - i)
        div.appendChild(span)
        div.appendChild(hr)
        containerEL.appendChild(div)
    }  
})