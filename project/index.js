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
    //create a map to store current floor level of each lift
    let currentLiftLevels={}    

    for(let i=0;i<floors;i++){
        const div = document.createElement('div')
        const hr = document.createElement('hr')
        const span = document.createElement('span')
       
        const btns = document.createElement('div')
        const up =document.createElement('button')
        const floorNumber = floors -i;
        up.addEventListener('click', ()=>{
            console.log('up button clicked!');
            console.log('The lift was requested on floor level  :', floorNumber);


            //write logic to find the nearest lift
            let closestLiftAtUpperLevel=-999;
            let closestLiftAtLowerLevel=999;
            for (let k=0;k<lifts;k++){
                const currLift = document.getElementById('lift'+k)
                console.log('the current lift is : ',currLift);
                console.log('the lift is currently at floor level: ', currentLiftLevels['lift'+k]);
               // console.log('is -1 greater than -10 ',-1 > -10);
                if(currentLiftLevels['lift'+k]>floorNumber){
                    if((currentLiftLevels['lift'+k]-floorNumber)>closestLiftAtUpperLevel){
                        console.log('reached here');
                        closestLiftAtUpperLevel=currentLiftLevels['lift'+k] - floorNumber;
                        console.log('the updated value of closestUpperLift is : ',closestLiftAtUpperLevel);   
                    }
                }else{

                    if((floorNumber- currentLiftLevels['lift'+ k])<closestLiftAtLowerLevel){
                        closestLiftAtLowerLevel = floorNumber - currentLiftLevels['lift'+k]
                        console.log('the updated value of closestLowerLift is : ',closestLiftAtLowerLevel);   
                        
                    }
                }
            }

            let closestLiftAtLevel= 99999;
            let nearestLift= document.getElementById('lift1')

            if(Math.abs(closestLiftAtUpperLevel)<Math.abs(closestLiftAtLowerLevel)){
                 closestLiftAtLevel=closestLiftAtUpperLevel;
            }else{
                closestLiftAtLevel = closestLiftAtLowerLevel;
            }
            console.log('the closest lift is at floor level: ', closestLiftAtLevel);
            const allLiftsOnClosestLevel = Object.keys(currentLiftLevels).filter(key =>currentLiftLevels[key]===closestLiftAtLevel)
            if(allLiftsOnClosestLevel.length>0){
                const randomIndex = Math.floor(Math.random()*allLiftsOnClosestLevel*length)
                nearestLift = allLiftsOnClosestLevel[randomIndex]
            }
            console.log('the selected lift is : ',nearestLift);
            console.log('the id of selectedLift is : ', nearestLift.id);
            

            //.....contd. from here test above code  i.e check if above code finds lift and work on updating floor level of each lift
            let position = parseFloat(nearestLift.style.bottom);

            console.log('the position of lift right now:  ',parseFloat(nearestLift.style.bottom));
            
            let interval = setInterval(moveUp,  10);//call function after every 10 millisecs

            //change logic -> make suitable for iteration

            function moveUp(){
                if (position >=162*(floorNumber - 1)) {
                    currentLiftLevel = floorNumber - 1
                    currentLiftLevels[nearestLift.id] = currentLiftLevel;
                    clearInterval(interval); // Stop the animation when the box reaches the top
                } else {
                    position += 2; // Change this value to adjust the speed
                    nearestLift.style.bottom = position + 'px' ;
                }
            }
                        
        })
        const down =document.createElement('button')

        down.addEventListener('click', ()=>{
            console.log('down button clicked!');

            //logic to move the lift downwards

            console.log('The lift was requested on floor level  :', floorNumber);
           // const nearestLift= document.getElementById('lift1')
            console.log('the selected lift is : ',nearestLift);
            console.log('the current position of the lift is : ', currentLiftLevel);
            

            let position = parseFloat(nearestLift.style.bottom);

            console.log('the position of lift right now:  ',parseFloat(nearestLift.style.bottom));
            
            let interval = setInterval(moveDown,  10);//call function after every 10 millisecs

            //change logic -> make suitable for iteration

            function moveDown(){
                if (position <=162*(floorNumber - 1)) {
                    currentLiftLevel= floorNumber - 1;
                    clearInterval(interval); // Stop the animation when the box reaches the top
                } else {
                    position -= 2; // Change this value to adjust the speed
                    nearestLift.style.bottom = position + 'px' ;
                }
            }
         
           
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
                let liftname= 'lift'+j
                lift.id= 'lift'+ j;

                 currentLiftLevels[lift.id]=0
                console.log('the current lift is :',liftname);
                console.log('the current level of the lift is :',currentLiftLevels[liftname]);
                div.style.marginTop='-7.5px'
                lift.style.width='70px'
                lift.style.height='90px'
                lift.style.border='1px solid black'
                lift.style.backgroundColor='aqua'
                lift.style.marginLeft='75px'
                liftsContainer.appendChild(lift)
                lift.style.bottom=0;
                lift.style.position='relative'
            }
            console.log('the currentliftLevels of all lifts is ', currentLiftLevels);
            
            containerEL.appendChild(liftsContainer)

        }

        if(i == 0){
            up.style.visibility="hidden"
        }

        containerEL.appendChild(div)

    }  


})