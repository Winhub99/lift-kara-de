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
        function findNearestLift(){
            let minDistance=Infinity;
            nearestLift = null;

            for(let k=0;k<lifts;k++){
                const liftId = 'lift'+k;
                const currLift = document.getElementById(liftId)
                const liftLevel = currentLiftLevels[liftId]

                const distance = Math.abs(floorNumber - liftLevel)

                if(distance<minDistance){
                    minDistance= distance
                    nearestLift= currLift
                }
            }

            if(!nearestLift){
                nearestLift = document.getElementById('lift0')
            }
            console.log('the  nearest lift is as found by the function: ',nearestLift.id);
            
            return nearestLift;
        }

        function move(liftId,position){
            let interval;
            if(currentLiftLevels[liftId] < floorNumber){
                 interval = setInterval(moveUp,  10);//call function after every 10 millisecs

            }else{
                 interval = setInterval(moveDown,  10);//call function after every 10 millisecs

            }

            function moveUp(){
                if (position >=162*(floorNumber - 1)) {
                    currentLiftLevel = floorNumber - 1
                    currentLiftLevels[nearestLift.id] = currentLiftLevel;
                    console.log('the object is modified to : ', currentLiftLevels);
                    
                    clearInterval(interval); // Stop the animation when the box reaches the top
                } else {
                    position += 2; // Change this value to adjust the speed
                    nearestLift.style.bottom = position + 'px' ;
                }
            }

            function moveDown(){
                if (position <=162*(floorNumber - 1)) {
                    currentLiftLevel= floorNumber - 1;
                    currentLiftLevels[nearestLift.id] = currentLiftLevel;
                    console.log('the object is modified to : ', currentLiftLevels);

                    clearInterval(interval); // Stop the animation when the box reaches the top
                } else {
                    position -= 2; // Change this value to adjust the speed
                    nearestLift.style.bottom = position + 'px' ;
                }
            }
    

        }

        



        up.addEventListener('click', ()=>{
            debugger;
            let nearestLift =null

            console.log('up button clicked!');
            console.log('The lift was requested on floor level  :', floorNumber);
            console.log('here`s all info of lifts : ',currentLiftLevels );
            
           nearestLift= findNearestLift()
            

            console.log('Nearest lift selected is:', nearestLift.id);


            let position = parseFloat(nearestLift.style.bottom);

            console.log('the position of lift right now:  ',parseFloat(nearestLift.style.bottom));

            move(nearestLift.id,position)
            

            //change logic -> make suitable for iteration

            
                        
        })
        const down =document.createElement('button')

        down.addEventListener('click', ()=>{
            console.log('down button clicked!');
            let nearestLift =null

            nearestLift = findNearestLift()
            //logic to move the lift downwards
            debugger;
            console.log('The lift was requested on floor level  :', floorNumber);
           // const nearestLift= document.getElementById('lift1')
            console.log('the selected lift is : ',nearestLift.id);
            console.log('the current position of the lift is : ', currentLiftLevel);
            

            let position = parseFloat(nearestLift.style.bottom);

            //console.log('the position of lift right now:  ',parseFloat(nearestLift.style.bottom));
            
            move(nearestLift.id,position)
            //change logic -> make suitable for iteration

           
         
           
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

        // if(i == 0){
        //     up.style.visibility="hidden"
        // }

        containerEL.appendChild(div)

    }  


})