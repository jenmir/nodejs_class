var events = require('events'); 
/* include a class of events, instantiates a new module to understand events */

var actionHero = new events.EventEmitter();

/* when objects emit events, if there is an object listening for that event, it can use a callback to act when that event occurs */

actionHero.addListener('killBadGuys', function (){ /* anonymous function */
    console.log("I killed all the bad guys!");
})

actionHero.emit('killBadGuys');