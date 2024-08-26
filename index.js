alert("Enter mound to plate distance then hit {Start} during release and then {Stop} when the ball crosses the plate.**.2 seconds truncated for estimated user lag**");
//initializing variables to update in real time
    let minutes = 0;    
    let seconds = 0;
    let tens = 0;
    let appendMinutes = document.querySelector('#minutes');
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let Interval;
    let dx = 0;
    const txt1 = document.getElementById('tbuser');
    const btn1 = document.getElementById('btn1');
    function fun1(){
      let ft = txt1.value; //getting value from text box 
      dx = ft * .3048;//converting feet to meters
    }
    btn1.addEventListener('click',fun1);//when user clicks Ok button next to the input box the function to instantiate and convert the distance is called 
  
window.onload = function () //function called as soon as webpage loads
{
    

    const startTimer = () => {
      tens++;
      if (tens <= 9) {
        appendTens.innerHTML = '0' + tens;
      }
      if (tens > 9) {
        appendTens.innerHTML = tens;
      }

      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;//at the 100th tenth of a second it transitions into a full second 
        tens = 0;
        appendTens.innerHTML = '0' + 0;
      }

      if (seconds > 9) {
        appendSeconds.innerHTML = seconds; //in order to put it in the correct time slot
      }

      if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = '0' + minutes;// at the 60th second it appends to a minute
        seconds = 0;
        appendSeconds.innerHTML = '0' + 0;
      }
    };

    startBtn.onclick = () => {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    };

    stopBtn.onclick = () => {
      clearInterval(Interval);
      calculate(appendSeconds.innerHTML,appendTens.innerHTML); //calling calculate method as soon as the stop button is clicked
    };

    resetBtn.onclick = () => {
      clearInterval(Interval);
      tens = '00';
      seconds = '00';
      minutes = '00';
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
      appendMinutes.innerHMTL = minutes;
      document.querySelector('#result').innerHTML= 'Your speed is:';
    };
    
  };
 calculate= (sec,ten) =>{
    let t = (parseFloat(sec +"."+ten)); //converting the string to a decimal form 
    let x = t-.2; //adjusting the time for user input lag 
    //let dx = ; //sdistance from the mound to the plate
    let acc = 9.8 //acceleration due to gravity 
    let final= (((dx-(.5*acc*x*x))/(x))*1000)/1000;//Kinematic equation  
    let final1 = ((final*2.23694)*1000)/1000;//converted to mph and then 
    document.querySelector('#result').innerHTML = 'Your speed adjusted is: '+final1+' mph';//updating speed

 }
 ;