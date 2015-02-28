# Step 1 - Define your states

So we'd like to create a simple button that is one DOM element and has three states: out, idle, rollover.

Before we can do any of that we must first instantiate a new `F1` instance:

```javascript
var f1 = require( 'f1' );

var ui = f1();
```

After this we can begin to define our states. Our states will be called out, idle, rollover.

```javascript
var f1 = require( 'f1' );

var ui = f1();
ui.states( {

    out: { 
        button: {}
    },
    idle: {
        button: {}
    },
    rollover: {
        button: {}
    }
})
```

Your states are now defined: out, idle, rollover. In each state we added a button object which will contain all the information to define the state for our item we'll animate. But obviously really nothing is going to happen if there are no values defined so lets add in some values.

```javascript
var f1 = require( 'f1' );

var ui = f1();
ui.states( {

    out: {
        button: {
            alpha: 0
        }
    },
    idle: {
        button: {
            alpha: 1    
        }
    },
    rollover: {
        button: {
            alpha: 0.1
        }
    }
});
```

You may notice we used the word alpha here to represent opacity. You could name them whatever you wanted but we'll discuss that later. But now your states are fully defined. When the button is in the out state it's opacity/alpha will be 0, idle it will be 1, and in rollover it'll be 0.1.

If you wanted to animate other properties you could simply add them in the button object for each state.

(step2.md)[Step 2 - Define your transitions]
