# Step 4 - Making things move

If you were to run our current exmaple it would actually do nothing. :(

In order for `f1` to start to animate it needs to know the initial state where it should be for that we'll use the `init` method.

Using init looks like this:

```javascript
ui.init( 'out' );
```

You just simply pass it a string which corelates to the name of the initial state you want to animate/go to. In this case we're telling the `f1` ui instance to initialize itself on the `out` state.

After we've initialized `f1` we call call the `go` function to transition from the initial state (`'out'`) to another section. We'd do that like this:

```javascript
ui.go( 'idle' );
```

Let's put all this together:

```javascript
var f1 = require( 'f1' );
var find = require( 'dom-select' );

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

    { from: 'out', to: 'idle' },
    { from: 'idle', to: 'rollover' },
    { from: 'rollover', to: 'idle' },
    { from: 'idle', to: 'out' }
])
.targets( {
  
  button: find( '#button' )
})
.parsers( [

    function( button, state ) {

        button.style.opacity = state.alpha;
    }
])
.init( 'out' );

ui.go( 'idle' ); // will animate the f1 instance from out to go
```

Finally if you were to run the above code it'll actually fade in the button element.

You can call the `go` method at any point in time to animate to another state. Even mid animation you can call `go`. If for instance `f1` was animating from `idle` to `rollover` and all of a sudden you told it to go to `out` a route would be calculated and it would begin to animate towards out. In this case the path would look like this:
```
somewhere between idle and roll over -> idle -> out
```

So illustrate the ability to call `go` at any time let's add mouse events to our button:

```javascript
var f1 = require( 'f1' );
var find = require( 'dom-select' );

var button = find( '#button' );


/*********************************************************/
/*********************** SETUP F1 ************************/
/*********************************************************/
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

    { from: 'out', to: 'idle' },
    { from: 'idle', to: 'rollover' },
    { from: 'rollover', to: 'idle' },
    { from: 'idle', to: 'out' }
])
.targets( {

    button: button
})
.parsers( [ function( item, data ) {

    item.style.opacity = data.alpha;
}] )
.init( 'out' )
.go( 'idle' );


/*********************************************************/
/****************** ADD EVENT LISTENERS ******************/
/*********************************************************/
button.addEventListener( 'mouseenter', function() {

    ui.go( 'rollover' );
});

button.addEventListener( 'mouseleave', function() {

    ui.go( 'idle' );
});
```

If you run the example now you should be able to see the button animate in from being transparent and then on mouse over it'll become slightly transparent again.

[Step 5 - Tweaking Animations](step5.md)