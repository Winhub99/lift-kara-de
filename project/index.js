let formEl = document.getElementById('Inputs');
formEl.addEventListener('submit',function(e){
    e.preventDefault()
    let floors =document.getElementById('floors').value;
    console.log('the no. of floors required are :',floors);
    let lifts =document.getElementById('lifts').value;
    console.log('the no. of lifts required are :',lifts);
    
})