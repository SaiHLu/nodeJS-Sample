// setTimeout(function() {
//     console.log('3seconds have passed');
// }, 3000);

var time = 0;

var timer = setInterval(function() {
        time += 2;
        console.log(time + ' seconds have passed');
        if (time >= 6) {
            console.log('stopped at '+time+' seconds');
            clearInterval(timer);
        }
}, 1000);