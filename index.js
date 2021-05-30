// STep1 :- Generating a Random number using math library
let upper=100;
let lower=1;
let myrandom=Math.floor(Math.random()*(upper-lower+1)+lower);
// let myrandom=80;


// Step2:- Getting a user input
let input=document.getElementById('txt');
let userInput;
let result=document.getElementById('result');
let btn=document.getElementById('btn');
input.addEventListener('keyup',()=>{
      userInput=input.value;
      // console.log(userInput);
      //Step3:- Checking userinput number and random number are same or not using add button
      btn.addEventListener('click',()=>{
            let b=0;
            while (b==0) {
                  if (myrandom==userInput) {
                        let para=document.createElement('p');
                        para.innerText='Correct';
                        result.appendChild(para);
                        console.log('Correct');
                        b=b+1;
                        break;
                  }
                  else if(myrandom<userInput){
                        let para=document.createElement('p');
                        para.innerText='High';
                        result.appendChild(para);
                        console.log('High')
                        break;
                  }
                  else if(myrandom>userInput){
                        let para=document.createElement('p');
                        para.innerText='low';
                        result.appendChild(para);
                        // console.log('Low');
                        break;
                  }
            }
      })
            
});









