# Step 2 - Define your transitions

In the previous step we defined our states with the following code:

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

Next we'll want to define our transitions. Transitions tell `f1` which states it can move between.

Transitions are added by passing a an array to the transitions function. Let's add in some transitions:

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
})
.transitions( [

    'out', 'idle',
    'idle', 'rollover',
    'rollover', 'idle',
    'idle', 'out'
])
```

The following basically tells `f1` that we can move from `out` to `idle` and from `idle` to `rollover`. 

Next you might notice that we also tell `f1` that it can go from `rollover` to `idle`. All transitions are unidirectional. This means you can basically define a different animation or transition coming back from `rollover` to `idle` or even tell it a different path.

The best way to visualize this is a person walking an imaginary map. They can walk from the city named `idle` to the city named `rollover`.

At this point your ui element is almost ready to go. It has states defined and a map/transitions in how you can move between these states. The only problem is that we haven't brought in our poor dom element yet.

[Step 3 - Define what you will animate](step3.md)