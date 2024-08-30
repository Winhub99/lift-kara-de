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
        const hr = document.createElement('hr')
        hr.style.border ='2px solid black'
        hr.style.width ='750px'
        containerEL.appendChild(hr)
    }





    
})