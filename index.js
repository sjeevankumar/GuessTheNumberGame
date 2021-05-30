let output=document.getElementById('outputtext');
let number=[Math.floor(Math.random()*100)];

btn.addEventListener('click',()=>{
      let input=document.getElementById('userInput').value;
      if(input==number){
            output.innerText=`You guessed right, your number was ${number}`
      }
      else if(input<number){
            output.innerText=`You guessed to low!`
      }
      if(input>number){
            output.innerText='You gussed to high!'
      }

}) 