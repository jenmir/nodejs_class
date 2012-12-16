var events = require('events');

var actionHero = new events.EventEmitter();

actionHero.addListener('killBadGuys', function (){
    console.log("I killed all the bad guys!");
})

actionHero.emit('killBadGuys');


function fightBadGuys(superpower, callback) {  /* calls the anonymous func "callback" */
    console.log("I'll fight the bad guys with my " + superpower);
    var result = true;
    var err = null;
    setTimeout(callback(err, result), 3000);  /* 3 secs */
}

fightBadGuys('hacker skills', function(err, result) { /* this anonymous func actually defines "callback" */
    if (err) {
        console.log("There was a problem fighting the bad guys. Pick a better superpower next time.");
        return;
    } else {
        console.log("I fought the bad guys and now they are defeated");
    }
});