

    window.onload=function(){
        var seconds = 00;
        var tens = 00;
        var appendTens = document.querySelector(".stopwatch .tens");
        var appendSeconds = document.querySelector(".stopwatch .seconds");
        var buttonStart = document.querySelector(".stopwatch .button-start");
        var buttonStop = document.querySelector(".stopwatch .button-stop");
        var buttonReset = document.querySelector(".stopwatch .button-reset");
        var Interval;


        buttonStart.onclick=function(){
            clearInterval(Interval)
            Interval = setInterval(startTimer, 10)
        }

        buttonStop.onclick= function(){
            clearInterval(Interval)
        }
        buttonReset.onclick= function(){
            clearInterval(Interval)
            tens= "00";
            seconds= "00";
            appendSeconds.innerHTML= seconds;
            appendTens.innerHTML = tens;
        }

        function startTimer(){
            tens++;
            if (tens <= 9) {
                appendTens.innerHTML = "0" + tens;
            }
            
            if (tens > 9) {
                appendTens.innerHTML = tens;
            }

            if (tens > 99) {
                seconds++;
                appendSeconds.innerHTML= "0" + seconds;
                tens = 0;
                appendTens.innerHTML = "0" + 0;
            }
            if (seconds>9) {
                appendSeconds.innerHTML = seconds;

            }
        }

    }
